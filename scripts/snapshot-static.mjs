// Snapshots every route of the built node-server (.output/server/index.mjs) to static HTML
// files under .output/public, so the site can be hosted on plain shared hosting (no persistent
// Node process). Run after `vite build --config vite.static.config.ts`.
//
// Why this exists instead of nitro's built-in build-time prerendering: nitro's
// prerender.routes/crawlLinks 404s on every route with this project's nitro/vite version combo
// (the crawler hits the server before routing is fully wired up during the build itself). The
// same server works fine once actually started, so we start it for real and fetch each route
// over HTTP instead.
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROUTES = [
  "/",
  "/about",
  "/careers",
  "/compliance",
  "/contact",
  "/cookies",
  "/privacy",
  "/terms",
  "/resources/case-studies",
  "/resources/help-center",
  "/solutions/back-office",
  "/solutions/background-check",
  "/solutions/call-center",
  "/solutions/hr-outsourcing",
  "/solutions/it-services",
  "/solutions/training",
  "/solutions/workspace-rental",
  "/use-cases/overview",
];

const PORT = 4173;
const PUBLIC_DIR = path.resolve(".output/public");

function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tick = async () => {
      try {
        const res = await fetch(url);
        if (res.ok || res.status === 404) return resolve();
      } catch {
        // server not up yet
      }
      if (Date.now() - start > timeoutMs) return reject(new Error("Timed out waiting for server"));
      setTimeout(tick, 200);
    };
    tick();
  });
}

async function main() {
  const server = spawn(process.execPath, [".output/server/index.mjs"], {
    env: { ...process.env, PORT: String(PORT), HOST: "127.0.0.1" },
    stdio: "inherit",
  });

  const base = `http://127.0.0.1:${PORT}`;

  try {
    await waitForServer(base + "/");

    for (const route of ROUTES) {
      const res = await fetch(base + route);
      if (!res.ok) {
        throw new Error(`Route ${route} returned HTTP ${res.status}`);
      }
      const html = await res.text();
      const outDir = route === "/" ? PUBLIC_DIR : path.join(PUBLIC_DIR, route);
      await mkdir(outDir, { recursive: true });
      await writeFile(path.join(outDir, "index.html"), html, "utf8");
      console.log(`snapshotted ${route}`);
    }

    // 404 page: whatever the app renders for an unknown path, saved for Hostinger's custom error page.
    const notFoundRes = await fetch(base + "/__not-found-check__");
    await writeFile(path.join(PUBLIC_DIR, "404.html"), await notFoundRes.text(), "utf8");
    console.log("snapshotted 404 page");
  } finally {
    server.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
