# AGENTS.md

Repository instructions for coding agents working on this site.

## Project

- Personal site built with Astro 5
- Static output
- MDX notes are filesystem-based
- Tailwind CSS v4
- Deploys via Vercel adapter

## Required context

Before making changes, read these files when relevant to the task:

- `CONTRIBUTING.md`
- `docs/architecture.md`
- other files in `docs/` when they relate to the work

## Commands

Use these when validating changes:

```bash
npm install
npm run dev
npm run check
npm run build
npm run preview
```

## Structure

- `src/pages/` — routes
- `src/content/notes/` — MDX notes
- `src/layouts/` — shared layout
- `src/lib/` — data, types, utilities
- `src/styles/global.css` — global styles / design system
- `public/` — static assets
- `dist/` — generated output; do not edit manually

## Agent rules

- Make small, surgical changes.
- Match existing Astro, MDX, and Tailwind patterns.
- Do not refactor unrelated code.
- Do not edit generated files in `dist/`.
- Preserve existing note frontmatter and routing behavior.
- Prefer the smallest change that solves the request.

## Verification

- Use `npm run check` for type/build sanity.
- Use `npm run build` before finishing changes that affect routes, content, or rendering.
- If changing note content, verify the note appears correctly under `/notes` and `/notes/<slug>`.
