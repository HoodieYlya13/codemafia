<h1 align="center">🕵️‍♂️ Code Mafia: The Reverse-Engineered Revival</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2-blue?logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_v4-38B2AC?logo=tailwind-css" alt="Tailwind v4" />
  <img src="https://img.shields.io/badge/Multiplayer-PartyKit-FF7B00" alt="PartyKit" />
  <img src="https://img.shields.io/badge/Python-Pyodide_(Wasm)-3776AB?logo=python" alt="Pyodide" />
</p>

**Code Mafia** is a multiplayer social deduction game for developers (featuring up to 20 people per lobby)—think _Among Us_, but you are writing Python in VS Code. Developers must pass unit tests, while automatically assigned hidden "Impostors" subtly sabotage the code.

## 📖 The Story: Reverse Engineering the Wayback Machine

The original repository for Code Mafia was unavailable, but the concept was too good to let fade away. **Huge shoutout to the original creators, Ahmad J. & Rayyan K., for the brilliant game design.** To bring this back to life, I tracked down the original minified production bundles (`.js` and `.css`) via the **Wayback Machine**. From those minified assets, I reverse-engineered the entire application:

1. **Data Extraction:** Decrypted and extracted the core Python code blocks, test cases, and sabotage mechanics from the minified logic.
2. **UI Reconstruction:** Translated the raw CSS variables and pixel-art classes into a modern, CSS-first Tailwind architecture.
3. **State & Networking:** Mapped the minified state machine and recreated it using a strictly-typed Zustand store and a custom PartyKit WebSocket server.

I then **completely rebuilt and optimized the architecture** from the ground up using bleeding-edge web technologies.

## 🏗️ The Modern Stack

This project doesn't just recreate the game; it modernizes it to run on the latest web standards:

- **Next.js 16.2 & React 19:** Built with the new React Compiler enabled. Zero `useMemo` or `useCallback` boilerplate—just pure, optimized rendering.
- **WebSockets via PartyKit:** Replaced the legacy networking with an edge-ready, real-time WebSocket server (`party/server.ts`) to handle lobby sync, role assignment, and voting.
- **In-Browser Python Execution:** Uses **Pyodide** (WebAssembly) to compile and run Python code and unit tests entirely in the client's browser. Zero latency, zero server-cost, and absolutely zero Remote Code Execution (RCE) vulnerabilities.
- **Styling:** Upgraded to the new CSS-first **Tailwind v4** engine, retaining the retro pixel-art aesthetic while vastly improving build performance.
- **UI & State:** Framer Motion for fluid transitions, Monaco Editor for the IDE experience, and Zustand for predictable, syncable client state.

## 🚀 Getting Started

Because this project runs both a Next.js frontend and a PartyKit WebSocket server simultaneously, a custom dev script is provided.

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Copy the example environment file to `.env.local`:

```bash
cp .env.example .env.local
```

For production deployment, update `NEXT_PUBLIC_PARTYKIT_HOST` in your Vercel/environment settings to point to your live PartyKit URL.

### 3. Run the Development Server

Use the custom `dev:all` command. This uses `concurrently` to spin up both the Next.js app on port 3000 and the PartyKit server on port 1999.

```bash
npm run dev:all
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Open a few incognito tabs or invite friends on your local network to test the multiplayer lobby!

## 🚢 Deployment

Code Mafia consists of two parts: the Next.js frontend and the PartyKit WebSocket server.

### 1. Deploy the WebSocket Server

Deploy your PartyKit server to the global edge:

```bash
npx partykit deploy
```

Once deployed, copy the domain generated (e.g., `codemafia.username.partykit.dev`).

### 2. Deploy the Frontend

Deploy the Next.js app (e.g., via Vercel). In your environment settings, add:

- **Variable:** `NEXT_PUBLIC_PARTYKIT_HOST`
- **Value:** `codemafia.username.partykit.dev` (the domain from Step 1)

> [!IMPORTANT]
> Do not include `https://` in the variable value. Just the raw domain.


## 🛠️ Project Structure

- **`/app`**: Next.js 16 App Router UI.
- **`/components`**: React 19 components (Framer Motion, Monaco Editor).
- **`/party`**: The PartyKit WebSocket server logic (`server.ts`) and client manager (`client.ts`).
- **`/store`**: Zustand global state management, perfectly synced with PartyKit.
- **`/lib/gameData.ts`**: The reverse-engineered Python levels, tests, and sabotage tasks.

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
