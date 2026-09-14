const express = require('express');
const cors = require('cors');
const {
  compileOnly,
  runOnce,
  cleanupDir,
  compileAndRunOnce,
  normalizeOutput,
} = require('./sandbox');
const { getPublicQuestions, getQuestionById } = require('./questions');
const { PORT, GCC_PATH } = require('./config');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

// In-memory submission store, keyed by "studentId:questionId". Fine for a
// local single-process exam demo; swap for a real DB for multi-user/deployed use.
const submissions = new Map();

app.get('/api/health', (req, res) => {
  res.json({ ok: true, gcc: GCC_PATH });
});

app.get('/api/questions', (req, res) => {
  res.json({ questions: getPublicQuestions() });
});

// Run Code: compiles + executes once against either the provided custom
// stdin or an empty stdin. Returns real compiler/runtime output.
app.post('/api/run', async (req, res) => {
  const { code, stdin } = req.body || {};
  if (typeof code !== 'string' || !code.trim()) {
    return res.status(400).json({ error: 'code is required' });
  }
  try {
    const result = await compileAndRunOnce(code, typeof stdin === 'string' ? stdin : '');
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Internal sandbox error', detail: err.message });
  }
});

// Run Sample Test Cases: compiles once, runs against every sample test for
// the question, and reports real pass/fail per test.
app.post('/api/questions/:id/run-samples', async (req, res) => {
  const question = getQuestionById(req.params.id);
  if (!question) return res.status(404).json({ error: 'Unknown question id' });
  const { code } = req.body || {};
  if (typeof code !== 'string' || !code.trim()) {
    return res.status(400).json({ error: 'code is required' });
  }

  try {
    const compiled = await compileOnly(code);
    if (!compiled.success) {
      await cleanupDir(compiled.dir);
      return res.json({
        compile: { success: false, output: compiled.output },
        results: [],
        summary: { passed: 0, total: question.sampleTests.length },
      });
    }

    const results = [];
    for (let i = 0; i < question.sampleTests.length; i++) {
      const t = question.sampleTests[i];
      const run = await runOnce(compiled.exePath, compiled.dir, t.input);
      const actual = run.stdout;
      const passed =
        !run.timedOut &&
        !run.outputExceeded &&
        run.exitCode === 0 &&
        normalizeOutput(actual) === normalizeOutput(t.expectedOutput);

      let status = 'FAILED';
      if (run.timedOut) status = 'TLE';
      else if (run.outputExceeded) status = 'OUTPUT_LIMIT_EXCEEDED';
      else if (run.exitCode !== 0) status = 'RUNTIME_ERROR';
      else if (passed) status = 'PASSED';

      results.push({
        index: i + 1,
        input: t.input,
        expectedOutput: t.expectedOutput,
        actualOutput: actual,
        stderr: run.stderr,
        exitCode: run.exitCode,
        timedOut: run.timedOut,
        outputExceeded: run.outputExceeded,
        passed,
        status,
      });
    }
    await cleanupDir(compiled.dir);

    const passedCount = results.filter((r) => r.passed).length;
    res.json({
      compile: { success: true, output: compiled.output },
      results,
      summary: { passed: passedCount, total: question.sampleTests.length },
    });
  } catch (err) {
    res.status(500).json({ error: 'Internal sandbox error', detail: err.message });
  }
});

// Submit: compiles once, runs against sample + hidden tests, computes score,
// and stores the submission. Hidden test input/output is never returned.
app.post('/api/questions/:id/submit', async (req, res) => {
  const question = getQuestionById(req.params.id);
  if (!question) return res.status(404).json({ error: 'Unknown question id' });
  const { code, studentId } = req.body || {};
  if (typeof code !== 'string' || !code.trim()) {
    return res.status(400).json({ error: 'code is required' });
  }

  const key = `${studentId || 'anonymous'}:${question.id}`;
  if (submissions.has(key)) {
    return res.status(409).json({
      error: 'ALREADY_SUBMITTED',
      message: 'This question has already been submitted.',
      previous: submissions.get(key),
    });
  }

  try {
    const compiled = await compileOnly(code);
    const allTests = [
      ...question.sampleTests.map((t, i) => ({ ...t, kind: 'sample', label: `Test Case ${i + 1}` })),
      ...question.hiddenTests.map((t, i) => ({ ...t, kind: 'hidden', label: `Hidden Test ${i + 1}` })),
    ];

    if (!compiled.success) {
      const record = {
        questionId: question.id,
        studentId: studentId || 'anonymous',
        code,
        compile: { success: false, output: compiled.output },
        results: allTests.map((t) => ({ label: t.label, kind: t.kind, passed: false })),
        score: { passed: 0, total: allTests.length, percentage: 0 },
        submittedAt: new Date().toISOString(),
      };
      submissions.set(key, record);
      return res.json(record);
    }

    const results = [];
    for (const t of allTests) {
      const run = await runOnce(compiled.exePath, compiled.dir, t.input);
      const passed =
        !run.timedOut &&
        !run.outputExceeded &&
        run.exitCode === 0 &&
        normalizeOutput(run.stdout) === normalizeOutput(t.expectedOutput);
      results.push({
        label: t.label,
        kind: t.kind,
        passed,
        // sample test detail is safe to reveal; hidden tests stay opaque
        input: t.kind === 'sample' ? t.input : undefined,
        expectedOutput: t.kind === 'sample' ? t.expectedOutput : undefined,
        actualOutput: t.kind === 'sample' ? run.stdout : undefined,
      });
    }
    await cleanupDir(compiled.dir);

    const passedCount = results.filter((r) => r.passed).length;
    const record = {
      questionId: question.id,
      studentId: studentId || 'anonymous',
      code,
      compile: { success: true, output: compiled.output },
      results,
      score: {
        passed: passedCount,
        total: allTests.length,
        percentage: Math.round((passedCount / allTests.length) * 100),
      },
      submittedAt: new Date().toISOString(),
    };
    submissions.set(key, record);
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: 'Internal sandbox error', detail: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`C exam backend listening on http://localhost:${PORT}`);
  console.log(`Using gcc: ${GCC_PATH}`);
});
