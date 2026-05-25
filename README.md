# francanete.com

Personal site built with [Astro](https://astro.build) — a static portfolio with
notes, work, and lab pages. Content is filesystem-based MDX.

## Stack

- Astro 5 (App Router, static output)
- React 19 (for islands, when needed)
- MDX for note content (`src/content/notes/`)
- Tailwind CSS v4
- Vercel adapter for deploy

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static output to dist/
npm run preview  # serve the built site locally
```

## Structure

```
src/
├── content/notes/     # MDX notes (filesystem content collection)
├── layouts/           # BaseLayout.astro (topbar + footer)
├── pages/             # Routes: /, /work, /notes, /notes/[slug], /lab
├── lib/               # Data (experiences, projects), types, utilities
└── styles/global.css  # Design system + page styles
```

## Adding a note

Drop an `.mdx` file in `src/content/notes/` with frontmatter:

```mdx
---
title: "Your note title."
description: "One-line summary."
status: drafting    # or "live"
order: 7            # optional, controls sort order
---

Content goes here. Markdown + JSX components allowed.
```

The note auto-appears on `/notes` and gets a route at `/notes/<slug>`.

## Deploy

Static site deployable to any host. Configured for Vercel via
`@astrojs/vercel`. Push to the main branch — Vercel detects Astro and builds.
