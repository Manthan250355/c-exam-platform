export interface SampleTest {
  input: string;
  expectedOutput: string;
}

export interface Question {
  id: number;
  section: string;
  title: string;
  description: string;
  inputFormat: string;
  outputFormat: string;
  constraints: string;
  starterCode: string;
  sampleTests: SampleTest[];
}

export interface CompileResult {
  success: boolean;
  output: string; // gcc stderr (warnings, or the full error block on failure)
  timedOut?: boolean;
}

export interface RunResult {
  stdout: string;
  stderr: string;
  exitCode: number | null;
  signal: string | null;
  timedOut: boolean;
  outputExceeded: boolean;
  spawnError: boolean;
}

export interface RunCodeResponse {
  compile: CompileResult;
  run: RunResult | null;
}

export interface SampleTestResult {
  index: number;
  input: string;
  expectedOutput: string;
  actualOutput: string;
  stderr: string;
  exitCode: number | null;
  timedOut: boolean;
  outputExceeded: boolean;
  passed: boolean;
  status: 'PASSED' | 'FAILED' | 'TLE' | 'OUTPUT_LIMIT_EXCEEDED' | 'RUNTIME_ERROR';
}

export interface RunSamplesResponse {
  compile: CompileResult;
  results: SampleTestResult[];
  summary: { passed: number; total: number };
}

export interface SubmitResultItem {
  label: string;
  kind: 'sample' | 'hidden';
  passed: boolean;
  input?: string;
  expectedOutput?: string;
  actualOutput?: string;
}

export interface SubmitResponse {
  questionId: number;
  studentId: string;
  code: string;
  compile: CompileResult;
  results: SubmitResultItem[];
  score: { passed: number; total: number; percentage: number };
  submittedAt: string;
}

export type QuestionStatus =
  | 'unattempted'
  | 'attempted'
  | 'running'
  | 'submitted'
  | 'correct'
  | 'partial'
  | 'wrong';

export type ConsoleTab = 'testcases' | 'console' | 'runsamples';
