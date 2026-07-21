# Style guide

## Goals

- Keep changes small, readable, and conventional.
- Match the existing Astro, MDX, and Tailwind patterns already in the repo.
- Prefer clarity over cleverness.
- Avoid new abstractions unless the same pattern is clearly repeated.

## Responsive design

- Treat responsiveness as a default requirement for all UI work.
- Build mobile-first where possible.
- Do not introduce layouts that only work well on desktop widths.
- When changing pages, components, or styles, verify they still work at small viewport sizes.
- Prefer existing responsive breakpoints and layout patterns already used in `src/styles/global.css`.

## Astro pages and layouts

- Keep page files in `src/pages/` focused on route-specific content and data loading.
- Use `src/layouts/BaseLayout.astro` for the shared page shell and metadata behavior.
- Follow existing frontmatter style in `.astro` files: imports first, then local data/setup, then markup.
- Reuse existing utility classes and page sections before creating new structural patterns.

## Styling

- Prefer existing classes, tokens, and spacing patterns from `src/styles/global.css`.
- Reuse the existing CSS variables in `:root` for colors and shared values.
- Keep visual changes consistent with the current design language: editorial, minimal, high-contrast, and content-first.
- Use Tailwind only where it fits the existing approach; do not mix in a conflicting styling pattern.
- Add new CSS only when an existing class or pattern does not already solve the problem.

## Colour themes

- Theme behaviour is configured in `src/config/theme.ts`.
- Use `switchable` to follow the visitor's system preference initially and show the persisted light/dark toggle.
- Use `light` or `dark` to force that theme, ignore visitor preference, and hide the toggle.
- Add theme-sensitive colours as semantic variables in `src/styles/global.css`; do not place mode-specific colour values in page or component styles.
- Keep both themes accessible and preserve the same visual hierarchy across modes.

## Content and notes

- Notes live in `src/content/notes/` as `.mdx` files.
- Preserve the existing frontmatter shape and route behavior.
- Keep note writing direct and structured, matching the tone of the existing notes.
- Prefer stable, descriptive titles and one-line descriptions.
- Do not turn notes into a different content model unless explicitly requested.

## Naming and organization

- Use descriptive names that match the current file and class naming style.
- Keep related logic close to where it is used.
- Prefer simple local code over extracting helpers too early.
- Place static assets in `public/` unless they are intentionally imported through source files.

## Editing rules

- Do not edit generated files in `dist/`.
- Do not refactor unrelated code while making a requested change.
- Remove imports or code made unused by your own changes, but do not do broad cleanup.
- Keep every changed line tied to the request.

## Verification

- Run `npm run check` for sanity after meaningful changes.
- Run `npm run build` for changes affecting routes, content, rendering, or styling.
- For UI changes, verify the result at mobile and desktop widths.
