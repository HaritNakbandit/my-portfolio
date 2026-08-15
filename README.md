# my-portfolio

Personal portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. Content is sourced from Contentful CMS.

## Getting started

Prerequisites: Node.js 20.19+ (Next.js 16 requirement).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the dev server (Turbopack)     |
| `npm run build`    | Production build (fully static)      |
| `npm run start`    | Serve the production build           |
| `npm run lint`     | Run ESLint                           |

## Contentful setup

The site fetches its content from Contentful. Create a `.env.local` file:

```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_ENVIRONMENT=master   # optional, defaults to master
```

Content types (see `contentful-schema.md` for fields and `contentful-data.md` for seed values):

- `experience` — jobs/schools timeline; empty `endDate` means "Present"
- `project` — portfolio projects
- `skill` — skills grouped by `category`, `items` is a list
- `profile` — singleton with name, jobTitle, bio, resumeFile, profilePhoto

Remember to attach the `resumeFile` and `profilePhoto` assets to the `profile` entry — otherwise the site falls back to the files in `public/assets/`.

## Project structure

```
src/
├── app/(site)/page.tsx      # single page, data pulled from Contentful
├── components/              # UI components
├── config/                  # site configuration
├── lib/
│   ├── contentful/          # client, typed skeletons, per-type fetchers
│   └── ...
└── types/                   # shared types
```
