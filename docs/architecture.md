# Architecture

## Overview

This site is a static personal website built with Astro 5.

- Pages are file-based under `src/pages/`
- Notes are filesystem-based MDX content under `src/content/notes/`
- Shared layout lives in `src/layouts/`
- Shared data, types, and utilities live in `src/lib/`
- Global styling lives in `src/styles/global.css`
- Static assets live in `public/`
- Build output is written to `dist/`

## Rendering model

The site uses Astro's static output model. Content is compiled at build time and deployed as static files.

## Content flow

Notes are authored as `.mdx` files in `src/content/notes/`.

Typical flow:

1. Add or update MDX content
2. Astro reads the content collection
3. Routes are generated for the notes list and individual note pages
4. Build output is emitted to `dist/`

## Route structure

- `/` — homepage
- `/work` — work page
- `/notes` — notes index
- `/notes/<slug>` — individual note page
- `/lab` — lab page

## Layout and styling

- `src/layouts/` contains the shared page shell
- `src/styles/global.css` defines global styles and the design system
- Tailwind CSS v4 is used for utility styling where appropriate

## Assets

- `public/` holds static files like favicon and social image assets
- `dist/` is generated and should not be edited directly

## Verification

Use these commands when changing structure, routing, or content behavior:

```bash
npm run check
npm run build
```
