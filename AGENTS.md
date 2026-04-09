# Repository Guidelines

## Project Structure & Module Organization
This repository is a single-page portfolio built with Vite, React 19, TypeScript, Tailwind CSS v4, and Framer Motion. Application code lives in `src/`: `main.tsx` boots the app, `App.tsx` contains the main page sections, `index.css` defines theme tokens and global styles, and `lib/utils.ts` holds shared helpers such as `cn()`. Static files served as-is live in `public/`. Reference docs such as `ARCHITECTURE.md` and `DESIGN.md` sit at the repo root.

## Build, Test, and Development Commands
- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server with host binding for local device testing.
- `npm run build`: run TypeScript project checks and produce a production build in `dist/`.
- `npm run preview`: serve the built output locally.
- `npm run lint`: run ESLint across the repo.

Use `npm run lint && npm run build` before opening a PR.

## Coding Style & Naming Conventions
Follow the existing TypeScript and React patterns in `src/`. Use functional components, typed props, and utility-first styling with Tailwind classes. Keep component names in `PascalCase`, hooks and helpers in `camelCase`, and assets/files in descriptive lowercase names where practical. Existing source uses 2-space indentation in config files and semicolon-terminated TypeScript with double-quoted imports; match the surrounding file instead of reformatting unrelated code.

## Testing Guidelines
There is no dedicated test framework configured yet. Until one is added, treat `npm run lint` and `npm run build` as the required validation steps. When adding tests later, place them alongside the component or module they cover using names like `ComponentName.test.tsx`.

## Commit & Pull Request Guidelines
Recent history follows short conventional prefixes such as `feat:`, `style:`, and `docs:` with imperative summaries, for example `style: fix mobile overflow`. Keep commits focused and scoped to one change. Pull requests should include a concise description, any relevant issue link, and screenshots or screen recordings for UI changes, especially mobile and desktop states.

## Design Notes
Preserve the established visual direction in `DESIGN.md`: sharp edges, strong typography, dark surfaces, and high-contrast accent color. Avoid introducing rounded, pastel, or generic SaaS-style UI elements without explicit design approval.
