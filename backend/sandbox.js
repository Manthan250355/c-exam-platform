/**
 * Process-level sandbox for compiling and running untrusted C code with gcc.
 *
 * Isolation model (no Docker/WSL available on this machine — see chat for the
 * tradeoff discussion). Each run gets:
 *   - a freshly created, uniquely-named temp directory (deleted afterward)
 *   - a hard wall-clock timeout on both compile and execute steps, enforced
 *     by actually killing the process tree (not just abandoning it)
 *   - a hard cap on stdout/stderr bytes read back, enforced by killing the
 *     process the instant the cap is exceeded (not just truncating the string)
 *   - statically-linked binaries (-static) so nothing outside the temp dir
 *     is touched at run time
 *   - no shell involved (spawn is called with an argv array, never a shell
 *     string), so the student's code/output can never be interpreted as a
 *     shell command
 *
 * What this does NOT provide (would need Docker/WSL/job objects for): a
 * memory limit, network isolation, or filesystem-permission sandboxing.
 * Those are called out explicitly in the API responses rather than faked.
 */

const { spawn, execSync } = require('child_process');
const fs = require('fs/promises');
const fsSync = require('fs');
const path = require('path');
const crypto = require('crypto');
const {
  GCC_PATH,
  SANDBOX_ROOT,
  COMPILE_TIMEOUT_MS,
  RUN_TIMEOUT_MS,
  MAX_OUTPUT_BYTES,
} = require('./config');

async function ensureSandboxRoot() {
  await fs.mkdir(SANDBOX_ROOT, { recursive: true });
}

function killTree(child) {
  if (!child || child.killed || child.exitCode !== null) return;
  try {
    child.kill('SIGKILL');
  } catch (e) {
    /* ignore */
  }
  if (process.platform === 'win32' && child.pid) {
    try {
      execSync(`taskkill /PID ${child.pid} /T /F`, { stdio: 'ignore' });
    } catch (e) {
      /* process may have already exited */
    }
  }
}

/**
 * Spawn a process, feed it optional stdin, and collect stdout/stderr with a
 * real timeout and a real output-size cap — both enforced by killing the
 * process, not by pretending after the fact.
 */
function runProcess(cmd, args, { cwd, timeoutMs, input }) {
  return new Promise((resolve) => {
    let child;
    try {
      child = spawn(cmd, args, { cwd, windowsHide: true });
    } catch (err) {
      resolve({
        code: null,
        stdout: '',
        stderr: `Failed to start process: ${err.message}`,
        timedOut: false,
        outputExceeded: false,
        spawnError: true,
      });
      return;
    }

    let stdout = '';
    let stderr = '';
    let stdoutBytes = 0;
    let stderrBytes = 0;
    let timedOut = false;
    let outputExceeded = false;
    let settled = false;

    const timer = setTimeout(() => {
      timedOut = true;
      killTree(child);
    }, timeoutMs);

    child.stdout.on('data', (chunk) => {
      stdoutBytes += chunk.length;
      if (stdoutBytes <= MAX_OUTPUT_BYTES) {
        stdout += chunk.toString('utf8');
      } else if (!outputExceeded) {
        outputExceeded = true;
        killTree(child);
      }
    });

    child.stderr.on('data', (chunk) => {
      stderrBytes += chunk.length;
      if (stderrBytes <= MAX_OUTPUT_BYTES) {
        stderr += chunk.toString('utf8');
      } else if (!outputExceeded) {
        outputExceeded = true;
        killTree(child);
      }
    });

    child.on('error', (err) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ code: null, stdout, stderr: stderr + `\n${err.message}`, timedOut, outputExceeded, spawnError: true });
    });

    child.on('close', (code, signal) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      resolve({ code, signal, stdout, stderr, timedOut, outputExceeded });
    });

    if (child.stdin) {
      child.stdin.on('error', () => {}); // swallow EPIPE if the child already exited
      child.stdin.write(input ?? '');
      child.stdin.end();
    }
  });
}

