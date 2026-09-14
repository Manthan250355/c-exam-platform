const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const isWindows = process.platform === 'win32';

function resolveGcc() {
  const candidates = [
    process.env.GCC_PATH,
    // Windows dev machine fallback (WinLibs MinGW-w64 via winget). Harmless elsewhere —
    // fs.existsSync just returns false on Linux/Render.
    'C:\\Users\\manth\\AppData\\Local\\Microsoft\\WinGet\\Packages\\BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe\\mingw64\\bin\\gcc.exe',
  ].filter(Boolean);

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }

  try {
    const out = execSync(isWindows ? 'where gcc' : 'which gcc', { encoding: 'utf8' })
      .split(/\r?\n/)[0]
      .trim();
    if (out && fs.existsSync(out)) return out;
  } catch (e) {
    // fall through
  }

  throw new Error(
    'gcc could not be located. Install a gcc toolchain ' +
    '(WinLibs MinGW-w64 on Windows, `apt-get install gcc` on Debian/Ubuntu) ' +
    'or set the GCC_PATH environment variable to the full path of the gcc executable.'
  );
}

module.exports = {
  GCC_PATH: resolveGcc(),
  SANDBOX_ROOT: path.join(__dirname, 'sandbox_tmp'),
  COMPILE_TIMEOUT_MS: 10_000,
  RUN_TIMEOUT_MS: 5_000,
  MAX_OUTPUT_BYTES: 256 * 1024, // 256KB cap per stream
  PORT: process.env.PORT || 4000,
};
