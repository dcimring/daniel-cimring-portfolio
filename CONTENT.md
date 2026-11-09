# Content Runbook

How to make the common edits to this site. All content lives in `src/data/` — you should almost never need to touch a component to change what the site says.

## Add or edit a project card

Edit `src/data/projects.ts`. Append (or modify) an object:

```ts
{
  title: "My New Project",
  description: "One or two sentences. End with a period.",
  href: "https://example.com",        // omit entirely if there's no link
  tags: ["AI", "SaaS", "Whatever"],   // rendered joined with " / "
}
```

- The `01`-style number is derived from array position — reorder the array to renumber.
- Each project gets a page at `/projects/<slug-of-title>`, which its card links to; `href` becomes the page's "Visit site" button. Renaming a project changes its URL. Optional `details` (an array of paragraphs) adds longer copy to that page only. Add `page: false` for no page — the card then links straight to `href`, or isn't clickable without one.

Experience entries work identically in `src/data/experience.ts`.

## Add a skill badge

Edit `src/data/skills.ts` — `{ name: "Rust" }`. Names are displayed in lower-case file style automatically (`React / TS` becomes `react/ts`).

## Add a journal article

Edit `src/data/articles.ts` — `{ title, link }` with the full Medium article URL (not the profile URL).

## Change the hero, quote, or writing intro

`src/data/site.ts` holds `hero` (role line, tagline, CTA label, the "Focus / AI Agents" caption under the portrait), `impactQuote` (the pull-quote under the hero; the part after the last colon is highlighted) and `writing` (intro line + "More on Medium" label). The tagline is also the site description in `index.html`; keep the two in sync.

## Change nav links / socials / email

`src/data/site.ts`. The nav, mobile menu, hero, and footer all read from here. **Nav order drives section numbering**: each link's `href` must match a section `id`, and the "01 / WORK" eyebrow on each heading comes from its position in `navLinks`.

## Swap the headshot

The untouched source photo is `og-src/daniel-source.jpg`; `og-src/daniel-graded.jpg` is the shipped version, with extra contrast and its blacks mapped to the page background (`#0d1210`). After replacing it, regenerate the shipped variants (needs `cwebp`: `brew install webp`):

```bash
sips -Z 960 og-src/daniel-graded.jpg --out public/daniel-960.jpg
sips -Z 480 og-src/daniel-graded.jpg --out /tmp/daniel-480.jpg
cwebp -q 90 public/daniel-960.jpg -o public/daniel-960.webp
cwebp -q 90 /tmp/daniel-480.jpg -o public/daniel-480.webp
```

If the new photo's aspect ratio differs from 854×960, update the `width`/`height` attributes on the `<img>` in `src/components/sections/Hero.tsx`, then regenerate the OG card (below).

## Regenerate the OG link-preview card

`public/og.jpg` (1200×630) is rendered from `og-src/og.html` (edit that file to change the card's text/layout):

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless \
  --disable-gpu --hide-scrollbars --force-device-scale-factor=1 --virtual-time-budget=8000 \
  --window-size=1200,630 --screenshot=/tmp/og.png "file://$PWD/og-src/og.html"
sips -s format jpeg -s formatOptions 88 /tmp/og.png --out public/og.jpg
```

Eyeball `/tmp/og.png` before committing. After deploying, refresh caches with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) or [opengraph.xyz](https://www.opengraph.xyz/).

## Deploy

- **Automatic (normal path):** push to `main` — the Vercel GitHub integration builds and deploys to https://danielcimring.com. CI (lint + format + build) runs in parallel on GitHub Actions.
- **Manual:** `npx vercel --prod` from the repo root (project link is in `.vercel/`, which is gitignored — run `npx vercel link` first on a fresh clone).

## Pre-ship checklist

```bash
npm run lint && npm run format:check && npm run build
```

Then spot-check `npm run dev` — hero and portrait on desktop and phone, project links, a project page, writing links.
