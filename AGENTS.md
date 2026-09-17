# AGENTS.md

This document orients AI agents (and humans) working on the EV Compass codebase.

## Project Overview

EV Compass is a single-page marketing site for a futuristic EV route-planning and charging
aggregator concept, targeted at Indian EV drivers. It is currently a static front-end presenting
the product concept (hero, trip planner UI, features, how-it-works, map preview, route preview,
supported networks, mobile app teaser, coming-soon roadmap) — there is no backend or persistence
layer, and none of the form controls submit anywhere yet.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes + a handful of custom CSS effects) |
| Icons | lucide-react |
| Language | TypeScript |
| Deployment | Netlify |

## Directory Structure

```
├── public/                  Static assets (favicon, placeholder image)
├── src/
│   ├── routes/
│   │   ├── __root.tsx        Root HTML shell, page <head> metadata
│   │   └── index.tsx         The entire EV Compass landing page (all sections)
│   ├── router.tsx             TanStack Router setup
│   └── styles.css             Tailwind entry + theme tokens + custom animations/glass effects
├── vite.config.ts
└── netlify.toml
```

## Conventions

- The whole landing page lives in `src/routes/index.tsx` as one file, broken into small
  section components (`Hero`, `Features`, `HowItWorks`, `MapSection`, etc.) rather than being
  split into separate route files, since it is a single scrolling marketing page.
- Theme colors (dark background, neon-cyan accent) are defined as CSS variables in
  `src/styles.css` (`--bg`, `--neon`, ...) alongside reusable utility classes: `.glass`
  (glassmorphism panels), `.neon-border-glow`, `.btn-neon` / `.btn-ghost` (CTA buttons), and a
  few keyframe animations (`pulse-glow`, `float-y`, `grid-drift`, `route-dash`, `fade-up`).
- No forms, database, or API routes exist yet — the trip-planner inputs and CTA buttons are
  presentational only. If real trip planning, live charger data, or lead capture is added later,
  wire it through TanStack Start server functions / API routes and use Netlify DB (Postgres via
  Drizzle) or Netlify Blobs for persistence, per the project's Netlify skills.

## Running Locally

```bash
pnpm install
pnpm dev
```
