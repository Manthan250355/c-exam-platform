import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import QuestionPanel from './components/QuestionPanel';
import EditorPanel from './components/EditorPanel';
import ConsolePanel from './components/ConsolePanel';
import SubmitModal from './components/SubmitModal';
import { checkHealth, runCode, runSampleTests, submitQuestion } from './api';
import { useCountdown, formatHMS } from './useCountdown';
import type {
  ConsoleTab,
  Question,
  QuestionStatus,
  RunCodeResponse,
  RunSamplesResponse,
  SubmitResponse,
} from './types';

const STUDENT_NAME = 'Tania Kataria';
const STUDENT_ID = '2610992624';

// Total exam time scales with the size of the question bank rather than being a
// fixed constant, so adding more questions to the bank automatically extends the
// clock instead of leaving students with an impossible amount to do in a fixed
// window. Pace matches the original 5-question exam (00:27:10 total ≈ 326s/question).
const SECONDS_PER_QUESTION = 326;

type SubmitModalState =
  | { mode: 'none' }
  | { mode: 'confirm' }
  | { mode: 'result'; result: SubmitResponse }
  | { mode: 'already' };

export default function Exam({ questions }: { questions: Question[] }) {
  const examDurationSeconds = questions.length * SECONDS_PER_QUESTION;

  const [testStarted, setTestStarted] = useState(false);
  const [testLocked, setTestLocked] = useState(false);
  const [timesUpVisible, setTimesUpVisible] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [codeByQuestion, setCodeByQuestion] = useState<Record<number, string>>(() => {
    const initial: Record<number, string> = {};
    questions.forEach((q) => { initial[q.id] = q.starterCode; });
    return initial;
  });
  const [statusByQuestionId, setStatusByQuestionId] = useState<Record<number, QuestionStatus>>(() => {
    const initial: Record<number, QuestionStatus> = {};
    questions.forEach((q) => { initial[q.id] = 'unattempted'; });
    return initial;
  });
  const [runResultsByQuestion, setRunResultsByQuestion] = useState<Record<number, RunCodeResponse | null>>({});
  const [sampleResponsesByQuestion, setSampleResponsesByQuestion] = useState<Record<number, RunSamplesResponse | null>>(
    {}
  );
  const [submittedByQuestion, setSubmittedByQuestion] = useState<Record<number, SubmitResponse>>({});

  const [activeTab, setActiveTab] = useState<ConsoleTab>('console');
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [isRunningSamples, setIsRunningSamples] = useState(false);
  const [customInputEnabled, setCustomInputEnabled] = useState(false);
  const [customInputValue, setCustomInputValue] = useState('');
  const [fontSize, setFontSize] = useState(14);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenExitCount, setFullscreenExitCount] = useState(0);
  const [fullscreenWarning, setFullscreenWarning] = useState(false);

  const [connectionOk, setConnectionOk] = useState(true);
  const [submitModal, setSubmitModal] = useState<SubmitModalState>({ mode: 'none' });
  const [submitting, setSubmitting] = useState(false);

  const hasStartedFullscreenTracking = useRef(false);

  // Poll backend connectivity for the header's online/offline indicator.
  useEffect(() => {
    let cancelled = false;
    const tick = async () => {
      const ok = await checkHealth();
      if (!cancelled) setConnectionOk(ok);
    };
    tick();
    const interval = setInterval(tick, 5000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  // Fullscreen tracking.
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

  const currentQuestion = questions[currentIndex];

  const attemptedCount = useMemo(
    () => Object.values(statusByQuestionId).filter((s) => s !== 'unattempted').length,
    [statusByQuestionId]
  );

  const handleExpire = () => {
    setTestLocked(true);
    setTimesUpVisible(true);
    // Best-effort auto-submit of anything not yet submitted when time runs out.
    questions.forEach((q) => {
      if (!submittedByQuestion[q.id]) {
        submitQuestion(q.id, codeByQuestion[q.id] ?? q.starterCode, STUDENT_ID)
          .then((result) => setSubmittedByQuestion((prev) => ({ ...prev, [q.id]: result })))
          .catch(() => {
            /* already submitted or unreachable — nothing more we can do automatically */
          });
      }
    });
  };

  const secondsLeft = useCountdown(examDurationSeconds, handleExpire, testStarted);
  const warningLevel = secondsLeft <= 300 ? 'critical' : secondsLeft <= 600 ? 'warning' : 'normal';

  function markAttempted(id: number) {
    setStatusByQuestionId((prev) => (prev[id] === 'unattempted' ? { ...prev, [id]: 'attempted' } : prev));
  }

  async function handleStart() {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      /* user's browser/OS may block it — exam still proceeds, just not fullscreen */
    }
    hasStartedFullscreenTracking.current = true;
    setTestStarted(true);
  }

  function handleSelectQuestion(idx: number) {
    setCurrentIndex(idx);
    setActiveTab('console');
  }

  function handleCodeChange(value: string) {
    if (!currentQuestion) return;
    setCodeByQuestion((prev) => ({ ...prev, [currentQuestion.id]: value }));
  }

  async function handleRunCode() {
    if (!currentQuestion || isRunningCode || testLocked) return;
    setIsRunningCode(true);
    setActiveTab('console');
    const code = codeByQuestion[currentQuestion.id] ?? currentQuestion.starterCode;
    const stdin = customInputEnabled ? customInputValue : '';
    try {
      const result = await runCode(code, stdin);
      setRunResultsByQuestion((prev) => ({ ...prev, [currentQuestion.id]: result }));
      markAttempted(currentQuestion.id);
    } catch (e: any) {
      setRunResultsByQuestion((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          compile: { success: false, output: `Could not reach the execution backend:\n${e.message}` },
          run: null,
        },
      }));
    } finally {
      setIsRunningCode(false);
    }
  }

  async function handleRunSamples() {
    if (!currentQuestion || isRunningSamples || testLocked) return;
    setIsRunningSamples(true);
    setActiveTab('runsamples');
    const code = codeByQuestion[currentQuestion.id] ?? currentQuestion.starterCode;
    try {
      const result = await runSampleTests(currentQuestion.id, code);
      setSampleResponsesByQuestion((prev) => ({ ...prev, [currentQuestion.id]: result }));
      markAttempted(currentQuestion.id);
    } catch (e: any) {
      setSampleResponsesByQuestion((prev) => ({
        ...prev,
        [currentQuestion.id]: {
          compile: { success: false, output: `Could not reach the execution backend:\n${e.message}` },
          results: [],
          summary: { passed: 0, total: currentQuestion.sampleTests.length },
        },
      }));
    } finally {
      setIsRunningSamples(false);
    }
  }

  function openSubmitConfirm() {
    if (!currentQuestion || testLocked) return;
    if (submittedByQuestion[currentQuestion.id]) {
      setSubmitModal({ mode: 'already' });
      return;
    }
    setSubmitModal({ mode: 'confirm' });
  }

  async function confirmSubmit() {
    if (!currentQuestion) return;
    setSubmitting(true);
    const code = codeByQuestion[currentQuestion.id] ?? currentQuestion.starterCode;
    try {
      const result = await submitQuestion(currentQuestion.id, code, STUDENT_ID);
      setSubmittedByQuestion((prev) => ({ ...prev, [currentQuestion.id]: result }));
      const status: QuestionStatus =
        result.score.percentage === 100 ? 'correct' : result.score.percentage === 0 ? 'wrong' : 'partial';
      setStatusByQuestionId((prev) => ({ ...prev, [currentQuestion.id]: status }));
      setSubmitModal({ mode: 'result', result });
    } catch (e: any) {
      if (e.status === 409 && e.body?.previous) {
        setSubmittedByQuestion((prev) => ({ ...prev, [currentQuestion.id]: e.body.previous }));
        setSubmitModal({ mode: 'already' });
      } else {
        alert(`Submission failed: ${e.message}`);
        setSubmitModal({ mode: 'none' });
      }
    } finally {
      setSubmitting(false);
    }
  }

  function handleHome() {
    const ok = window.confirm('Leave the test? Your in-progress answers are only kept for this session.');
    if (ok) window.location.reload();
  }

  if (!testStarted) {
    return (
      <div className="start-screen">
        <div className="start-card">
          <div className="logo start-logo">
            <span className="logo-mark">{'</>'}</span>
            <span className="logo-text">CodeExam</span>
          </div>
          <h1>C Programming — Online Test</h1>
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
              <strong>{questions[0].section}</strong>
            </div>
            <div>
              <span>Questions</span>
              <strong>{questions.length}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>{formatHMS(examDurationSeconds)}</strong>
            </div>
          </div>
          <p className="start-note">
            The exam will enter full-screen mode. Exiting full-screen during the test will be recorded as a warning.
            The timer starts the moment you click Start and cannot be paused. Duration scales with the number of
            questions ({SECONDS_PER_QUESTION}s allotted per question).
          </p>
          <button className="btn btn-submit start-btn" type="button" onClick={handleStart}>
            Enter Full Screen &amp; Start Test
          </button>
        </div>
      </div>
    );
  }

  const code = codeByQuestion[currentQuestion.id] ?? currentQuestion.starterCode;
  const runResult = runResultsByQuestion[currentQuestion.id] ?? null;
  const sampleResponse = sampleResponsesByQuestion[currentQuestion.id] ?? null;
  const alreadySubmitted = !!submittedByQuestion[currentQuestion.id];

  return (
    <div className="exam-root">
      <Header
        timeLeftSeconds={secondsLeft}
        warningLevel={warningLevel}
        studentName={STUDENT_NAME}
        studentId={STUDENT_ID}
        section={currentQuestion.section}
        currentQuestionNumber={currentIndex + 1}
        totalQuestions={questions.length}
        isFullscreen={isFullscreen}
        fullscreenExitCount={fullscreenExitCount}
        connectionOk={connectionOk}
        attemptedCount={attemptedCount}
        fontSize={fontSize}
        onFontSizeChange={setFontSize}
        onHome={handleHome}
      />

      {fullscreenWarning && (
        <div className="fullscreen-warning-banner">Warning: You exited full-screen mode. ({fullscreenExitCount} time{fullscreenExitCount === 1 ? '' : 's'})</div>
      )}

      <div className="exam-body">
        <Sidebar
          questions={questions}
          currentIndex={currentIndex}
          statusByQuestionId={statusByQuestionId}
          onSelect={handleSelectQuestion}
          locked={testLocked}
        />

        <div className="exam-main">
          <div className="exam-panels">
            <QuestionPanel question={currentQuestion} questionNumber={currentIndex + 1} />
            <EditorPanel code={code} onChange={handleCodeChange} fontSize={fontSize} disabled={testLocked} />
          </div>

          <ConsolePanel
            activeTab={activeTab}
            onTabChange={setActiveTab}
            runResult={runResult}
            isRunningCode={isRunningCode}
            sampleResponse={sampleResponse}
            isRunningSamples={isRunningSamples}
            onRunSamples={handleRunSamples}
            totalSampleTests={currentQuestion.sampleTests.length}
          />

          <div className="custom-input-strip">
            <label className="custom-input-toggle">
              <input
                type="checkbox"
                checked={customInputEnabled}
                onChange={(e) => setCustomInputEnabled(e.target.checked)}
                disabled={testLocked}
              />
              Custom Input
            </label>
            {customInputEnabled && (
              <textarea
                className="custom-input-box"
                placeholder="Enter stdin for Run Code…"
                value={customInputValue}
                onChange={(e) => setCustomInputValue(e.target.value)}
                disabled={testLocked}
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
              <button className="btn btn-outline btn-run" type="button" onClick={handleRunCode} disabled={isRunningCode || testLocked}>
                {isRunningCode ? 'Running…' : 'Run Code'}
              </button>
              <button
                className="btn btn-submit"
                type="button"
                onClick={openSubmitConfirm}
                disabled={testLocked || alreadySubmitted}
              >
                {alreadySubmitted ? 'Submitted ✓' : 'Submit'}
              </button>
              <button
                className="btn btn-nav"
                type="button"
                onClick={() => setCurrentIndex((i) => Math.min(questions.length - 1, i + 1))}
                disabled={currentIndex === questions.length - 1}
              >
                Next &rsaquo;
              </button>
            </div>
          </div>
        </div>
      </div>

      {submitModal.mode === 'confirm' && (
        <SubmitModal mode="confirm" submitting={submitting} onCancel={() => setSubmitModal({ mode: 'none' })} onConfirm={confirmSubmit} />
      )}
      {submitModal.mode === 'result' && (
        <SubmitModal mode="result" result={submitModal.result} onClose={() => setSubmitModal({ mode: 'none' })} />
      )}
      {submitModal.mode === 'already' && <SubmitModal mode="already" onClose={() => setSubmitModal({ mode: 'none' })} />}

      {timesUpVisible && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <h2 className="modal-title">Time's Up</h2>
            <p className="modal-body">
              The exam duration has ended. Your answers have been automatically submitted and the test is now locked.
            </p>
            <div className="modal-actions">
              <button className="btn btn-submit" type="button" onClick={() => setTimesUpVisible(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
