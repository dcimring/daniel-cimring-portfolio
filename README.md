# Daniel Cimring Portfolio

A single-page portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. The site presents Daniel Cimring's work across software engineering, finance, and Bitcoin infrastructure through a bold editorial visual system.

## Stack

- React 19 + TypeScript
- Vite 8 for local development and production builds
- Tailwind CSS v4 for styling and theme tokens
- Lucide React for iconography

## Local Development

Requires Node 22+ (see `.nvmrc`). Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The dev server runs with `--host`, which makes local device testing easier on the same network.

## Available Scripts

```bash
npm run dev           # start the Vite dev server
npm run build         # type-check and build for production
npm run preview       # preview the production build locally
npm run lint          # run ESLint across the project
npm run format        # format the repo with Prettier
npm run format:check  # check formatting without writing
```

Use `npm run lint && npm run format:check && npm run build` as the validation step before shipping changes. CI runs the same checks on every push and PR.

## Editing Content

All site content (project cards, experience, skills, journal articles, links) lives in `src/data/*.ts` — see **[CONTENT.md](CONTENT.md)** for the step-by-step runbook, including image regeneration and the OG card.

## Deployment

Hosted on Cloudflare Workers (static assets) as `daniel-cimring-portfolio`, live at **https://danielcimring.com**. Config is in `wrangler.jsonc`; path redirects are in `public/_redirects`.

- **Deploy:** `npm run deploy` runs lint, format check and build, then `wrangler deploy`. Pushing to `main` does not deploy. Run `npx wrangler login` once on a new machine.

## Project Structure

```text
src/
  App.tsx            ~30-line composition of sections
  main.tsx           React entry point (+ reduced-motion config)
  index.css          global styles, Tailwind theme tokens
  types.ts           shared content types
  data/              ALL site content (projects, experience, skills, ...)
  components/        PageShell, ProjectPage, PullQuote, CtaLink
  components/sections/  Nav, Hero, Experience, Projects, Stack, Writing, Footer
  lib/utils.ts       cn(), cardIndex()

public/          static assets served directly
og-src/          source photo + OG-card template (not shipped)
ARCHITECTURE.md  implementation notes and technical direction
CONTENT.md       content-editing and deploy runbook
DESIGN.md        visual system and design rules
AGENTS.md        contributor workflow and repository guidelines
```

## Design Direction

The visual system favors sharp edges, aggressive typography, tonal stacking, and a high-contrast accent palette. When making UI changes, preserve the direction documented in `DESIGN.md` instead of defaulting to generic SaaS styling.

## Notes

- There is currently no dedicated test runner configured; lint + typecheck + build are the gate.
- Production output is generated in `dist/` (gitignored).
- Keep changes aligned with the conventions documented in `AGENTS.md`.
