# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Static export to ./out (GitHub Pages)
npm run lint     # ESLint
```

No test runner is configured.

## Architecture

Single-page personal site (AI evaluation & systems engineer — evals, products, studio, client work), built with Next.js App Router and deployed as a static export to GitHub Pages.

**Stack:** Next.js 16 · React 19 · Tailwind CSS v4 · Framer Motion · lucide-react

**Key constraint:** `output: "export"` in `next.config.ts` means no server-side features — no API routes, no `getServerSideProps`, no image optimization. All pages must be statically renderable.

**Structure:**
- `src/app/page.tsx` — Single homepage that composes all sections in order
- `src/components/` — One component per section, in page order: `Nav`, `Hero`, `Evals`, `Ledger`, `Studio`, `Clients`, `Lab`, `Background`, `Contact`, `Footer`
- `src/data/contributions.ts` — Upstream PRs (UK AISI Inspect, vLLM, Supabase) with their GitHub state, plus HF download count. States are copied by hand: update `AS_OF` whenever one changes, and never show a state GitHub doesn't.
- `src/app/globals.css` — Tailwind v4 `@theme` tokens (`ink`, `surface`, `amber`, `aqua`…), `.display`/`.eyebrow` classes, shimmer/blink keyframes

**Server vs client components:** Only `Hero` and `Reveal` are `"use client"` (Framer Motion). Sections wrap content in `<Reveal>` for scroll-in animation and stay server components.

**Styling:** Tailwind utility classes inline with the theme tokens, dark theme. No CSS modules.

**Deployment:** Push to `main` triggers `.github/workflows/deploy.yml`, which runs `next build` and deploys `./out/` to GitHub Pages. Custom domain via `public/CNAME`.

**`tools/prospector/`** is an independent Python lead-generation script — separate from the Next.js app, has its own `.env`.
