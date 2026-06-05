# Contributing

## Setup

```bash
npm install
```

## Local workflow

```bash
npm run dev
npm run check
npm run build
npm run preview
```

## Project structure

- `src/pages/` — routes
- `src/content/notes/` — MDX notes
- `src/layouts/` — shared layout
- `src/lib/` — data, types, utilities
- `src/styles/global.css` — global styles / design system
- `public/` — static assets
- `dist/` — generated output; do not edit manually

## Contribution guidelines

- Keep changes small and focused.
- Match existing Astro, MDX, and Tailwind patterns.
- Do not refactor unrelated code.
- Do not edit generated files in `dist/`.
- Verify changes with `npm run check` and `npm run build` before finishing.

## Adding notes

Add a new `.mdx` file in `src/content/notes/` with frontmatter like:

```mdx
---
title: "Your note title."
description: "One-line summary."
status: drafting
order: 7
---
```

Notes automatically appear in `/notes` and get a route at `/notes/<slug>`.
