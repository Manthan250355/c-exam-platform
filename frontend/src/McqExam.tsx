import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { checkHealth, submitMcqAnswer } from './api';
import { useCountdown, formatHMS } from './useCountdown';
import type { McqQuestion, McqSubmitResponse, QuestionStatus } from './types';

const STUDENT_NAME = 'Tania Kataria';
const STUDENT_ID = '2610992624';

// MCQs take far less time per question than a coding problem — 60s/question
// is standard exam pacing for a single-concept multiple-choice question.
const SECONDS_PER_QUESTION = 60;

type ModalState = { mode: 'none' } | { mode: 'confirm' } | { mode: 'already' };

export default function McqExam({ questions }: { questions: McqQuestion[] }) {
  const examDurationSeconds = questions.length * SECONDS_PER_QUESTION;

  const [testStarted, setTestStarted] = useState(false);
  const [testLocked, setTestLocked] = useState(false);
  const [timesUpVisible, setTimesUpVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedByQuestion, setSelectedByQuestion] = useState<Record<number, number>>({});
  const [resultByQuestion, setResultByQuestion] = useState<Record<number, McqSubmitResponse>>({});
  const [statusByQuestionId, setStatusByQuestionId] = useState<Record<number, QuestionStatus>>(() => {
    const initial: Record<number, QuestionStatus> = {};
    questions.forEach((q) => { initial[q.id] = 'unattempted'; });
    return initial;
  });

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenExitCount, setFullscreenExitCount] = useState(0);
  const [fullscreenWarning, setFullscreenWarning] = useState(false);
  const [connectionOk, setConnectionOk] = useState(true);
  const [modal, setModal] = useState<ModalState>({ mode: 'none' });
  const [submitting, setSubmitting] = useState(false);

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

  const handleExpire = () => {
    setTestLocked(true);
    setTimesUpVisible(true);
    // Best-effort auto-submit of anything already selected but not yet locked in.
    questions.forEach((q) => {
      if (!resultByQuestion[q.id] && selectedByQuestion[q.id] !== undefined) {
        submitMcqAnswer(q.id, selectedByQuestion[q.id], STUDENT_ID)
          .then((result) => setResultByQuestion((prev) => ({ ...prev, [q.id]: result })))
          .catch(() => {
            /* already submitted or unreachable */
          });
      }
    });
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

  function selectOption(optionIndex: number) {
    if (!currentQuestion || testLocked || resultByQuestion[currentQuestion.id]) return;
    setSelectedByQuestion((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
    setStatusByQuestionId((prev) => (prev[currentQuestion.id] === 'unattempted' ? { ...prev, [currentQuestion.id]: 'attempted' } : prev));
  }

  function openSubmitConfirm() {
    if (!currentQuestion || testLocked) return;
    if (resultByQuestion[currentQuestion.id]) {
      setModal({ mode: 'already' });
      return;
    }
    if (selectedByQuestion[currentQuestion.id] === undefined) return;
    setModal({ mode: 'confirm' });
  }

  async function confirmSubmit() {
    if (!currentQuestion) return;
    const selectedIndex = selectedByQuestion[currentQuestion.id];
    if (selectedIndex === undefined) return;
    setSubmitting(true);
    try {
      const result = await submitMcqAnswer(currentQuestion.id, selectedIndex, STUDENT_ID);
      setResultByQuestion((prev) => ({ ...prev, [currentQuestion.id]: result }));
      setStatusByQuestionId((prev) => ({ ...prev, [currentQuestion.id]: result.correct ? 'correct' : 'wrong' }));
      setModal({ mode: 'none' });
    } catch (e: any) {
      if (e.status === 409 && e.body?.previous) {
        setResultByQuestion((prev) => ({ ...prev, [currentQuestion.id]: e.body.previous }));
        setModal({ mode: 'already' });
      } else {
        alert(`Submission failed: ${e.message}`);
        setModal({ mode: 'none' });
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
            The timer starts the moment you click Start and cannot be paused ({SECONDS_PER_QUESTION}s allotted per
            question).
          </p>
          <button className="btn btn-submit start-btn" type="button" onClick={handleStart}>
            Enter Full Screen &amp; Start Test
          </button>
        </div>
      </div>
    );
  }

  const result = resultByQuestion[currentQuestion.id];
  const selected = selectedByQuestion[currentQuestion.id];
  const isLocked = !!result || testLocked;

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
                if (isLocked && result) {
                  if (idx === result.correctIndex) cls += ' mcq-option-correct';
                  else if (idx === result.selectedIndex) cls += ' mcq-option-incorrect';
                } else if (selected === idx) {
                  cls += ' mcq-option-selected';
                }
                return (
                  <button
                    key={idx}
                    type="button"
                    className={cls}
                    onClick={() => selectOption(idx)}
                    disabled={isLocked}
                  >
                    <span className="mcq-option-letter">{String.fromCharCode(65 + idx)}</span>
                    <span className="mcq-option-text">{opt}</span>
                  </button>
                );
              })}
            </div>

            {result && (
              <div className={`mcq-result-banner ${result.correct ? 'mcq-result-correct' : 'mcq-result-wrong'}`}>
                {result.correct
                  ? 'Correct!'
                  : `Incorrect — the correct answer was ${String.fromCharCode(65 + result.correctIndex)}.`}
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
                className="btn btn-submit"
                type="button"
                onClick={openSubmitConfirm}
                disabled={testLocked || !!result || selected === undefined}
              >
                {result ? 'Submitted ✓' : 'Submit Answer'}
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

      {modal.mode === 'confirm' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <h2 className="modal-title">Submit Answer?</h2>
            <p className="modal-body">Are you sure you want to submit this answer? You cannot change it afterwards.</p>
            <div className="modal-actions">
              <button className="btn btn-ghost" type="button" onClick={() => setModal({ mode: 'none' })} disabled={submitting}>
                Cancel
              </button>
              <button className="btn btn-submit" type="button" onClick={confirmSubmit} disabled={submitting}>
                {submitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      )}

      {modal.mode === 'already' && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <h2 className="modal-title">Already Submitted</h2>
            <p className="modal-body">This question has already been submitted and cannot be submitted again.</p>
            <div className="modal-actions">
              <button className="btn btn-submit" type="button" onClick={() => setModal({ mode: 'none' })}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {timesUpVisible && (
        <div className="modal-backdrop">
          <div className="modal-card">
            <h2 className="modal-title">Time's Up</h2>
            <p className="modal-body">
              The exam duration has ended. Your selected answers have been automatically submitted and the test is
              now locked.
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
