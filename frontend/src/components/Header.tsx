import { formatHMS } from '../useCountdown';
import { ClockIcon, FullscreenIcon, HomeIcon, WarningIcon, WifiIcon } from './Icons';

type WarningLevel = 'normal' | 'warning' | 'critical';

interface HeaderProps {
  timeLeftSeconds: number;
  warningLevel: WarningLevel;
  studentName: string;
  studentId: string;
  section: string;
  currentQuestionNumber: number;
  totalQuestions: number;
  isFullscreen: boolean;
  fullscreenExitCount: number;
  connectionOk: boolean;
  attemptedCount: number;
  fontSize: number;
  onFontSizeChange: (n: number) => void;
  onHome: () => void;
}

export default function Header({
  timeLeftSeconds,
  warningLevel,
  studentName,
  studentId,
  section,
  currentQuestionNumber,
  totalQuestions,
  isFullscreen,
  fullscreenExitCount,
  connectionOk,
  attemptedCount,
  fontSize,
  onFontSizeChange,
  onHome,
}: HeaderProps) {
  return (
    <header className="exam-header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-mark">{'</>'}</span>
          <span className="logo-text">CodeExam</span>
        </div>
        <div className={`timer-pill timer-${warningLevel}`}>
          <ClockIcon size={15} />
          <span className="timer-label">Time Left</span>
          <span className="timer-value">{formatHMS(timeLeftSeconds)}</span>
        </div>
      </div>

      <div className="header-center">
        <div className="student-block">
          <div className="student-name">{studentName}</div>
          <div className="student-id">{studentId}</div>
        </div>
        <div className="status-chips">
          <span className={`status-chip ${isFullscreen ? 'chip-ok' : 'chip-warn'}`} title="Fullscreen status">
            <FullscreenIcon size={13} />
            {isFullscreen ? 'Fullscreen' : 'Exited FS'}
          </span>
          <span className={`status-chip ${fullscreenExitCount > 0 ? 'chip-warn' : 'chip-neutral'}`} title="Fullscreen exit warnings">
            <WarningIcon size={13} />
            {fullscreenExitCount}
          </span>
          <span className="status-chip chip-neutral" title="Section">
            {section}
          </span>
          <span className="status-chip chip-neutral" title="Question position">
            Q {currentQuestionNumber}/{totalQuestions}
          </span>
          <span className={`status-chip ${connectionOk ? 'chip-ok' : 'chip-bad'}`} title="Connection status">
            <WifiIcon size={13} />
            {connectionOk ? 'Online' : 'Offline'}
          </span>
        </div>
      </div>

      <div className="header-right">
        <div className="font-size-control">
          <span className="font-size-label">Font Size</span>
          <input
            type="range"
            min={10}
            max={24}
            step={1}
            value={fontSize}
            onChange={(e) => onFontSizeChange(Number(e.target.value))}
            aria-label="Editor font size"
          />
          <span className="font-size-value">{fontSize}px</span>
        </div>
        <button className="icon-btn" title="Home" onClick={onHome} type="button">
          <HomeIcon size={18} />
        </button>
        <div className="attempted-block">
          <span className="attempted-label">Attempted</span>
          <span className="attempted-value">
            {attemptedCount}/{totalQuestions}
          </span>
        </div>
      </div>
    </header>
  );
}
