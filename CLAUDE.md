# CLAUDE.md

Single-page portfolio: Vite + React 19 + TS strict + Tailwind v4. Deployed to Vercel (push to `main` auto-deploys to danielcimring.com).

- **Content edits** (projects, experience, skills, articles, links): edit `src/data/*.ts` only — see `CONTENT.md` for the runbook. Card numbering derives from array order.
- **Structure**: see `ARCHITECTURE.md`. Visual rules: `DESIGN.md` ("Builder's Log" — monospace terminal, 0px radii, near-black/mint, no redesigns without asking).
- **Motion**: none beyond the hero cursor blink and smooth anchor scrolling; the design is deliberately static.
- **Verify before finishing**: `npm run lint && npm run format:check && npm run build`.
