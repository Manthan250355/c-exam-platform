import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { checkHealth, checkMcqAnswer } from './api';
import { useCountdown, formatHMS } from './useCountdown';
import type { McqQuestion, QuestionStatus } from './types';

const STUDENT_NAME = 'Tania Kataria';
const STUDENT_ID = '2610992624';

// MCQs take far less time per question than a coding problem — 60s/question
// is standard exam pacing for a single-concept multiple-choice question.
const SECONDS_PER_QUESTION = 60;

interface CheckedAnswer {
  selectedIndex: number;
  correctIndex: number;
  correct: boolean;
}

export default function McqExam({ questions }: { questions: McqQuestion[] }) {
  const examDurationSeconds = questions.length * SECONDS_PER_QUESTION;

  const [testStarted, setTestStarted] = useState(false);
  const [testLocked, setTestLocked] = useState(false);
  const [timesUpVisible, setTimesUpVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Clicking an option immediately checks it against the backend and reveals
  // correct/incorrect right there — no separate submit step. Re-clicking a
  // different option re-checks and updates the reveal (this is a practice
  // tool, not a locked graded attempt).
  const [checkedByQuestion, setCheckedByQuestion] = useState<Record<number, CheckedAnswer>>({});
  const [checkingId, setCheckingId] = useState<number | null>(null);
  const [statusByQuestionId, setStatusByQuestionId] = useState<Record<number, QuestionStatus>>(() => {
    const initial: Record<number, QuestionStatus> = {};
    questions.forEach((q) => { initial[q.id] = 'unattempted'; });
    return initial;
  });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenExitCount, setFullscreenExitCount] = useState(0);
  const [fullscreenWarning, setFullscreenWarning] = useState(false);
  const [connectionOk, setConnectionOk] = useState(true);

  const hasStartedFullscreenTracking = useRef(false);

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

  // Live scoring for normal practice mode: how many answered so far are
  // actually correct, out of how many have been checked at all.
  const { scoreCorrect, scoreChecked } = useMemo(() => {
    const values = Object.values(statusByQuestionId);
    return {
      scoreCorrect: values.filter((s) => s === 'correct').length,
      scoreChecked: values.filter((s) => s === 'correct' || s === 'wrong').length,
    };
  }, [statusByQuestionId]);

  const handleExpire = () => {
    setTestLocked(true);
    setTimesUpVisible(true);
  };

  const secondsLeft = useCountdown(examDurationSeconds, handleExpire, testStarted);
  const warningLevel = secondsLeft <= 300 ? 'critical' : secondsLeft <= 600 ? 'warning' : 'normal';

  async function handleStart() {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      /* browser/OS may block it — exam still proceeds */
    }
    hasStartedFullscreenTracking.current = true;
    setTestStarted(true);
  }

  function handleSelectQuestion(idx: number) {
    setCurrentIndex(idx);
  }

  async function selectOption(optionIndex: number) {
    if (!currentQuestion || testLocked || checkingId === currentQuestion.id) return;
    setCheckingId(currentQuestion.id);
    try {
      const result = await checkMcqAnswer(currentQuestion.id, optionIndex);
      setCheckedByQuestion((prev) => ({
        ...prev,
        [currentQuestion.id]: { selectedIndex: result.selectedIndex, correctIndex: result.correctIndex, correct: result.correct },
      }));
      setStatusByQuestionId((prev) => ({ ...prev, [currentQuestion.id]: result.correct ? 'correct' : 'wrong' }));
    } catch {
      /* backend unreachable — leave unanswered rather than show a wrong reveal */
    } finally {
      setCheckingId(null);
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
          <h1>{questions[0].section} — Multiple Choice Test</h1>
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
            Click an option to see immediately whether it's correct ({SECONDS_PER_QUESTION}s allotted per question).
          </p>
          <button className="btn btn-submit start-btn" type="button" onClick={handleStart}>
            Enter Full Screen &amp; Start Test
          </button>
        </div>
      </div>
    );
  }

  const checked = checkedByQuestion[currentQuestion.id];
  const isChecking = checkingId === currentQuestion.id;

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
        onHome={handleHome}
        showFontSize={false}
        scoreCorrect={scoreCorrect}
        scoreTotal={scoreChecked}
      />

      {fullscreenWarning && (
        <div className="fullscreen-warning-banner">
          Warning: You exited full-screen mode. ({fullscreenExitCount} time{fullscreenExitCount === 1 ? '' : 's'})
        </div>
      )}

      <div className="exam-body">
        <Sidebar
          questions={questions}
          currentIndex={currentIndex}
          statusByQuestionId={statusByQuestionId}
          onSelect={handleSelectQuestion}
          locked={testLocked}
        />

        <div className="exam-main mcq-main">
          <div className="mcq-panel">
            <div className="question-tag">{currentQuestion.topic}</div>
            <h1 className="mcq-question-text">
              {currentIndex + 1}. {currentQuestion.question}
            </h1>

            <div className="mcq-options">
              {currentQuestion.options.map((opt, idx) => {
                let cls = 'mcq-option';
                if (checked) {
                  if (idx === checked.correctIndex) cls += ' mcq-option-correct';
                  else if (idx === checked.selectedIndex) cls += ' mcq-option-incorrect';
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    className={cls}
                    onClick={() => selectOption(idx)}
                    disabled={testLocked || isChecking}
                  >
                    <span className="mcq-option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="mcq-option-text">{opt}</span>
                  </button>
                );
              })}
            </div>

            {isChecking && <p className="console-placeholder">Checking…</p>}

            {checked && (
              <div className={`mcq-result-banner ${checked.correct ? 'mcq-result-correct' : 'mcq-result-wrong'}`}>
                {checked.correct
                  ? 'Correct!'
                  : `Incorrect — the correct answer is ${String.fromCharCode(65 + checked.correctIndex)}.`}
              </div>
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

      {timesUpVisible && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <h2 className="modal-title">Time's Up</h2>
            <p className="modal-body">The exam duration has ended and the test is now locked.</p>
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
