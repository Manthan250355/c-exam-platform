import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { checkHealth } from './api';
import { useCountdown, formatHMS } from './useCountdown';
import type { McqQuestion, QuestionStatus } from './types';

const STUDENT_NAME = 'Tania Kataria';
const STUDENT_ID = '2610992624';

// MCQs take far less time per question than a coding problem — 60s/question
// is standard exam pacing for a single-concept multiple-choice question.
const SECONDS_PER_QUESTION = 60;

export default function McqExam({ questions }: { questions: McqQuestion[] }) {
  const examDurationSeconds = questions.length * SECONDS_PER_QUESTION;

  const [testStarted, setTestStarted] = useState(false);
  const [testLocked, setTestLocked] = useState(false);
  const [timesUpVisible, setTimesUpVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Selecting an option just records the pick — no correctness check happens
  // here at all. The student compares against the separate Answer Key
  // section themselves, same as marking a printed exam paper.
  const [selectedByQuestion, setSelectedByQuestion] = useState<Record<number, number>>({});
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

  function selectOption(optionIndex: number) {
    if (!currentQuestion || testLocked) return;
    setSelectedByQuestion((prev) => ({ ...prev, [currentQuestion.id]: optionIndex }));
    setStatusByQuestionId((prev) => (prev[currentQuestion.id] === 'unattempted' ? { ...prev, [currentQuestion.id]: 'attempted' } : prev));
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
            Selecting an option records your answer — it does not tell you whether it's correct. Check your answers
            afterwards from the <strong>Answer Key</strong> on the question-set screen.
          </p>
          <button className="btn btn-submit start-btn" type="button" onClick={handleStart}>
            Enter Full Screen &amp; Start Test
          </button>
        </div>
      </div>
    );
  }

  const selected = selectedByQuestion[currentQuestion.id];

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
              {currentQuestion.options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`mcq-option ${selected === idx ? 'mcq-option-selected' : ''}`}
                  onClick={() => selectOption(idx)}
                  disabled={testLocked}
                >
                  <span className="mcq-option-letter">{String.fromCharCode(65 + idx)}</span>
                  <span className="mcq-option-text">{opt}</span>
                </button>
              ))}
            </div>
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
