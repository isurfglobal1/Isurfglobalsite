// Static-hosting build config for Hostinger hPanel (plain shared hosting, no persistent
// Node process). Prerenders every route to static HTML/CSS/JS. Output lands in
// .output/public — upload that folder's *contents* to public_html.
//
// Deliberately does NOT redirect the server entry to src/server.ts like vite.config.ts does:
// that wrapper implements a Cloudflare Workers-style fetch(request, env, ctx) handler, which
// the static preset's node-based prerenderer can't invoke — every route 404s if it's used here.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Build-time prerendering (nitro's `prerender.routes`/`crawlLinks`) 404s on every route with
  // this nitro/vite combo — the crawler hits the server before it's fully wired up. So we build
  // a plain node-server bundle here and snapshot each route over HTTP ourselves afterward; see
  // scripts/build-static.mjs.
  nitro: {
    preset: "node-server",
  },
});
