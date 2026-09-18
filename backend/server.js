const express = require('express');
const cors = require('cors');
const {
  compileOnly,
  runOnce,
  cleanupDir,
  compileAndRunOnce,
  normalizeOutput,
} = require('./sandbox');
const { getPublicQuestions, getAnswerKeyData, getQuestionById } = require('./questions');
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

// Answer Key: a reference view, not an exam — for coding questions this is
// just the same sample I/O already shown during the exam; for MCQ questions
// it includes correctIndex (deliberately withheld from /api/questions so
// students don't see it while answering). No auth/gating — this mirrors how
// the rest of this demo site works (see README's sandboxing note).
app.get('/api/answer-key', (req, res) => {
  res.json({ questions: getAnswerKeyData() });
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
  if (question.type === 'mcq') return res.status(400).json({ error: 'This is an MCQ question and does not use this endpoint' });
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

// Shared grading logic: compiles once, runs against every sample + hidden
// test, and reports pass/fail per test plus an aggregate score. Used by both
// /submit (persists + blocks duplicates — for normal practice mode) and
// /score (stateless — for Test mode, where results stay hidden until all 30
// questions are graded together at the end).
async function gradeAgainstAllTests(question, code) {
  const compiled = await compileOnly(code);
  const allTests = [
    ...question.sampleTests.map((t, i) => ({ ...t, kind: 'sample', label: `Test Case ${i + 1}` })),
    ...question.hiddenTests.map((t, i) => ({ ...t, kind: 'hidden', label: `Hidden Test ${i + 1}` })),
  ];

  if (!compiled.success) {
    await cleanupDir(compiled.dir);
    return {
      compile: { success: false, output: compiled.output },
      results: allTests.map((t) => ({ label: t.label, kind: t.kind, passed: false })),
      score: { passed: 0, total: allTests.length, percentage: 0 },
    };
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
  return {
    compile: { success: true, output: compiled.output },
    results,
    score: {
      passed: passedCount,
      total: allTests.length,
      percentage: Math.round((passedCount / allTests.length) * 100),
    },
  };
}

// Submit: grades once, then persists the result and blocks re-submission —
// this is the normal-mode, "counts for real" submission.
app.post('/api/questions/:id/submit', async (req, res) => {
  const question = getQuestionById(req.params.id);
  if (!question) return res.status(404).json({ error: 'Unknown question id' });
  if (question.type === 'mcq') return res.status(400).json({ error: 'This is an MCQ question and does not use this endpoint' });
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
    const graded = await gradeAgainstAllTests(question, code);
    const record = {
      questionId: question.id,
      studentId: studentId || 'anonymous',
      code,
      ...graded,
      submittedAt: new Date().toISOString(),
    };
    submissions.set(key, record);
    res.json(record);
  } catch (err) {
    res.status(500).json({ error: 'Internal sandbox error', detail: err.message });
  }
});

// Score: same grading as /submit, but stateless — no persistence, no
// duplicate-blocking, and no "already submitted" concept. Used only by Test
// mode, which grades all 30 questions together at the very end rather than
// revealing pass/fail as the student goes.
app.post('/api/questions/:id/score', async (req, res) => {
  const question = getQuestionById(req.params.id);
  if (!question) return res.status(404).json({ error: 'Unknown question id' });
  if (question.type === 'mcq') return res.status(400).json({ error: 'This is an MCQ question and does not use this endpoint' });
  const { code } = req.body || {};
  if (typeof code !== 'string' || !code.trim()) {
    return res.json({
      compile: { success: false, output: 'No code was written for this question.' },
      results: [],
      score: { passed: 0, total: question.sampleTests.length + question.hiddenTests.length, percentage: 0 },
    });
  }

  try {
    const graded = await gradeAgainstAllTests(question, code);
    res.json({ questionId: question.id, ...graded });
  } catch (err) {
    res.status(500).json({ error: 'Internal sandbox error', detail: err.message });
  }
});

// MCQ check: click an option, see instantly whether it's correct. No
// submission record, no locking, no duplicate-prevention — this is a
// practice/self-check interaction, not a graded submission. correctIndex is
// still never sent by GET /api/questions; it's only revealed here, per
// question, once the student actually picks an answer for it.
app.post('/api/mcq/:id/check', (req, res) => {
  const question = getQuestionById(req.params.id);
  if (!question) return res.status(404).json({ error: 'Unknown question id' });
  if (question.type !== 'mcq') return res.status(400).json({ error: 'This is not an MCQ question' });

  const { selectedIndex } = req.body || {};
  if (typeof selectedIndex !== 'number' || selectedIndex < 0 || selectedIndex > 3) {
    return res.status(400).json({ error: 'selectedIndex (0-3) is required' });
  }

  res.json({
    questionId: question.id,
    selectedIndex,
    correctIndex: question.correctIndex,
    correct: selectedIndex === question.correctIndex,
  });
});

app.listen(PORT, () => {
  console.log(`C exam backend listening on http://localhost:${PORT}`);
  console.log(`Using gcc: ${GCC_PATH}`);
});
