<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# my-portfolio

Personal portfolio site. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS 4, content sourced from Contentful CMS.

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint (use this after making changes)

## Project structure

- `src/app/(site)/page.tsx` — single page, data pulled from Contentful
- `src/components/` — UI components
- `src/lib/contentful/` — Contentful client (`client.ts`), typed skeletons (`types.ts`), and per-content-type fetchers (`experience.ts`, `project.ts`, `skill.ts`, `profile.ts`)
- `src/lib/` — shared helpers (`format.ts`, `get-timeline-data.tsx`)
- `src/config/` — site configuration
- `src/types/` — shared types

## Content model

Content types (see `contentful-schema.md` for fields, `contentful-data.md` for seed data):

- `experience` — jobs/schools timeline (empty `endDate` means "Present")
- `project` — portfolio projects
- `skill` — skills grouped by `category`, `items` is a list
- `profile` — singleton with name, jobTitle, bio, resumeFile, profilePhoto

## Contentful access

- Environment variables: `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, optional `CONTENTFUL_ENVIRONMENT` (defaults to `master`). See `src/lib/contentful/client.ts`.
- Keep all Contentful types in `src/lib/contentful/types.ts` using `EntrySkeletonType`.
- Asset URLs must be normalized via `resolveAssetUrl` in `src/lib/contentful/client.ts` (they come back protocol-relative).
