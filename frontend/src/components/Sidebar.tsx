import type { AnyQuestion, QuestionStatus } from '../types';
import { isMcqQuestion } from '../types';
import { CheckIcon, CrossIcon } from './Icons';

interface SidebarProps {
  questions: AnyQuestion[];
  currentIndex: number;
  statusByQuestionId: Record<number, QuestionStatus>;
  onSelect: (index: number) => void;
  locked: boolean;
}

function badgeForStatus(status: QuestionStatus) {
  switch (status) {
    case 'correct':
    case 'submitted':
      return (
        <span className="q-badge q-badge-correct">
          <CheckIcon size={11} />
        </span>
      );
    case 'partial':
      return <span className="q-badge q-badge-partial">±</span>;
    case 'wrong':
      return (
        <span className="q-badge q-badge-wrong">
          <CrossIcon size={11} />
        </span>
      );
    case 'attempted':
    case 'running':
      return (
        <span className="q-badge q-badge-attempted">
          <CheckIcon size={11} />
        </span>
      );
    default:
      return null;
  }
}

export default function Sidebar({ questions, currentIndex, statusByQuestionId, onSelect, locked }: SidebarProps) {
  const section = questions[0]?.section ?? 'Sec-A';

  return (
    <aside className="sidebar">
      <div className="sidebar-section-title">{section}</div>
      <div className="q-nav-list">
        {questions.map((q, idx) => {
          const status = statusByQuestionId[q.id] ?? 'unattempted';
          const isActive = idx === currentIndex;
          return (
            <button
              key={q.id}
              type="button"
              className={`q-nav-item ${isActive ? 'q-nav-item-active' : ''} q-status-${status}`}
              onClick={() => !locked && onSelect(idx)}
              disabled={locked}
              title={isMcqQuestion(q) ? q.topic : q.title}
            >
              <span className="q-nav-number">{idx + 1}</span>
              {badgeForStatus(status)}
            </button>
          );
        })}
      </div>
      <div className="sidebar-legend">
        <div className="legend-row">
          <span className="q-badge q-badge-correct legend-badge"><CheckIcon size={10} /></span>
          Correct / Submitted
        </div>
        <div className="legend-row">
          <span className="q-badge q-badge-attempted legend-badge"><CheckIcon size={10} /></span>
          Attempted
        </div>
        <div className="legend-row">
          <span className="q-badge q-badge-wrong legend-badge"><CrossIcon size={10} /></span>
          Wrong
        </div>
      </div>
    </aside>
  );
}
