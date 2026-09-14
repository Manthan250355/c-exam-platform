# C Programming Online Exam Platform

A functional (not mocked) C coding exam UI: React + TypeScript + Monaco Editor on the
frontend, a Node/Express backend that actually invokes `gcc` to compile and run student
code, real pass/fail against test cases, a real countdown timer, and a real submit/score
flow.

## Running it

Two processes, both required:

```bash
# Terminal 1 — backend (real gcc compilation/execution)
cd c-exam-platform/backend
npm install
node server.js
# listening on http://localhost:4000

# Terminal 2 — frontend
cd c-exam-platform/frontend
npm install
npm run dev
# open http://localhost:5173
```

The frontend calls the backend at `http://localhost:4000` by default (override with a
`VITE_API_URL` env var on the frontend if you move the backend elsewhere).

## Requirements

- A `gcc` toolchain on the backend machine. This was set up with **WinLibs MinGW-w64**
  (`winget install -e --id BrechtSanders.WinLibs.POSIX.UCRT`), which installs a real,
  unmodified GCC for Windows. `backend/config.js` auto-detects it; if it can't be found,
  set the `GCC_PATH` environment variable to the full path of `gcc.exe`.

## Architecture

```
Frontend (React + Monaco)
   ↓  fetch
Backend API (Express)
   ↓  spawn (argv array, no shell)
gcc.exe  →  main.exe
   ↓
stdout / stderr / exit code
   ↓
Frontend Console / Test Cases / Run Sample Test Cases tabs
```

Each run gets a fresh, uniquely-named temp directory under `backend/sandbox_tmp/`
(auto-deleted after the run), a real compile timeout, a real execution timeout (the
process is actually killed via `SIGKILL`/`taskkill /T /F`, not just abandoned), and a
real cap on how much stdout/stderr is read back. Binaries are statically linked
(`-static -static-libgcc`) so nothing outside the temp dir is touched at run time, and
`spawn` is always called with an argv array — never a shell string — so student
code/output can never be interpreted as a shell command.

### Known limitation: this is process-level isolation, not container isolation

Docker and WSL2 were not available on this machine, so the sandbox described above is
what was actually built and is what is running — it is **not** faked. What it does
**not** provide, and what would need Docker/WSL2 (or Windows Job Objects for a
Windows-native version) to add honestly:

- a hard **memory limit** per run
- **network isolation** for the compiled program
- OS-level filesystem-permission sandboxing beyond "runs in its own temp dir"

If this needs to run untrusted code from many students at once, or be deployed
publicly, swap `backend/sandbox.js`'s `spawn(GCC_PATH, ...)` / `spawn(exePath, ...)`
calls for `docker run --rm --network none --memory=128m --cpus=1 --pids-limit=64
gcc:<version> ...` — the rest of the backend (routes, question bank, scoring, output
comparison) doesn't need to change.

## Project layout

```
backend/
  config.js      gcc path resolution, timeouts, limits
  sandbox.js      compile/run primitives, output normalization
  questions.js    question bank (sample + hidden tests)
  server.js       Express routes: /api/questions, /api/run,
                  /api/questions/:id/run-samples, /api/questions/:id/submit

frontend/src/
  types.ts, api.ts, useCountdown.ts
  components/     Header, Sidebar, QuestionPanel, EditorPanel, ConsolePanel, SubmitModal
  App.tsx         exam state: per-question code, statuses, timer, fullscreen tracking
```

## What's real vs. what to know

- **Run Code / Run Sample Test Cases / Submit** all hit the backend and run actual gcc —
  nothing is hard-coded per question.
- **Compiler errors** are gcc's real stderr, lightly path-normalized for readability.
- **Output comparison** ignores trailing whitespace, CRLF/LF differences, and a trailing
  final newline, but not real content differences (`backend/sandbox.js#normalizeOutput`).
- **Submit** scores against 3 sample tests + 5 hidden tests per question (defined in
  `backend/questions.js`); hidden test inputs/expected outputs are never sent to the
  frontend, only pass/fail.
- **Duplicate submission** is rejected server-side (HTTP 409) even if a client tried to
  bypass the disabled button.
- The in-memory submission store (`server.js`) resets when the backend restarts — swap
  in a real database before using this for an actual exam with persistence requirements.
