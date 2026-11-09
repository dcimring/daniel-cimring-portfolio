# Architecture

Portfolio: Vite 8 + React 19 + TypeScript (strict) + Tailwind CSS v4. No router, no state management, no backend — a home page of sections plus one static page per project, all prerendered to HTML at build time (see Prerendering). Deployed to Vercel (see README → Deployment).

## File tree

```text
index.html                     entry: fonts, SEO/OG/Twitter meta, JSON-LD Person schema
og-src/                        NOT shipped — source photos + OG-card template (see CONTENT.md)
public/                        static assets served at site root
  daniel-480.webp / -960.webp  responsive hero photo (WebP)
  daniel-960.jpg               hero photo fallback (non-WebP browsers)
  og.jpg                       1200x630 link-preview card
  favicon.svg                  brand mark
  apple-touch-icon.png         180x180 PNG of the same mark
  robots.txt                   SEO
src/
  main.tsx                     browser entry; hydrates the prerendered page
  Root.tsx                     picks App or ProjectPage for a path
  entry-server.tsx             prerender entry
  App.tsx                      composition of home page sections — no logic
  index.css                    Tailwind v4 @theme tokens + global styles
  types.ts                     CardItem, Project, Article, Skill, NavLink
  lib/utils.ts                 entryIndex() "001"-style index; toCommandCase()
  lib/projects.ts              project slugs and URLs
  data/                        ALL site content lives here (see CONTENT.md)
  components/
    PageShell.tsx              skip link, nav, main and footer shared by every page
    ProjectPage.tsx            a project's own page
    PullQuote.tsx              quote under the hero
    CtaLink.tsx                primary button
    sections/                  Nav, Hero, Projects, Experience, Stack, Writing, Footer
```

## Prerendering

`npm run build` makes a client build into `dist/`, an SSR build of `src/entry-server.tsx` into `dist-ssr/`, then runs `scripts/prerender.mjs`. That script renders `<Root>` for `/` and each `/projects/<slug>`, writes the HTML plus per-page meta and JSON-LD, and generates `dist/sitemap.xml`. `main.tsx` hydrates the result (or client-renders under `npm run dev`, where `#root` is empty, so per-page meta only exists in a build). Links between pages are plain anchors: full page loads, no router. Slugs derive from project titles, so renaming a project changes its URL. `vercel.json` `cleanUrls` serves `projects/x.html` at `/projects/x`. Anything rendered must match between build and browser.

## Layering

**data → components → sections → App.** Content changes never touch components; component changes never touch content. Entry numbers ("001", "002", …) are derived from array position, so reordering an array renumbers the list.

## Styling

Tailwind CSS v4, zero config file. Theme tokens are in the `@theme` block of `src/index.css`. The `shell` utility sets the page width and gutter. Visual rules live in `DESIGN.md`.

## Hero image

One `<picture>` (WebP with a JPEG fallback), preloaded from `index.html`. Explicit `width`/`height` prevent layout shift, and it is above the fold, so no `loading="lazy"`.

## Deliberate decisions

- **No animation library.** The design is static, so the JS bundle is only React.
- **Project names link to their own page; `live ↗` links to the external site.** Projects with `page: false` have a name that links straight out.
- **Generated images are committed** (`public/*.webp`, `og.jpg`, etc.). Regeneration commands are in CONTENT.md.
