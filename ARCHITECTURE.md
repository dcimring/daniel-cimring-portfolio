# Architecture

Single-page portfolio: Vite 8 + React 19 + TypeScript (strict) + Tailwind CSS v4 + Framer Motion 12. No routing, no state management, no backend — one page composed of scroll sections. Deployed to Vercel (see README → Deployment).

## File tree

```text
index.html                     entry: fonts, SEO/OG/Twitter meta, JSON-LD Person schema
og-src/                        NOT shipped — source photo + OG-card template (see CONTENT.md)
public/                        static assets served at site root
  daniel-480.webp / -960.webp  responsive hero photo (WebP)
  daniel-960.jpg               hero photo fallback (non-WebP browsers)
  og.jpg                       1200x630 branded link-preview card
  favicon.svg                  yellow/black brand mark
  apple-touch-icon.png         180x180 PNG of the same mark
  robots.txt / sitemap.xml     SEO
src/
  main.tsx                     entry; wraps App in <MotionConfig reducedMotion="user">
  App.tsx                      ~30-line composition of sections — no logic
  index.css                    Tailwind v4 @theme tokens + global styles (see below)
  types.ts                     CardItem, Article, Skill, NavLink
  lib/utils.ts                 cn() class merger; cardIndex() "01"-style index derivation
  data/                        ALL site content lives here (see CONTENT.md)
    site.ts                    nav links, social URLs, email
    experience.ts              6 experience cards
    projects.ts                12 project cards
    skills.ts                  16 skill badges (name + lucide icon)
    articles.ts                4 journal articles
  components/
    ArchiveCard.tsx            card used by Experience + Projects grids
    SkillBadge.tsx             stack-grid badge
    ImpactBlock.tsx            full-width yellow pull-quote band
    motion.ts                  shared framer-motion variants (module scope)
    sections/
      Nav.tsx                  fixed nav + mobile menu (owns isMenuOpen state)
      Hero.tsx  Experience.tsx  Projects.tsx  Stack.tsx  Insights.tsx  Footer.tsx
```

## Layering

**data → components → sections → App.** Content changes never touch components; component changes never touch content. `App.tsx` only composes sections in order. The card index ("01", "02", …) is derived from array position via `cardIndex()` in `lib/utils.ts` — reordering an array renumbers the cards automatically.

Data lives in TypeScript (not JSON) so `skills.ts` can reference lucide icon components directly and everything is checked against the interfaces in `src/types.ts`.

## Motion system

All shared variants live in `src/components/motion.ts` at module scope (never recreated per render). Two contracts to respect:

1. **The `hidden` / `visible` key names are load-bearing.** Parent containers animate children by name: a parent `motion.div` with `initial="hidden" whileInView="visible"` and `staggerChildren` drives each child's variants of the same names. Renaming a key silently breaks the stagger.
2. **`viewport={{ once: false }}` is intentional** — animations replay on every scroll pass. This is a deliberate design choice (confirmed Aug 2026); do not "fix" it to `once: true`.

Reduced motion: `<MotionConfig reducedMotion="user">` in `main.tsx` disables transform animations for users with `prefers-reduced-motion` — no per-component handling needed.

## Styling

Tailwind CSS v4, zero config file. All theme tokens are defined in the `@theme` block of `src/index.css` (colors, Lexend/Inter fonts, all radii forced to 0px). One custom utility (`glass-morphism` for the nav) and one plain class (`.stroke` for hollow display text). Visual rules live in `DESIGN.md` ("Kinetic Monolith" system).

## Hero image

The hero photo renders twice — a mobile inset (`lg:hidden`) and a desktop portrait (`hidden lg:flex`) — because the two treatments have different aspect ratios, frame borders, and overlay sizes. Both use the same `<picture>` (480/960 WebP + JPEG fallback) so the browser downloads one file; the hidden copy costs nothing extra. Explicit `width`/`height` prevent layout shift; both are above the fold, so no `loading="lazy"`.

## Deliberate decisions

- **Single JS chunk** (~368KB, ~117KB gzip; dominated by react + framer-motion). Code-splitting a one-page site adds requests without improving first paint. Watch the build output for regressions instead.
- **ArchiveCard affordances**: arrow icon + pointer cursor appear only when a card has `href` (9 of 18 do). Non-linked cards keep the hover color-flip but read as non-clickable.
- **ImpactBlock renders a `<p>`**, not a heading — it's a pull-quote and would otherwise break heading order (h1 → h2).
- **Generated images are committed** (`public/*.webp`, `og.jpg`, etc.). Regeneration commands are in CONTENT.md; the untouched source photo lives in `og-src/daniel-source.jpg`.
