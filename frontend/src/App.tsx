import { useEffect, useMemo, useState } from 'react';
import Exam from './Exam';
import { fetchQuestions } from './api';
import type { Question } from './types';
import './App.css';

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  // Load the full question bank from the backend once. It may span multiple
  // independent sections (e.g. Sec-A, Sec-B) — each is its own self-contained
  // exam with its own timer and attempt tracking, never mixed together.
  useEffect(() => {
    fetchQuestions()
      .then(setQuestions)
      .catch((e) => setLoadError(e.message || 'Failed to load questions from backend.'));
  }, []);

  const sections = useMemo(() => {
    const bySection = new Map<string, Question[]>();
    questions.forEach((q) => {
      if (!bySection.has(q.section)) bySection.set(q.section, []);
      bySection.get(q.section)!.push(q);
    });
    return Array.from(bySection.entries()).map(([name, qs]) => ({ name, questions: qs }));
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

  // Single-section banks skip the picker entirely — same behavior as before.
  if (sections.length === 1) {
    return <Exam questions={sections[0].questions} />;
  }

  const chosen = sections.find((s) => s.name === selectedSection);
  if (chosen) {
    return <Exam key={chosen.name} questions={chosen.questions} />;
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
            <button
              key={s.name}
              type="button"
              className="section-picker-item"
              onClick={() => setSelectedSection(s.name)}
            >
              <span className="section-picker-name">{s.name}</span>
              <span className="section-picker-count">{s.questions.length} questions</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
