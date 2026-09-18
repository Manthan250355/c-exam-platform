import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionPanel from './components/QuestionPanel';
import EditorPanel from './components/EditorPanel';
import { fetchQuestions, runCode, scoreQuestion } from './api';
import { useCountdown, formatHMS } from './useCountdown';
import type { Question, QuestionStatus, RunCodeResponse, ScoreResponse } from './types';

const STUDENT_NAME = 'Tania Kataria';
const STUDENT_ID = '2610992624';
const TEST_QUESTION_COUNT = 30;
const SECONDS_PER_QUESTION = 326; // same pacing as normal coding practice

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = 'loading' | 'error' | 'start' | 'running' | 'grading' | 'results';

export default function CodingTestExam({ sectionName, onExit }: { sectionName: string; onExit: () => void }) {
  const [phase, setPhase] = useState<Phase>('loading');
  const [error, setError] = useState('');
  const [testQuestions, setTestQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [codeByQuestion, setCodeByQuestion] = useState<Record<number, string>>({});
  const [statusByQuestionId, setStatusByQuestionId] = useState<Record<number, QuestionStatus>>({});
  const [runResult, setRunResult] = useState<RunCodeResponse | null>(null);
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [customInputEnabled, setCustomInputEnabled] = useState(false);
  const [customInputValue, setCustomInputValue] = useState('');
  const [fontSize, setFontSize] = useState(14);

  const [gradingProgress, setGradingProgress] = useState(0);
  const [results, setResults] = useState<Record<number, ScoreResponse>>({});

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenExitCount, setFullscreenExitCount] = useState(0);
  const [fullscreenWarning, setFullscreenWarning] = useState(false);
  const hasStartedFullscreenTracking = useRef(false);

  const examDurationSeconds = TEST_QUESTION_COUNT * SECONDS_PER_QUESTION;

  useEffect(() => {
    fetchQuestions()
      .then((all) => {
        const pool = all.filter((q) => q.section === sectionName && !('type' in q)) as Question[];
        const picked = shuffle(pool).slice(0, TEST_QUESTION_COUNT);
        setTestQuestions(picked);
        const initialCode: Record<number, string> = {};
        const initialStatus: Record<number, QuestionStatus> = {};
        picked.forEach((q) => {
          initialCode[q.id] = q.starterCode;
          initialStatus[q.id] = 'unattempted';
        });
        setCodeByQuestion(initialCode);
        setStatusByQuestionId(initialStatus);
        setPhase('start');
      })
      .catch((e) => {
        setError(e.message || 'Failed to load test questions.');
        setPhase('error');
      });
  }, [sectionName]);

  useEffect(() => {
    const handler = () => {
      const fs = !!document.fullscreenElement;
      setIsFullscreen(fs);
      if (!fs && hasStartedFullscreenTracking.current) {
        setFullscreenExitCount((c) => c + 1);
        setFullscreenWarning(true);
        setTimeout(() => setFullscreenWarning(false), 4000);
      }
    };
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  const attemptedCount = useMemo(
    () => Object.values(statusByQuestionId).filter((s) => s !== 'unattempted').length,
    [statusByQuestionId]
  );

  async function finishTest() {
    setPhase('grading');
    setGradingProgress(0);
    const graded: Record<number, ScoreResponse> = {};
    for (let i = 0; i < testQuestions.length; i++) {
      const q = testQuestions[i];
      try {
        const res = await scoreQuestion(q.id, codeByQuestion[q.id] ?? q.starterCode);
        graded[q.id] = res;
      } catch {
        graded[q.id] = { questionId: q.id, compile: { success: false, output: 'Could not reach the grading backend.' }, results: [], score: { passed: 0, total: 1, percentage: 0 } };
      }
      setGradingProgress(i + 1);
    }
    setResults(graded);
    setPhase('results');
  }

  const secondsLeft = useCountdown(examDurationSeconds, () => finishTest(), phase === 'running');
  const warningLevel = secondsLeft <= 300 ? 'critical' : secondsLeft <= 600 ? 'warning' : 'normal';

  async function handleStart() {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      /* browser/OS may block it — test still proceeds */
    }
    hasStartedFullscreenTracking.current = true;
    setPhase('running');
  }

  const currentQuestion = testQuestions[currentIndex];

  function handleCodeChange(value: string) {
    if (!currentQuestion) return;
    setCodeByQuestion((prev) => ({ ...prev, [currentQuestion.id]: value }));
    setStatusByQuestionId((prev) => (prev[currentQuestion.id] === 'unattempted' ? { ...prev, [currentQuestion.id]: 'attempted' } : prev));
  }

  async function handleRunCode() {
    if (!currentQuestion || isRunningCode) return;
    setIsRunningCode(true);
    const code = codeByQuestion[currentQuestion.id] ?? currentQuestion.starterCode;
    const stdin = customInputEnabled ? customInputValue : '';
    try {
      const result = await runCode(code, stdin);
      setRunResult(result);
    } catch (e: any) {
      setRunResult({ compile: { success: false, output: `Could not reach the execution backend:\n${e.message}` }, run: null });
    } finally {
      setIsRunningCode(false);
    }
  }

  function handleSelectQuestion(idx: number) {
    setCurrentIndex(idx);
    setRunResult(null);
  }

  const overallScore = useMemo(() => {
    const entries = Object.values(results);
    const fullyCorrect = entries.filter((r) => r.score.percentage === 100).length;
    const avgPercentage = entries.length ? Math.round(entries.reduce((a, r) => a + r.score.percentage, 0) / entries.length) : 0;
    return { fullyCorrect, total: entries.length, avgPercentage };
  }, [results]);

  if (phase === 'loading') {
    return <div className="loading-screen">Preparing your test…</div>;
  }

  if (phase === 'error') {
    return (
      <div className="fatal-error-screen">
        <h1>Could not start the test</h1>
        <p>{error}</p>
        <button className="btn btn-nav" type="button" onClick={onExit}>
          &lsaquo; Back
        </button>
      </div>
    );
  }

  if (phase === 'start') {
    return (
      <div className="start-screen">
        <div className="start-card">
          <div className="logo start-logo">
            <span className="logo-mark">{'</>'}</span>
            <span className="logo-text">CodeExam</span>
          </div>
          <h1>{sectionName} — 30-Question Test</h1>
          <div className="start-info">
            <div>
              <span>Candidate</span>
              <strong>{STUDENT_NAME}</strong>
            </div>
            <div>
              <span>Student ID</span>
              <strong>{STUDENT_ID}</strong>
            </div>
            <div>
              <span>Section</span>
              <strong>{sectionName}</strong>
            </div>
            <div>
              <span>Questions</span>
              <strong>{testQuestions.length} (random)</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>{formatHMS(examDurationSeconds)}</strong>
            </div>
          </div>
          <p className="start-note">
            You can still use <strong>Run Code</strong> to compile/debug each question, but pass/fail against test
            cases is <strong>not</strong> shown as you go. All {testQuestions.length} are graded together — with a
            real gcc compile + run — only after you finish or time runs out.
          </p>
          <button className="btn btn-submit start-btn" type="button" onClick={handleStart}>
            Enter Full Screen &amp; Start Test
          </button>
        </div>
      </div>
    );
  }

  if (phase === 'grading') {
    return (
      <div className="loading-screen">
        <p>Grading your submissions with real gcc — {gradingProgress}/{testQuestions.length}…</p>
      </div>
    );
  }

  if (phase === 'results') {
    return (
      <div className="answer-key-root">
        <header className="answer-key-header">
          <button className="btn btn-nav" type="button" onClick={onExit}>
            &lsaquo; Back to Question Sets
          </button>
          <h1>Test Results — {sectionName}</h1>
          <div className="answer-key-header-spacer" />
        </header>
        <div className="answer-key-body">
          <div className="test-score-banner">
            <div className="test-score-number">
              {overallScore.fullyCorrect} / {overallScore.total}
            </div>
            <div className="test-score-percent">
              fully correct &middot; {overallScore.avgPercentage}% average test-case score across all questions
            </div>
          </div>

          <h2 className="answer-key-section-title" style={{ marginTop: 32 }}>
            Review
          </h2>
          <div className="answer-key-coding-list">
            {testQuestions.map((q, idx) => {
              const r = results[q.id];
              const pass = r?.score.percentage === 100;
              return (
                <div key={q.id} className="answer-key-coding-item">
                  <div className="answer-key-coding-title">
                    {idx + 1}. {q.title}{' '}
                    <span className={`tc-pill ${pass ? 'tc-pill-pass' : 'tc-pill-fail'}`}>
                      {r ? `${r.score.passed}/${r.score.total} tests` : 'not graded'}
                    </span>
                  </div>
                  {r && !r.compile.success && <pre className="answer-key-io-block" style={{ color: 'var(--red)' }}>{r.compile.output}</pre>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // running
  const code = codeByQuestion[currentQuestion.id] ?? currentQuestion.starterCode;

  return (
    <div className="exam-root">
      <Header
        timeLeftSeconds={secondsLeft}
        warningLevel={warningLevel}
        studentName={STUDENT_NAME}
        studentId={STUDENT_ID}
        section={sectionName}
        currentQuestionNumber={currentIndex + 1}
        totalQuestions={testQuestions.length}
        isFullscreen={isFullscreen}
        fullscreenExitCount={fullscreenExitCount}
        connectionOk={true}
        attemptedCount={attemptedCount}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        onHome={onExit}
      />

      {fullscreenWarning && (
        <div className="fullscreen-warning-banner">
          Warning: You exited full-screen mode. ({fullscreenExitCount} time{fullscreenExitCount === 1 ? '' : 's'})
        </div>
      )}

      <div className="exam-body">
        <Sidebar
          questions={testQuestions}
          currentIndex={currentIndex}
          statusByQuestionId={statusByQuestionId}
          onSelect={handleSelectQuestion}
          locked={false}
        />

        <div className="exam-main">
          <div className="exam-panels">
            <QuestionPanel question={currentQuestion} questionNumber={currentIndex + 1} />
            <EditorPanel code={code} onChange={handleCodeChange} fontSize={fontSize} disabled={false} />
          </div>

          <section className="console-panel test-console-panel">
            <div className="console-tabs">
              <span className="console-tab console-tab-active" style={{ cursor: 'default' }}>
                Console
              </span>
            </div>
            <div className="console-body">
              {isRunningCode && <div className="console-placeholder">Compiling…</div>}
              {!isRunningCode && !runResult && (
                <div className="console-placeholder">
                  Click "Run Code" to compile and debug — this does not reveal pass/fail against test cases.
                </div>
              )}
              {!isRunningCode && runResult && (
                <div className={`console-output ${runResult.compile.success ? 'console-output-success' : 'console-output-error'}`}>
                  {!runResult.compile.success ? (
                    <>
                      <div className="console-state-label">Compilation Error</div>
                      <pre>{runResult.compile.output}</pre>
                    </>
                  ) : (
                    <>
                      <div className="console-state-label">Compilation Successful</div>
                      <div className="console-sub-label">stdout</div>
                      <pre>{runResult.run?.stdout || '(no output)'}</pre>
                      {runResult.run?.stderr && (
                        <>
                          <div className="console-sub-label">stderr</div>
                          <pre>{runResult.run.stderr}</pre>
                        </>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          </section>

          <div className="custom-input-strip">
            <label className="custom-input-toggle">
              <input type="checkbox" checked={customInputEnabled} onChange={(e) => setCustomInputEnabled(e.target.checked)} />
              Custom Input
            </label>
            {customInputEnabled && (
              <textarea
                className="custom-input-box"
                placeholder="Enter stdin for Run Code…"
                value={customInputValue}
                onChange={(e) => setCustomInputValue(e.target.value)}
                rows={2}
              />
            )}
          </div>

          <div className="bottom-nav">
            <button
              className="btn btn-nav"
              type="button"
              onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
              disabled={currentIndex === 0}
            >
              &lsaquo; Previous
            </button>
            <div className="bottom-nav-right">
              <button className="btn btn-outline btn-run" type="button" onClick={handleRunCode} disabled={isRunningCode}>
                {isRunningCode ? 'Running…' : 'Run Code'}
              </button>
              <button className="btn btn-submit" type="button" onClick={finishTest}>
                Finish Test
              </button>
              <button
                className="btn btn-nav"
                type="button"
                onClick={() => setCurrentIndex((i) => Math.min(testQuestions.length - 1, i + 1))}
                disabled={currentIndex === testQuestions.length - 1}
              >
                Next &rsaquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
