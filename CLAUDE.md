# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production version (also generates sitemap via postbuild hook)
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript compiler check
- `npm run lint` - Run ESLint on all JS/TS files
- `npm run test` - Run Jest tests
- `npm run prettier` - Format all files with Prettier

### Testing
- Single test: `npm test -- --testNamePattern="test name"`
- Test specific file: `npm test -- utils/hooks.test.ts`
- Test coverage: `npm test -- --coverage`

## Architecture Overview

### Project Structure
This is a Next.js 15 personal website/blog with the following key characteristics:

- **Framework**: Next.js 15 with React 19, TypeScript 5
- **Content Management**: MDX files in `/blog/` directory with frontmatter metadata
- **Dual Content Types**: Articles have `type: 'post'` or `type: 'project'` in frontmatter
- **Theming**: Uses `next-themes` for dark/light mode with system preference detection
- **Styling**: SCSS modules per component + global styles
- **External Data**: Apollo Client for GraphQL (fetches GitHub repository data for projects)

### Key Architectural Patterns

#### Content System
- All articles are MDX files stored in `/blog/` directory (NOT `/posts/`)
- `lib/apiArticles.ts` is the primary API for fetching articles:
  - `getAllArticles(type)` - Fetches and filters by 'post' or 'project'
  - `getArticlesFromSlug(slug)` - Fetches single article
  - `getSlugs(path)` - Gets all available slugs
- `lib/api.ts` is LEGACY and references non-existent `/posts/` directory - DO NOT USE
- MDX processing: `next-mdx-remote` for server-side rendering, `gray-matter` for frontmatter parsing
- Article frontmatter structure (see `lib/types.ts`):
  ```typescript
  {
    type: 'post' | 'project',
    title: string,
    excerpt: string,
    date: string,
    category: string[],
    featured: boolean,
    repositoryName?: string,  // For projects
    url?: string              // External link
  }
  ```

#### Theme Management
- Uses `next-themes` library (installed via npm)
- Setup in `pages/_app.tsx` wrapping entire app
- Legacy custom provider exists in `components/context/ThemeProvider.tsx` but is NOT currently used
- Theme persisted to localStorage, system preference as default

#### Component & Styling Architecture
- Each component in its own directory with `.tsx` + `.module.scss` files
- Path aliases: `@/components/*`, `@/lib/*`, `@/pages/*`, `@/types/*`, `@/utils/*`, `@/styles/*`
- Configured in both `tsconfig.json` and `jest.config.js` for consistency

#### Data Flow
1. **Content**: `/blog/*.mdx` → `lib/apiArticles.ts` → `getStaticProps` → Page components
2. **Theme**: localStorage ↔ `next-themes` ↔ CSS variables/data-theme attribute
3. **Newsletter**: `components/NewsletterForm.tsx` → `POST /api/subscribe` → ConvertKit API
4. **GitHub Data**: Apollo Client → GitHub GraphQL API → Project pages (for repository info)

### Important Implementation Details

#### Testing Setup
- Jest with jsdom environment
- Tests located in `utils/` directory with `.test.ts` extension
- CSS modules mocked with `identity-obj-proxy`
- Babel transforms configured in `.babelrc` for Next.js, React, and TypeScript
- Path aliases mapped in `jest.config.js` moduleNameMapper

#### Analytics
- Google Analytics via gtag (env: `NEXT_PUBLIC_GOOGLE_ANALYTICS`)
- Plausible analytics for privacy-focused tracking
- Both loaded in `pages/_app.tsx`

#### Build Process
- `npm run build` triggers Next.js build
- `postbuild` script automatically runs `next-sitemap` to generate:
  - `/public/sitemap.xml`
  - `/public/sitemap-0.xml`
- Sitemap config in `next-sitemap.config.js`

#### API Routes
- `/api/subscribe.ts` - Newsletter subscription to ConvertKit (requires `CONVERTKIT_API_KEY` env var)
- `/api/hello.ts` - Example API route

## Commit Message Preferences
- Do not include Claude attribution or co-author information in commit messages
- Keep commit messages concise and professional