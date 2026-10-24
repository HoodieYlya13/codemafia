// Deploys the realtime server before the site builds, so both always match.
// On Vercel, production builds deploy the production Worker and preview builds
// deploy the staging one. Anywhere else (a local `npm run build`) it skips.
// Run with: node scripts/deploy-server.mjs
import { execFileSync } from "node:child_process";

const targets = {
  production: ["deploy"],
  preview: ["deploy", "--env", "staging"],
};

const env = process.env.VERCEL_ENV;
const args = targets[env];

if (!args) {
  console.log(`Not a Vercel production or preview build (VERCEL_ENV=${env ?? "unset"}): skipping the server deploy.`);
} else {
  console.log(`Deploying the ${env === "preview" ? "staging" : "production"} server...`);
  execFileSync("npx", ["wrangler", ...args], { stdio: "inherit" });
}
