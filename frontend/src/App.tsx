import { useEffect, useMemo, useState } from 'react';
import Exam from './Exam';
import McqExam from './McqExam';
import AnswerKeyView from './AnswerKeyView';
import { fetchQuestions } from './api';
import { isMcqQuestion } from './types';
import type { AnyQuestion, McqQuestion, Question } from './types';
import './App.css';

type PickerChoice = string | 'answer-key' | null;

export default function App() {
  const [questions, setQuestions] = useState<AnyQuestion[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selected, setSelected] = useState<PickerChoice>(null);

  // Load the full question bank from the backend once. It may span multiple
  // independent sections (e.g. Sec-A, Sec-B, Calculus MCQ) — each is its own
  // self-contained exam with its own timer and attempt tracking, never mixed
  // together. A section's `type` (coding vs mcq) decides which exam UI it gets.
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

  function renderSection(s: { name: string; questions: AnyQuestion[]; isMcq: boolean }) {
    return s.isMcq ? (
      <McqExam key={s.name} questions={s.questions as McqQuestion[]} />
    ) : (
      <Exam key={s.name} questions={s.questions as Question[]} />
    );
  }

  if (selected === 'answer-key') {
    return <AnswerKeyView onBack={() => setSelected(null)} />;
  }

  const chosen = sections.find((s) => s.name === selected);
  if (chosen) {
    return renderSection(chosen);
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
          never affects the other.
        </p>
        <div className="section-picker-list">
          {sections.map((s) => (
            <button key={s.name} type="button" className="section-picker-item" onClick={() => setSelected(s.name)}>
              <span className="section-picker-name">
                {s.name}
                {s.isMcq && <span className="section-picker-badge">MCQ</span>}
              </span>
              <span className="section-picker-count">{s.questions.length} questions</span>
            </button>
          ))}
          <button
            type="button"
            className="section-picker-item section-picker-item-key"
            onClick={() => setSelected('answer-key')}
          >
            <span className="section-picker-name">Answer Key</span>
            <span className="section-picker-count">all sections</span>
          </button>
        </div>
      </div>
    </div>
  );
}
