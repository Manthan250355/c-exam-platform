import type { ConsoleTab, RunCodeResponse, RunSamplesResponse, SampleTestResult } from '../types';
import { CheckIcon, CrossIcon } from './Icons';

interface ConsolePanelProps {
  activeTab: ConsoleTab;
  onTabChange: (tab: ConsoleTab) => void;
  runResult: RunCodeResponse | null;
  isRunningCode: boolean;
  sampleResponse: RunSamplesResponse | null;
  isRunningSamples: boolean;
  onRunSamples: () => void;
  totalSampleTests: number;
}

function statusLabel(r: SampleTestResult): string {
  switch (r.status) {
    case 'TLE':
      return 'Time Limit Exceeded';
    case 'OUTPUT_LIMIT_EXCEEDED':
      return 'Output Limit Exceeded';
    case 'RUNTIME_ERROR':
      return `Runtime Error (exit code ${r.exitCode})`;
    case 'PASSED':
      return 'Passed';
    default:
      return 'Failed';
  }
}

function TestCasesTab({
  sampleResponse,
  isRunningSamples,
  onRunSamples,
}: {
  sampleResponse: RunSamplesResponse | null;
  isRunningSamples: boolean;
  onRunSamples: () => void;
}) {
  if (isRunningSamples) {
    return <div className="console-placeholder">Compiling and running against sample test cases…</div>;
  }
  if (!sampleResponse) {
    return (
      <div className="console-placeholder">
        <p>No results yet.</p>
        <button className="btn btn-outline" type="button" onClick={onRunSamples}>
          Run Sample Test Cases
        </button>
      </div>
    );
  }
  if (!sampleResponse.compile.success) {
    return (
      <div className="console-placeholder">
        <p className="tc-compile-fail">Compilation failed — fix the errors in the Console tab before test cases can run.</p>
      </div>
    );
  }

  const { results, summary } = sampleResponse;

  return (
    <div className="testcases-tab">
      <div className="tc-list">
        {results.map((r) => (
          <div key={r.index} className={`tc-row ${r.passed ? 'tc-row-pass' : 'tc-row-fail'}`}>
            <span className="tc-row-icon">{r.passed ? <CheckIcon size={13} /> : <CrossIcon size={13} />}</span>
            <span className="tc-row-label">Test Case {r.index}</span>
            <span className="tc-row-status">{statusLabel(r)}</span>
          </div>
        ))}
      </div>
      <div className="tc-summary">
        <div className="tc-summary-main">
          {summary.passed} / {summary.total} Test Cases Passed
        </div>
        <div className="tc-summary-split">
          <span className="tc-passed">Passed: {summary.passed}</span>
          <span className="tc-failed">Failed: {summary.total - summary.passed}</span>
        </div>
      </div>
    </div>
  );
}

