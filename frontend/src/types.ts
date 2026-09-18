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

// A quiz-format question: pick one of 4 options, no code editor or compiler
// involved. correctIndex is intentionally absent here — /api/questions never
// sends it, so there's no way to reveal the answer by inspecting network
// traffic while taking the exam. It's only available via the separate
// Answer Key feed (GET /api/answer-key), which the student opens deliberately.
export interface McqQuestion {
  id: number;
  section: string;
  type: 'mcq';
  topic: string;
  question: string;
  options: string[];
}

// What GET /api/questions actually returns: a mix of coding questions (no
// `type` field) and MCQ questions (`type: 'mcq'`). App.tsx groups these by
// `section` and picks Exam vs McqExam per section based on this discriminant.
export type AnyQuestion = Question | McqQuestion;

export function isMcqQuestion(q: AnyQuestion): q is McqQuestion {
  return (q as McqQuestion).type === 'mcq';
}

// What GET /api/answer-key returns: same shape as AnyQuestion, but MCQ
// entries additionally carry correctIndex.
export type AnswerKeyQuestion = AnyQuestion & { correctIndex?: number };

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
