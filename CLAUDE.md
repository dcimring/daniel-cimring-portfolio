# CLAUDE.md

Single-page portfolio: Vite + React 19 + TS strict + Tailwind v4 + Framer Motion. Deployed to Vercel (push to `main` auto-deploys to danielcimring.com).

- **Content edits** (projects, experience, skills, articles, links): edit `src/data/*.ts` only — see `CONTENT.md` for the runbook. Card numbering derives from array order.
- **Structure**: see `ARCHITECTURE.md`. Visual rules: `DESIGN.md` ("Kinetic Monolith" — 0px radii, black/yellow, no redesigns without asking).
- **Motion**: variants live in `src/components/motion.ts`; the `hidden`/`visible` key names drive parent→child staggers — don't rename. `viewport={{ once: false }}` (replaying scroll animations) is intentional.
- **Verify before finishing**: `npm run lint && npm run format:check && npm run build`.
