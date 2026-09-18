import type { AnswerKeyQuestion, AnyQuestion, RunCodeResponse, RunSamplesResponse, SubmitResponse } from './types';

// Default to whatever host the page itself was loaded from (so this works both at
// http://localhost:5173 on this machine and http://<lan-ip>:5173 from a phone on the
// same network) rather than hard-coding "localhost", which on a phone would mean the
// phone itself. Override with VITE_API_URL if the backend lives somewhere else.
const BASE_URL = (import.meta as any).env?.VITE_API_URL || `http://${window.location.hostname}:4000`;

async function asJson<T>(res: Response): Promise<T> {
  if (!res.ok) {
    let detail = '';
    try {
      const body = await res.json();
      detail = body?.message || body?.error || JSON.stringify(body);
    } catch {
      detail = res.statusText;
    }
    const err: any = new Error(detail || `Request failed (${res.status})`);
    err.status = res.status;
    try {
      err.body = await res.clone().json();
    } catch {
      /* ignore */
    }
    throw err;
  }
  return res.json();
}

export async function fetchQuestions(): Promise<AnyQuestion[]> {
  const res = await fetch(`${BASE_URL}/api/questions`);
  const data = await asJson<{ questions: AnyQuestion[] }>(res);
  return data.questions;
}

export async function checkHealth(): Promise<boolean> {
  try {
    const res = await fetch(`${BASE_URL}/api/health`, { cache: 'no-store' });
    return res.ok;
  } catch {
    return false;
  }
}

export async function runCode(code: string, stdin: string): Promise<RunCodeResponse> {
  const res = await fetch(`${BASE_URL}/api/run`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, stdin }),
  });
  return asJson<RunCodeResponse>(res);
}

export async function runSampleTests(questionId: number, code: string): Promise<RunSamplesResponse> {
  const res = await fetch(`${BASE_URL}/api/questions/${questionId}/run-samples`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code }),
  });
  return asJson<RunSamplesResponse>(res);
}

export async function submitQuestion(
  questionId: number,
  code: string,
  studentId: string
): Promise<SubmitResponse> {
  const res = await fetch(`${BASE_URL}/api/questions/${questionId}/submit`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, studentId }),
  });
  return asJson<SubmitResponse>(res);
}

export async function fetchAnswerKey(): Promise<AnswerKeyQuestion[]> {
  const res = await fetch(`${BASE_URL}/api/answer-key`);
  const data = await asJson<{ questions: AnswerKeyQuestion[] }>(res);
  return data.questions;
}

export interface McqCheckResponse {
  questionId: number;
  selectedIndex: number;
  correctIndex: number;
  correct: boolean;
}

export async function checkMcqAnswer(questionId: number, selectedIndex: number): Promise<McqCheckResponse> {
  const res = await fetch(`${BASE_URL}/api/mcq/${questionId}/check`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ selectedIndex }),
  });
  return asJson<McqCheckResponse>(res);
}
