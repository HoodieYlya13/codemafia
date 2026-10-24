<h1 align="center">🕵️‍♂️ Vibe Coder: The Reverse-Engineered Revival</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.4-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.3-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?logo=tailwind-css" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/Multiplayer-PartyServer-FF7B00" alt="PartyServer" />
  <img src="https://img.shields.io/badge/Yjs-CRDTs-FFD700" alt="Yjs" />
  <img src="https://img.shields.io/badge/Python-Pyodide_(Wasm)-3776AB?logo=python" alt="Pyodide" />
  <img src="https://img.shields.io/badge/License-PolyForm_Noncommercial-blue" alt="License" />
  <img src="https://img.shields.io/badge/Source-Available-orange" alt="Source Available" />
</p>

**Vibe Coder** is a multiplayer social deduction game for developers (featuring up to 20 people per lobby)—think _Among Us_, but you are writing Python in VS Code. Developers must pass unit tests, while automatically assigned hidden "Impostors" subtly sabotage the code.

## 📖 The Story: Reverse Engineering the Wayback Machine

The original repository for Vibe Coder (originally Code Mafia) was unavailable, but the concept was too good to let fade away. **Huge shoutout to the original creators, Ahmad J. & Rayyan K., for the brilliant game design.** To bring this back to life, I tracked down the original minified production bundles (`.js` and `.css`) via the **Wayback Machine**. From those minified assets, I reverse-engineered the entire application:

1. **Data Extraction:** Decrypted and extracted the core Python code blocks, test cases, and sabotage mechanics from the minified logic.
2. **UI Reconstruction:** Translated the raw CSS variables and pixel-art classes into a modern, CSS-first Tailwind architecture.
3. **State & Networking:** Mapped the minified state machine and recreated it using a strictly-typed Zustand store and a custom PartyServer WebSocket server.

I then **completely rebuilt and optimized the architecture** from the ground up using bleeding-edge web technologies (and added humor).

## 🏗️ The Modern Stack

This project doesn't just recreate the game; it modernizes it to run on the latest web standards:

- **Next.js 16.4 & React 19.3:** Built with the new React Compiler enabled. Zero `useMemo` or `useCallback` boilerplate—just pure, optimized rendering.
- **Server-Authoritative WebSockets via PartyServer:** An edge WebSocket server (`party/server.ts`) on Cloudflare Durable Objects owns the game. It identifies each player by their connection (never by what a message claims), checks every action against the current phase, and sends each player their own filtered view, so roles and sabotage details never reach the wrong device. Lobbies hibernate between messages, persist to Durable Object storage, and survive refreshes, dropped connections and server restarts.
- **Yjs CRDTs:** Collaborative coding powered by Yjs and `y-monaco`. The server holds the authoritative document and hands every player (including late joiners and reconnects) the full state, while edits travel as base64 Yjs updates multiplexed into the same JSON game socket. Remote cursors are relayed on the side instead of being stored in the game state.
  > [!NOTE]
  > **Hybrid Sync Strategy:** The frontend uses Yjs for document delta synchronization (multiplexed via JSON) and Zustand + PartyServer for high-level game state and presence. Round timers run on the server clock, and test results are only accepted for code that matches the shared document.
- **In-Browser Python Execution:** Uses **Pyodide** (WebAssembly) to compile and run Python code and unit tests entirely in the client's browser. Zero latency, zero server-cost, and absolutely zero Remote Code Execution (RCE) vulnerabilities.
- **Styling:** Upgraded to the new CSS-first **Tailwind v4** engine, retaining the retro pixel-art aesthetic while vastly improving build performance.
- **UI & State:** Framer Motion for fluid transitions, Monaco Editor for the IDE experience, and Zustand for predictable, syncable client state.

## 🚀 Getting Started (Local Development)

Because this project runs both a Next.js frontend and a PartyServer WebSocket server simultaneously, a single command handles everything.

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file to `.env.local`:

```bash
cp .env.example .env.local
```

> [!TIP]
> For production deployment, update `NEXT_PUBLIC_PARTYKIT_HOST` in your Vercel/environment settings to point to your live `*.workers.dev` host.

### 3. Run the Development Server

Use the `dev` command to spin up both the Next.js app (port 3000) and the game server (`wrangler dev`, port 1999) concurrently.

```bash
npm run dev
```

Run `npm test` for the game rules tests.

Open [http://localhost:3000](http://localhost:3000) in your browser. Open a few incognito tabs or invite friends on your local network to test the multiplayer lobby!

## 🚢 Deployment & CI/CD

Vibe Coder uses a streamlined, single-repository deployment architecture. The backend is pushed to **Cloudflare Workers** (hosted PartyKit shut down in October 2026), and the frontend is hosted on **Vercel**.

### 1. Vercel Configuration

To allow Vercel to automatically deploy your backend during its build process, Wrangler needs a Cloudflare API token:

- **Create a token** in the Cloudflare dashboard (My Profile → API Tokens) from the "Edit Cloudflare Workers" template.
- **Add to Vercel**: Save it in your Vercel Project Environment Variables as `CLOUDFLARE_API_TOKEN`, with your account ID as `CLOUDFLARE_ACCOUNT_ID`.
- **Backend URL**: Add your production backend host as `NEXT_PUBLIC_PARTYKIT_HOST` (e.g., `vibecoder.username.workers.dev`).
  > [!IMPORTANT]
  > Do not include `https://` in the variable value. Just the raw domain.

### 2. The Custom NPM Scripts

The `package.json` is optimized to protect production data while enabling smooth sandbox testing:

- `npm run build`: **(Vercel Default)** Automatically deploys the production game server first, then builds the Next.js frontend.
- `npm run party:deploy`: Manually deploys your WebSocket server to production (log in first with `npx wrangler login`).
- `npm run party:staging`: Manually deploys your WebSocket server to a dedicated staging URL for testing.
- `npm run build:dev`: A defensive script for local testing. Builds the Next.js frontend and pushes the backend to staging instead of production.

## 🛠️ Project Structure

- **`/app`**: Next.js 16 App Router UI and page logic.
- **`/components`**: Reusable React 19 components, including the Monaco editor integration.
- **`/party`**: The game rules as pure, unit-tested functions (`game.ts`, tested in `game.test.ts`), the PartyServer WebSocket server (`server.ts`, configured in `wrangler.jsonc`) that applies them and syncs the shared editor, and the client socket (`client.ts`).
- **`/store`**: Zustand global state management, synced in real-time.
- **`/lib/gameData.ts`**: The reverse-engineered Python levels, tests, and sabotage tasks.


---

## 📜 License

This project is **Source Available** under the [PolyForm Noncommercial License 1.0.0](LICENSE).

- **Non-Commercial Use:** You are free to use, modify, and distribute this software for personal, educational, or non-profit purposes.
- **Commercial Use:** Commercial use of this software is strictly prohibited without explicit permission from the author.
- **Ownership:** All rights not explicitly granted remain with the author.

---

<p align="center">
  Built with 💻 and ☕.<br/>
  <strong>Original concept by Ahmad J. & Rayyan K.</strong>
</p>

<p align="center">
  <a href="https://www.youtube.com/watch?v=sFrKx15_XEM">
    <img src="https://img.youtube.com/vi/sFrKx15_XEM/0.jpg" alt="Watch the original concept video" width="400" />
  </a>
</p>
