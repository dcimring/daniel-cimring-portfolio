# Daniel Cimring Portfolio

A single-page portfolio built with React, TypeScript, Vite, and Tailwind CSS v4. The site presents Daniel Cimring's work across software engineering, finance, and Bitcoin infrastructure through a bold editorial visual system.

## Stack

- React 19 + TypeScript
- Vite 8 for local development and production builds
- Tailwind CSS v4 for styling and theme tokens
- Framer Motion for motion and interaction
- Lucide React for iconography

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The dev server runs with `--host`, which makes local device testing easier on the same network.

## Available Scripts

```bash
npm run dev      # start the Vite dev server
npm run build    # type-check and build for production
npm run preview  # preview the production build locally
npm run lint     # run ESLint across the project
```

Use `npm run lint && npm run build` as the current validation step before shipping changes.

## Project Structure

```text
src/
  App.tsx        main page layout and sections
  main.tsx       React entry point
  index.css      global styles, Tailwind theme tokens, utilities
  lib/utils.ts   shared helpers such as cn()

public/          static assets served directly
ARCHITECTURE.md  implementation notes and technical direction
DESIGN.md        visual system and design rules
AGENTS.md        contributor workflow and repository guidelines
```

## Design Direction

The visual system favors sharp edges, aggressive typography, tonal stacking, and a high-contrast accent palette. When making UI changes, preserve the direction documented in `DESIGN.md` instead of defaulting to generic SaaS styling.

## Notes

- There is currently no dedicated test runner configured.
- Production output is generated in `dist/`.
- Keep changes aligned with the conventions documented in `AGENTS.md`.