function ConsoleTabContent({ runResult, isRunningCode }: { runResult: RunCodeResponse | null; isRunningCode: boolean }) {
  if (isRunningCode) {
    return <div className="console-placeholder">Compiling…</div>;
  }
  if (!runResult) {
    return <div className="console-placeholder">Click "Run Code" to compile and execute your program.</div>;
  }

  const { compile, run } = runResult;

  if (compile.timedOut) {
    return (
      <div className="console-output console-output-error">
        <div className="console-state-label">Compilation Timed Out</div>
        <pre>{compile.output}</pre>
      </div>
    );
  }

  if (!compile.success) {
    return (
      <div className="console-output console-output-error">
        <div className="console-state-label">Compilation Error</div>
        <pre>{compile.output}</pre>
      </div>
    );
  }

  if (!run) {
    return <div className="console-placeholder">No output.</div>;
  }

  if (run.timedOut) {
    return (
      <div className="console-output console-output-error">
        <div className="console-state-label">Time Limit Exceeded</div>
        <p>The program did not finish within the allotted time and was terminated.</p>
        {run.stdout && (
          <>
            <div className="console-sub-label">Partial stdout</div>
            <pre>{run.stdout}</pre>
          </>
        )}
      </div>
    );
  }

  if (run.outputExceeded) {
    return (
      <div className="console-output console-output-error">
        <div className="console-state-label">Output Limit Exceeded</div>
        <p>The program produced more output than the allowed limit and was terminated.</p>
      </div>
    );
  }

  if (run.exitCode !== 0) {
    return (
      <div className="console-output console-output-error">
        <div className="console-state-label">Runtime Error</div>
        <p>Process exited with code {run.exitCode ?? 'unknown'}{run.signal ? ` (signal ${run.signal})` : ''}.</p>
        {run.stdout && (
          <>
            <div className="console-sub-label">stdout</div>
            <pre>{run.stdout}</pre>
          </>
        )}
        {run.stderr && (
          <>
            <div className="console-sub-label">stderr</div>
            <pre>{run.stderr}</pre>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="console-output console-output-success">
      <div className="console-state-label">Compilation Successful</div>
      <p className="console-success-line">Compilation successful.</p>
      <p className="console-success-line">Program executed successfully.</p>
      <p className="console-success-line">Process exited with code 0.</p>
      {compile.output && (
        <>
          <div className="console-sub-label">Compiler warnings</div>
          <pre className="console-warnings">{compile.output}</pre>
        </>
      )}
      <div className="console-sub-label">stdout</div>
      <pre>{run.stdout || '(no output)'}</pre>
      {run.stderr && (
        <>
          <div className="console-sub-label">stderr</div>
          <pre>{run.stderr}</pre>
        </>
      )}
    </div>
  );
}

function RunSamplesTab({
  sampleResponse,
  isRunningSamples,
  onRunSamples,
  totalSampleTests,
}: {
  sampleResponse: RunSamplesResponse | null;
  isRunningSamples: boolean;
  onRunSamples: () => void;
  totalSampleTests: number;
}) {
  return (
    <div className="run-samples-tab">
      <div className="run-samples-header">
        <button className="btn btn-outline" type="button" onClick={onRunSamples} disabled={isRunningSamples}>
          {isRunningSamples ? 'Running…' : `Run Sample Test Cases (${totalSampleTests})`}
        </button>
        {sampleResponse?.compile.success && (
          <span className="run-samples-summary">
            {sampleResponse.summary.passed} / {sampleResponse.summary.total} Passed
          </span>
        )}
      </div>

      {isRunningSamples && <div className="console-placeholder">Compiling and executing your program against each sample input…</div>}

      {!isRunningSamples && sampleResponse && !sampleResponse.compile.success && (
        <div className="console-output console-output-error">
          <div className="console-state-label">Compilation Error</div>
          <pre>{sampleResponse.compile.output}</pre>
        </div>
      )}

      {!isRunningSamples && sampleResponse?.compile.success && (
        <div className="tc-detail-list">
          {sampleResponse.results.map((r) => (
            <div key={r.index} className={`tc-detail-card ${r.passed ? 'tc-detail-pass' : 'tc-detail-fail'}`}>
              <div className="tc-detail-title">
                TEST CASE {r.index}
                <span className={`tc-pill ${r.passed ? 'tc-pill-pass' : 'tc-pill-fail'}`}>
                  {r.passed ? <CheckIcon size={11} /> : <CrossIcon size={11} />}
                  {r.passed ? 'PASSED' : statusLabel(r).toUpperCase()}
                </span>
              </div>
              <div className="io-box-grid">
                <div className="io-box io-box-input">
                  <div className="io-box-label">INPUT</div>
                  <pre>{r.input || '(empty)'}</pre>
                </div>
                <div className="io-box io-box-expected">
                  <div className="io-box-label">EXPECTED OUTPUT</div>
                  <pre>{r.expectedOutput}</pre>
                </div>
                <div className={`io-box ${r.passed ? 'io-box-actual-pass' : 'io-box-actual-fail'}`}>
                  <div className="io-box-label">YOUR OUTPUT</div>
                  <pre>{r.actualOutput || '(no output)'}</pre>
                </div>
              </div>
              {r.stderr && (
                <div className="tc-detail-stderr">
                  <div className="io-box-label">STDERR</div>
                  <pre>{r.stderr}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ConsolePanel(props: ConsolePanelProps) {
  const { activeTab, onTabChange } = props;

  return (
    <section className="console-panel">
      <div className="console-tabs">
        <button
          type="button"
          className={`console-tab ${activeTab === 'testcases' ? 'console-tab-active' : ''}`}
          onClick={() => onTabChange('testcases')}
        >
          Test Cases
        </button>
        <button
          type="button"
          className={`console-tab ${activeTab === 'console' ? 'console-tab-active' : ''}`}
          onClick={() => onTabChange('console')}
        >
          Console
        </button>
        <button
          type="button"
          className={`console-tab ${activeTab === 'runsamples' ? 'console-tab-active' : ''}`}
          onClick={() => onTabChange('runsamples')}
        >
          Run Sample Test Cases
        </button>
      </div>
      <div className="console-body">
        {activeTab === 'testcases' && (
          <TestCasesTab
            sampleResponse={props.sampleResponse}
            isRunningSamples={props.isRunningSamples}
            onRunSamples={props.onRunSamples}
          />
        )}
        {activeTab === 'console' && <ConsoleTabContent runResult={props.runResult} isRunningCode={props.isRunningCode} />}
        {activeTab === 'runsamples' && (
          <RunSamplesTab
            sampleResponse={props.sampleResponse}
            isRunningSamples={props.isRunningSamples}
            onRunSamples={props.onRunSamples}
            totalSampleTests={props.totalSampleTests}
          />
        )}
      </div>
    </section>
  );
}
