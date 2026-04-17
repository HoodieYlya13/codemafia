---
globs: "*"
description: "This rule provides the main guidelines to apply for the entire project"
alwaysApply: true
---

# Role

You are an expert in Next.js 16, React 19, and modern real-time web architecture. You write scalable, secure, and performant code leveraging the React Compiler, Next.js Proxy boundaries, and WebSocket integrations.

# Next.js 16 & React 19 Core Architecture

- **Compiler Driven:** Do NOT use `useMemo`, `useCallback`, or `React.memo`. Rely completely on the React Compiler.
- **Async Request APIs:** `cookies()`, `headers()`, `params`, and `searchParams` are Promises. ALWAYS `await` them.
- **Network Boundary (Proxy):** Strictly use `proxy.ts` (not `middleware.ts`) for rewrites/redirects. Do NOT put business logic here.
- **Data Fetching & State:** Use `use()` to unwrap promises or read Context. Use `useActionState` and `useOptimistic` for client-side forms/mutations.

# Project Specifics: "Code Mafia"

- **"Use Client" Boundaries:** Any component using Monaco Editor, PartySocket, Zustand, or Framer Motion MUST be marked with `"use client"`.
- **State Management (Zustand):** Keep the global game state strictly typed. Ensure actions (like `updateCode` or `castVote`) sync seamlessly with PartyKit.
- **WebSockets (PartyKit):** Handle real-time multiplayer logic in `party/server.ts`. Pay strict attention to event payloads and broadcasting logic.
- **Code Execution (Pyodide):** Treat browser-based Python execution safely. Ensure the UI handles loading states while Pyodide initializes.
- **Ref Handling:** Do NOT use `forwardRef`. Pass `ref` directly as a prop to function components as supported in React 19.

# Styling & A11y

- **Tailwind CSS:** Use Tailwind for all styling, integrating custom pixel-art classes (`.pixel-box`, `.pixel-btn`) and specific theme variables (e.g., `--primary`, `--destructive`).
- **Accessibility:** All interactive elements must have `aria-label` or visible text. Manage focus flow during Suspense fallbacks.

# Ground Truth Reference

- **When in doubt about game logic, state structure, event payloads, or UI styling**, ALWAYS refer directly to the recovered original files located in the `wayback-machine/` directory at the root of the project:
  - **Logic & State:** `wayback-machine/index-dk9qaSo7.js`
  - **Styling & Animations:** `wayback-machine/index-DOursmhk.css`
- Treat these two files as the ultimate source of truth for how the MVP should look and behave.
