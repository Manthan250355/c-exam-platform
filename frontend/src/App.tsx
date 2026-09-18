import { useEffect, useMemo, useState } from 'react';
import Exam from './Exam';
import McqExam from './McqExam';
import McqTestExam from './McqTestExam';
import CodingTestExam from './CodingTestExam';
import AnswerKeyView from './AnswerKeyView';
import { fetchQuestions } from './api';
import { isMcqQuestion } from './types';
import type { AnyQuestion, McqQuestion, Question } from './types';
import './App.css';

type View = { mode: 'picker' } | { mode: 'practice'; section: string } | { mode: 'test'; section: string } | { mode: 'answer-key' };

export default function App() {
  const [questions, setQuestions] = useState<AnyQuestion[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [view, setView] = useState<View>({ mode: 'picker' });

  // Load the full question bank from the backend once. It may span multiple
  // independent sections (e.g. Sec-A, Sec-B, Calculus MCQ, CAT-1 Partial
  // Derivatives) — each is its own self-contained exam with its own timer
  // and attempt tracking, never mixed together. A section's `type` (coding
  // vs mcq) decides which exam UI it gets.
  useEffect(() => {
    fetchQuestions()
      .then(setQuestions)
      .catch((e) => setLoadError(e.message || 'Failed to load questions from backend.'));
  }, []);

  const sections = useMemo(() => {
    const bySection = new Map<string, AnyQuestion[]>();
    questions.forEach((q) => {
      if (!bySection.has(q.section)) bySection.set(q.section, []);
      bySection.get(q.section)!.push(q);
    });
    return Array.from(bySection.entries()).map(([name, qs]) => ({
      name,
      questions: qs,
      isMcq: isMcqQuestion(qs[0]),
    }));
  }, [questions]);

  if (loadError) {
    return (
      <div className="fatal-error-screen">
        <h1>Could not load the exam</h1>
        <p>{loadError}</p>
        <p className="fatal-error-hint">Make sure the backend is reachable.</p>
      </div>
    );
  }

  if (!questions.length) {
    return <div className="loading-screen">Loading exam…</div>;
  }

  const backToPicker = () => setView({ mode: 'picker' });

  if (view.mode === 'answer-key') {
    return <AnswerKeyView onBack={backToPicker} />;
  }

  if (view.mode === 'practice' || view.mode === 'test') {
    const section = sections.find((s) => s.name === view.section);
    if (!section) return <div className="loading-screen">Loading exam…</div>;

    if (view.mode === 'test') {
      return section.isMcq ? (
        <McqTestExam key={section.name} sectionName={section.name} onExit={backToPicker} />
      ) : (
        <CodingTestExam key={section.name} sectionName={section.name} onExit={backToPicker} />
      );
    }

    return section.isMcq ? (
      <McqExam key={section.name} questions={section.questions as McqQuestion[]} />
    ) : (
      <Exam key={section.name} questions={section.questions as Question[]} />
    );
  }

  return (
    <div className="start-screen">
      <div className="start-card section-picker-card">
        <div className="logo start-logo">
          <span className="logo-mark">{'</>'}</span>
          <span className="logo-text">CodeExam</span>
        </div>
        <h1>Choose a Question Set</h1>
        <p className="start-note">
          Each set is a fully separate exam with its own timer and its own question numbering — progress in one
          never affects the other. <strong>Practice</strong> lets you work through every question with a live score
          as you go. <strong>Test</strong> picks 30 random questions and reveals your score only at the end.
        </p>
        <div className="section-picker-list">
          {sections.map((s) => (
            <div key={s.name} className="section-picker-item">
              <div className="section-picker-item-top">
                <span className="section-picker-name">
                  {s.name}
                  {s.isMcq && <span className="section-picker-badge">MCQ</span>}
                </span>
                <span className="section-picker-count">{s.questions.length} questions</span>
              </div>
              <div className="section-picker-actions">
                <button
                  type="button"
                  className="section-picker-action-btn"
                  onClick={() => setView({ mode: 'practice', section: s.name })}
                >
                  Practice
                </button>
                <button
                  type="button"
                  className="section-picker-action-btn section-picker-action-btn-test"
                  onClick={() => setView({ mode: 'test', section: s.name })}
                >
                  Test (30 Qs)
                </button>
              </div>
            </div>
          ))}
          <button type="button" className="section-picker-item section-picker-item-key" onClick={() => setView({ mode: 'answer-key' })}>
            <span className="section-picker-name">Answer Key</span>
            <span className="section-picker-count">all sections</span>
          </button>
        </div>
      </div>
    </div>
  );
}
