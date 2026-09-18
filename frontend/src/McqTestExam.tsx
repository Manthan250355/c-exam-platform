import { useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { fetchAnswerKey } from './api';
import { useCountdown, formatHMS } from './useCountdown';
import type { AnswerKeyQuestion, QuestionStatus } from './types';

const STUDENT_NAME = 'Tania Kataria';
const STUDENT_ID = '2610992624';
const TEST_QUESTION_COUNT = 30;
const SECONDS_PER_QUESTION = 60;

type McqWithAnswer = AnswerKeyQuestion & { question: string; options: string[]; correctIndex: number; topic: string };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Phase = 'loading' | 'error' | 'start' | 'running' | 'results';

export default function McqTestExam({ sectionName, onExit }: { sectionName: string; onExit: () => void }) {
  const [phase, setPhase] = useState<Phase>('loading');
  const [error, setError] = useState('');
  const [testQuestions, setTestQuestions] = useState<McqWithAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedByQuestion, setSelectedByQuestion] = useState<Record<number, number>>({});
  const [statusByQuestionId, setStatusByQuestionId] = useState<Record<number, QuestionStatus>>({});

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenExitCount, setFullscreenExitCount] = useState(0);
  const [fullscreenWarning, setFullscreenWarning] = useState(false);
  const hasStartedFullscreenTracking = useRef(false);

  const examDurationSeconds = TEST_QUESTION_COUNT * SECONDS_PER_QUESTION;

  useEffect(() => {
    fetchAnswerKey()
      .then((all) => {
        const pool = all.filter((q) => q.section === sectionName) as McqWithAnswer[];
        const picked = shuffle(pool).slice(0, TEST_QUESTION_COUNT);
        setTestQuestions(picked);
        const initial: Record<number, QuestionStatus> = {};
        picked.forEach((q) => { initial[q.id] = 'unattempted'; });
        setStatusByQuestionId(initial);
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

  function finishTest() {
    setPhase('results');
  }

  const secondsLeft = useCountdown(examDurationSeconds, finishTest, phase === 'running');
  const warningLevel = secondsLeft <= 120 ? 'critical' : secondsLeft <= 300 ? 'warning' : 'normal';

  async function handleStart() {
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      /* browser/OS may block it — test still proceeds */
    }
    hasStartedFullscreenTracking.current = true;
    setPhase('running');
  }

  function selectOption(optionIndex: number) {
    const q = testQuestions[currentIndex];
    if (!q) return;
    setSelectedByQuestion((prev) => ({ ...prev, [q.id]: optionIndex }));
    setStatusByQuestionId((prev) => (prev[q.id] === 'unattempted' ? { ...prev, [q.id]: 'attempted' } : prev));
  }

  const score = useMemo(() => {
    let correct = 0;
    testQuestions.forEach((q) => {
      if (selectedByQuestion[q.id] === q.correctIndex) correct++;
    });
    return { correct, total: testQuestions.length };
  }, [testQuestions, selectedByQuestion]);

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
            This is a timed test, different from normal practice: your answers are <strong>not</strong> revealed as
            you go. You'll see your full score and a review of every question only after finishing all{' '}
            {testQuestions.length} or when time runs out.
          </p>
          <button className="btn btn-submit start-btn" type="button" onClick={handleStart}>
            Enter Full Screen &amp; Start Test
          </button>
        </div>
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
              {score.correct} / {score.total}
            </div>
            <div className="test-score-percent">{Math.round((score.correct / score.total) * 100)}% correct</div>
          </div>

          <h2 className="answer-key-section-title" style={{ marginTop: 32 }}>
            Review
          </h2>
          <div className="answer-key-mcq-list">
            {testQuestions.map((q, idx) => {
              const selected = selectedByQuestion[q.id];
              const isCorrect = selected === q.correctIndex;
              return (
                <div key={q.id} className="answer-key-mcq-item">
                  <div className="answer-key-mcq-question">
                    <span className="answer-key-q-num">{idx + 1}.</span> {q.question}
                    <span className="answer-key-topic-badge">{q.topic}</span>
                    <span className={`tc-pill ${isCorrect ? 'tc-pill-pass' : 'tc-pill-fail'}`} style={{ marginLeft: 10 }}>
                      {selected === undefined ? 'Unanswered' : isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                  <div className="answer-key-mcq-options">
                    {q.options.map((opt, i) => {
                      let cls = 'answer-key-option';
                      if (i === q.correctIndex) cls += ' answer-key-option-correct';
                      else if (i === selected) cls += ' answer-key-option-wrong-pick';
                      return (
                        <span key={i} className={cls}>
                          {String.fromCharCode(65 + i)}) {opt}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // running
  const currentQuestion = testQuestions[currentIndex];
  const selected = selectedByQuestion[currentQuestion.id];

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
        onHome={onExit}
        showFontSize={false}
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
          onSelect={setCurrentIndex}
          locked={false}
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