/** Rewrites the sandbox's real temp path to a stable, student-facing path in compiler output. */
function normalizePaths(text, dir) {
  if (!text) return text;
  const dirFwd = dir.replace(/\\/g, '/');
  const dirEsc = dir.replace(/\\/g, '\\\\');
  return text
    .split(dir).join('/usercode')
    .split(dirFwd).join('/usercode')
    .split(dirEsc).join('/usercode')
    .split('main.c').join('main.c'); // no-op, keeps filename as-is
}

/**
 * Compiles student code once. Returns either a failure (with real GCC
 * stderr) or a handle {dir, exePath} that can be executed multiple times
 * (used for running many test cases without recompiling for each one).
 */
async function compileOnly(code) {
  await ensureSandboxRoot();
  const id = crypto.randomUUID();
  const dir = path.join(SANDBOX_ROOT, id);
  await fs.mkdir(dir, { recursive: true });
  const srcPath = path.join(dir, 'main.c');
  const exePath = path.join(dir, 'main.exe');
  await fs.writeFile(srcPath, code, 'utf8');

  const compileRes = await runProcess(
    GCC_PATH,
    ['-Wall', '-Wextra', '-Wfatal-errors', '-std=c11', '-O2', '-static', '-static-libgcc', 'main.c', '-o', 'main.exe', '-lm'],
    { cwd: dir, timeoutMs: COMPILE_TIMEOUT_MS }
  );

  const stderrOut = normalizePaths(compileRes.stderr, dir);

  if (compileRes.timedOut) {
    return { success: false, dir, output: 'Compilation timed out.', timedOut: true };
  }
  if (compileRes.spawnError) {
    return { success: false, dir, output: stderrOut || 'Failed to invoke the compiler.' };
  }
  if (compileRes.code !== 0 || !fsSync.existsSync(exePath)) {
    return { success: false, dir, output: stderrOut || 'Compilation failed with an unknown error.' };
  }
  return { success: true, dir, exePath, output: stderrOut /* warnings, if any */ };
}

/** Runs an already-compiled binary once against the given stdin. */
async function runOnce(exePath, dir, stdinInput) {
  const runRes = await runProcess(exePath, [], {
    cwd: dir,
    timeoutMs: RUN_TIMEOUT_MS,
    input: stdinInput ?? '',
  });
  return {
    stdout: runRes.stdout,
    stderr: normalizePaths(runRes.stderr, dir),
    exitCode: runRes.code,
    signal: runRes.signal,
    timedOut: runRes.timedOut,
    outputExceeded: runRes.outputExceeded,
    spawnError: !!runRes.spawnError,
  };
}

async function cleanupDir(dir) {
  try {
    await fs.rm(dir, { recursive: true, force: true });
  } catch (e) {
    /* best effort */
  }
}

/** Convenience: compile + run once, then clean up. Used by the "Run Code" / custom-input flow. */
async function compileAndRunOnce(code, stdinInput) {
  const compiled = await compileOnly(code);
  if (!compiled.success) {
    await cleanupDir(compiled.dir);
    return { compile: { success: false, output: compiled.output, timedOut: !!compiled.timedOut }, run: null };
  }
  const run = await runOnce(compiled.exePath, compiled.dir, stdinInput);
  await cleanupDir(compiled.dir);
  return { compile: { success: true, output: compiled.output }, run };
}

/** Normalizes program output for comparison: CRLF->LF, strip trailing spaces per line, strip trailing blank lines. */
function normalizeOutput(s) {
  return (s ?? '')
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map((line) => line.replace(/[ \t]+$/, ''))
    .join('\n')
    .replace(/\n+$/, '');
}

module.exports = {
  compileOnly,
  runOnce,
  cleanupDir,
  compileAndRunOnce,
  normalizeOutput,
};
