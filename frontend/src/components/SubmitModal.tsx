import type { SubmitResponse } from '../types';

interface ConfirmModalProps {
  mode: 'confirm';
  onCancel: () => void;
  onConfirm: () => void;
  submitting: boolean;
}

interface ResultModalProps {
  mode: 'result';
  result: SubmitResponse;
  onClose: () => void;
}

interface AlreadyModalProps {
  mode: 'already';
  onClose: () => void;
}

type SubmitModalProps = ConfirmModalProps | ResultModalProps | AlreadyModalProps;

export default function SubmitModal(props: SubmitModalProps) {
  return (
    <div className="modal-backdrop">
      <div className="modal-card">
        {props.mode === 'confirm' && (
          <>
            <h2 className="modal-title">Submit Answer?</h2>
            <p className="modal-body">Are you sure you want to submit this question? You cannot change your code afterwards.</p>
            <div className="modal-actions">
              <button className="btn btn-ghost" type="button" onClick={props.onCancel} disabled={props.submitting}>
                Cancel
              </button>
              <button className="btn btn-submit" type="button" onClick={props.onConfirm} disabled={props.submitting}>
                {props.submitting ? 'Submitting…' : 'Submit'}
              </button>
            </div>
          </>
        )}

        {props.mode === 'already' && (
          <>
            <h2 className="modal-title">Already Submitted</h2>
            <p className="modal-body">This question has already been submitted and cannot be submitted again.</p>
            <div className="modal-actions">
              <button className="btn btn-submit" type="button" onClick={props.onClose}>
                Close
              </button>
            </div>
          </>
        )}

        {props.mode === 'result' && (
          <>
            <h2 className="modal-title">Submission Complete</h2>
            {!props.result.compile.success && (
              <p className="modal-body modal-body-warn">Your code did not compile, so all test cases were marked as failed.</p>
            )}
            <div className="modal-score">
              <div className="modal-score-row">
                <span>Passed</span>
                <strong>
                  {props.result.score.passed} / {props.result.score.total}
                </strong>
              </div>
              <div className="modal-score-row">
                <span>Score</span>
                <strong>{props.result.score.percentage}%</strong>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn btn-submit" type="button" onClick={props.onClose}>
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
