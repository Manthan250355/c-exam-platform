import { useEffect, useState } from 'react';
import Exam from './Exam';
import { fetchQuestions } from './api';
import type { Question } from './types';
import './App.css';

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);

  // Load question bank from the backend once. Exam only mounts once this is
  // non-empty, so its internal state (timer duration, per-question code map,
  // etc.) is always initialized from the real question count on first render.
  useEffect(() => {
    fetchQuestions()
      .then(setQuestions)
      .catch((e) => setLoadError(e.message || 'Failed to load questions from backend.'));
  }, []);

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

  return <Exam questions={questions} />;
}
