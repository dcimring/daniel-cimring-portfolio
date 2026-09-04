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
  lib/utils.ts                 cn() class merger; cardIndex() / sectionIndex() "01"-style index derivation
  data/                        ALL site content lives here (see CONTENT.md)
    site.ts                    nav links, social URLs, email, hero copy, impact quote, writing intro
    experience.ts              6 experience cards
    projects.ts                13 project cards (first is featured + light)
    skills.ts                  16 skill badges (name + lucide icon) — keep a multiple of 4
    articles.ts                4 journal articles
  components/
    ArchiveCard.tsx            card used by Experience + Projects grids (wipe hover, `featured` span)
    SectionHeading.tsx         numbered "01 / WORK" heading in four layout variants
    CtaLink.tsx                primary CTA with the Kinetic Gradient
    SkillBadge.tsx             stack-slab cell
    ImpactBlock.tsx            full-width yellow pull-quote band (word-by-word reveal)
    motion.ts                  shared framer-motion variants (module scope)
    sections/
      Nav.tsx                  fixed nav: progress line, active section, mobile menu state
      Hero.tsx  Experience.tsx  Projects.tsx  Stack.tsx  Writing.tsx  Footer.tsx
```

## Layering

**data → components → sections → App.** Content changes never touch components; component changes never touch content. `App.tsx` only composes sections in order. The card index ("01", "02", …) is derived from array position via `cardIndex()` in `lib/utils.ts` — reordering an array renumbers the cards automatically.

Data lives in TypeScript (not JSON) so `skills.ts` can reference lucide icon components directly and everything is checked against the interfaces in `src/types.ts`.

## Motion system

All shared variants live in `src/components/motion.ts` at module scope (never recreated per render). Two contracts to respect:

1. **The `hidden` / `visible` key names are load-bearing.** Parent containers animate children by name: a parent `motion.div` with `initial="hidden" whileInView="visible"` and `staggerChildren` drives each child's variants of the same names. Renaming a key silently breaks the stagger.
2. **`viewport={{ once: false }}` is intentional** — scroll animations replay on every pass. This is a deliberate design choice (confirmed Aug 2026); do not "fix" it to `once: true`.
3. **The hero is mount-animated** (`animate="visible"`, not `whileInView`) so it is never invisible in a background tab, a prerender or a screenshot bot. Its portrait is painted at full opacity under a curtain that slides off, so it still counts as the LCP element.
4. **Hovers are transform-only.** Cards, skill cells and article rows reveal a yellow (or white) layer with `scaleX`/`scaleY` via CSS `group-hover`; nothing animates `backgroundColor` through Framer. Every hover has a visible resting state, because Tailwind v4 gates `hover:` behind `@media (hover: hover)`.
5. **Parallax and variants never share an element.** In `Hero.tsx` the `useScroll`/`useTransform` MotionValues sit on outer wrappers and the entrance variants on inner ones.

Reduced motion: `<MotionConfig reducedMotion="user">` in `main.tsx` makes transform animations instant for users with `prefers-reduced-motion`. The two infinite loops are handled separately: the hero scroll cue checks `useReducedMotion()`, and the Stack marquee is a CSS animation with its own `prefers-reduced-motion` rule (the site's only non-Framer animation).

## Styling

Tailwind CSS v4, zero config file. All theme tokens are defined in the `@theme` block of `src/index.css` (colors, Lexend/Inter fonts, all radii forced to 0px). Custom utilities: `shell` (max width + the one shared `--gutter` scale every section uses), `mr-bleed` (negative margin to the true viewport edge from inside `shell`), `glass-morphism` (nav bar), `kinetic-gradient` (CTAs), `marquee-track` (Stack). Plain classes: `.stroke`, `.stroke-primary`, `.stroke-dim` for hollow display text — keep them on static wrappers, never on transforming elements (iOS Safari). Global rules: smooth `scroll-behavior`, `scroll-margin-top` on every `[id]` for the fixed nav, and a square yellow `:focus-visible` ring. Visual rules live in `DESIGN.md` ("Kinetic Monolith" system).

## Hero image

One `<picture>` (480/960 WebP + JPEG fallback), preloaded from `index.html`. On mobile it comes first, 85% wide and pushed right; on desktop it occupies grid columns 7–12 and bleeds to the viewport edge, with the hollow "CIMRING" line crossing its left edge and the yellow Focus tag hanging off its bottom-left corner. Explicit `width`/`height` prevent layout shift; it is above the fold, so no `loading="lazy"`, and it is never faded (see Motion).

## Deliberate decisions

- **Single JS chunk** (~382KB, ~122KB gzip; dominated by react + framer-motion). Code-splitting a one-page site adds requests without improving first paint. Watch the build output for regressions instead.
- **ArchiveCard affordances**: arrow icon + pointer cursor appear only when a card has `href` (10 of 19 do). Non-linked cards keep the hover wipe but read as non-clickable.
- **Section numbering derives from `navLinks` order** (`sectionIndex()`), the same way card numbers derive from array order. Nav labels, section ids and heading eyebrows therefore can't drift apart.
- **No sectioning borders.** Sections alternate `background` / `surface-container-low`; grids use 4px black seams (`gap-1`); the Stack slab is gapless with a two-tone checker.
- **ImpactBlock renders a `<p>`**, not a heading — it's a pull-quote and would otherwise break heading order (h1 → h2).
- **Generated images are committed** (`public/*.webp`, `og.jpg`, etc.). Regeneration commands are in CONTENT.md; the untouched source photo lives in `og-src/daniel-source.jpg`.
