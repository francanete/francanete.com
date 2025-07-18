# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server at http://localhost:3000
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript compiler check
- `npm run lint` - Run ESLint on all JS/TS files
- `npm run test` - Run Jest tests
- `npm run prettier` - Format all files with Prettier

### Testing
- Single test: `npm test -- --testNamePattern="test name"`
- Test specific file: `npm test -- utils/hooks.test.ts`
- Test coverage: `npm test -- --coverage`

### Build Process
- `npm run build` generates production build and runs `next-sitemap` to create sitemap.xml
- Site maps are generated at `/public/sitemap.xml` and `/public/sitemap-0.xml`

## Architecture Overview

### Project Structure
This is a Next.js 13 personal website/blog with MDX content management:

- **Content Management**: Articles stored as MDX files in `/blog/` directory
- **Dual Content System**: Supports both "posts" and "projects" article types
- **Theme System**: Custom theme provider with dark/light mode using localStorage
- **Component Architecture**: Modular components with SCSS modules for styling
- **API Routes**: Newsletter subscription and basic API endpoints

### Key Architectural Patterns

#### Content System
- Articles are MDX files with frontmatter metadata
- `lib/apiArticles.ts` handles article fetching and filtering by type
- `lib/api.ts` provides legacy post handling (references non-existent `/posts/` directory)
- Content is processed with gray-matter for frontmatter parsing

#### Theme Management
- Custom theme provider in `components/context/ThemeProvider.tsx`
- Uses localStorage to persist theme preference
- Detects system preference as default
- SCSS modules handle theme-specific styling via `data-theme` attribute

#### Component Organization
- Each component has its own directory with `.tsx` and `.module.scss` files
- Path aliases configured for clean imports: `@/components/*`, `@/lib/*`, etc.
- Components are functional React components with TypeScript

#### Styling Architecture
- SCSS modules for component-specific styles
- Global styles in `styles/globals.css`
- Theme variables in `styles/variables.scss`
- Responsive design patterns throughout

### Data Flow
1. MDX articles in `/blog/` → `lib/apiArticles.ts` → Page components
2. Theme state: localStorage ↔ ThemeProvider ↔ Component styling
3. Newsletter: Form → `/api/subscribe.ts` → External service

## Important Notes

### Content Location
- Blog articles are in `/blog/` directory as MDX files
- The `/posts/` directory referenced in `lib/api.ts` doesn't exist - use `lib/apiArticles.ts` instead
- Articles have `type` field in frontmatter to differentiate posts from projects

### Path Resolution
- Uses absolute imports with `@/` prefix
- Jest configured with matching module name mapping
- TypeScript paths configured in `tsconfig.json`

### Testing Setup
- Jest with jsdom environment
- Tests located alongside source files with `.test.ts` extension
- CSS modules mocked with `identity-obj-proxy`
- Babel transforms JS/TS files

### Analytics Integration
- Google Analytics via gtag
- Plausible analytics for privacy-focused tracking
- Environment variables for configuration

## Commit Message Preferences
- Do not include Claude attribution or co-author information in commit messages
- Keep commit messages concise and professional