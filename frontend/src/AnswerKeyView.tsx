import { useEffect, useMemo, useState } from 'react';
import { fetchAnswerKey } from './api';
import { isMcqQuestion } from './types';
import type { AnswerKeyQuestion } from './types';

export default function AnswerKeyView({ onBack }: { onBack: () => void }) {
  const [questions, setQuestions] = useState<AnswerKeyQuestion[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  useEffect(() => {
    fetchAnswerKey()
      .then(setQuestions)
      .catch((e) => setError(e.message || 'Failed to load the answer key.'));
  }, []);

  const sections = useMemo(() => {
    if (!questions) return [];
    const bySection = new Map<string, AnswerKeyQuestion[]>();
    questions.forEach((q) => {
      if (!bySection.has(q.section)) bySection.set(q.section, []);
      bySection.get(q.section)!.push(q);
    });
    return Array.from(bySection.entries());
  }, [questions]);

  // Default to the first section once data loads.
  const currentSectionName = activeTab ?? sections[0]?.[0] ?? null;
  const currentSection = sections.find(([name]) => name === currentSectionName);

  return (
    <div className="answer-key-root">
      <header className="answer-key-header">
        <button className="btn btn-nav" type="button" onClick={onBack}>
          &lsaquo; Back
        </button>
        <h1>Answer Key</h1>
        <div className="answer-key-header-spacer" />
      </header>

      {sections.length > 0 && (
        <div className="answer-key-tabs">
          {sections.map(([name, qs]) => (
            <button
              key={name}
              type="button"
              className={`answer-key-tab ${name === currentSectionName ? 'answer-key-tab-active' : ''}`}
              onClick={() => setActiveTab(name)}
            >
              {name} <span className="answer-key-tab-count">{qs.length}</span>
            </button>
          ))}
        </div>
      )}

      <div className="answer-key-body">
        {error && <p className="fatal-error-hint">{error}</p>}
        {!questions && !error && <p className="console-placeholder">Loading answer key…</p>}

        {currentSection && (
          <section className="answer-key-section">
            {isMcqQuestion(currentSection[1][0]) ? (
              <div className="answer-key-mcq-list">
                {currentSection[1].map((q, idx) => {
                  const mcq = q as AnswerKeyQuestion & { question: string; options: string[]; correctIndex: number; topic: string };
                  return (
                    <div key={q.id} className="answer-key-mcq-item">
                      <div className="answer-key-mcq-question">
                        <span className="answer-key-q-num">{idx + 1}.</span> {mcq.question}
                        <span className="answer-key-topic-badge">{mcq.topic}</span>
                      </div>
                      <div className="answer-key-mcq-options">
                        {mcq.options.map((opt, i) => (
                          <span key={i} className={`answer-key-option ${i === mcq.correctIndex ? 'answer-key-option-correct' : ''}`}>
                            {String.fromCharCode(65 + i)}) {opt}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="answer-key-coding-list">
                {currentSection[1].map((q, idx) => {
                  const coding = q as AnswerKeyQuestion & { title: string; sampleTests: { input: string; expectedOutput: string }[] };
                  return (
                    <div key={q.id} className="answer-key-coding-item">
                      <div className="answer-key-coding-title">
                        {idx + 1}. {coding.title}
                      </div>
                      <div className="answer-key-io-list">
                        {coding.sampleTests.map((t, i) => (
                          <div key={i} className="answer-key-io-pair">
                            <div className="answer-key-io-block">
                              <span className="answer-key-io-label">Input</span>
                              <pre>{t.input || '(none)'}</pre>
                            </div>
                            <div className="answer-key-io-block">
                              <span className="answer-key-io-label">Expected Output</span>
                              <pre>{t.expectedOutput}</pre>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
}
