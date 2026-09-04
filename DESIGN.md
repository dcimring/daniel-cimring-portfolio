# Design System: High-Impact Athletic Editorial

## 1. Overview & Creative North Star

**Creative North Star: "The Kinetic Monolith"**

This design system moves away from the polite, rounded aesthetics of standard SaaS platforms and embraces the raw, aggressive energy of performance athletics. The "Kinetic Monolith" is defined by sharp 0px corners, extreme typographic contrast, and an uncompromising color palette. It breaks the "template" feel through **Intentional Asymmetry**: large blocks of primary yellow overlap monochromatic imagery, and text bleeds across color boundaries to create a sense of forward motion.

## 2. Colors & Surface Logic

### The Palette

The core of this system is the tension between `#0e0e0e` (Deep Black) and `#fde400` (Athletic Yellow).

- **Background (`#0e0e0e`)**: The void. All content emerges from this depth.
- **Primary (`#fde400`)**: The "High-Voltage" accent. Used for high-impact callouts and primary actions.
- **On-Surface (`#ffffff`)**: Pure white for maximum readability against the dark void.
- **Surface Containers**: Tonal stacking using `#131313`, `#191919`, and `#1f1f1f`.

### The "No-Line" Rule

Traditional 1px borders are strictly prohibited for sectioning. Boundaries are created through:

1.  **Background Shifts**: Move between surface containers to define content areas.
2.  **Color Blocking**: Full-bleed blocks of Athletic Yellow as natural separators.
3.  **Hard Edges**: High-contrast imagery meeting solid color blocks.

### The "Glass & Gradient" Rule

- **Glassmorphism**: For floating elements (navigation), use `#131313` at 80% opacity with a `backdrop-filter: blur(20px)`.
- **Kinetic Gradient**: Subtle linear gradient from `#fde400` to `#edd600` on large CTAs.

## 3. Typography

### Headline Philosophy: The Lexend Heavyweight

- **Display & Headline (Lexend)**: Always **Uppercase**. Tight tracking (-0.02em to -0.05em) for a "wall of text" effect.
- **Body & Title (Inter)**: Clean, technical counter-balance.
- **Contrast**: High-impact uppercase headers vs. utilitarian body text.

## 4. Elevation & Depth

Depth is achieved via **Tonal Stacking** rather than shadows.

- **Ghost Border Fallback**: Use `#484848` at 20% opacity only when essential for accessibility (e.g., inputs). Never add an opacity modifier on top of it — `/10` compounds to ~2% and the line vanishes.
- **Section boundaries** come from alternating `background` / `surface-container-low` and the full-bleed yellow Impact block. There are no sectioning borders anywhere in the page.
- **Border-Text-Stroke**: Use for "hollow" text effects on large display type to reduce visual weight while maintaining impact.

## 5. Components

### Buttons

- **Primary** (`CtaLink`): Kinetic Gradient over a white base, black uppercase Lexend, 0px radius. Hover fades the gradient out to reveal white.

### Section headings (`SectionHeading`)

- Every section opens with a yellow eyebrow `01 / WORK` (numbered from nav order) and a two-line Lexend headline whose lines rise out of a clip. One motif, four layouts — never reuse a variant twice on the same page:
  - `reveal` (Work): left-aligned, line 2 hollow.
  - `bleed-right` (Projects): right-aligned, hollow line runs off the right edge.
  - `offset` (Stack): line 2 stepped in, hollow in yellow.
  - `bar` (Writing): line 1 on a yellow block that wipes in.

### Cards, cells, rows

- Hover is a **wipe**, not a fade: a yellow layer scales in from the left rail (white on the yellow featured card). Text flips colour with it. Numerals lift, titles nudge right, arrows slide.
- Grids are tonal slabs with 4px black seams (`gap-1`); the Stack slab is gapless with a two-tone checker. No orphan cells: the first project is featured full-width, and skill counts stay a multiple of 4.

### Impact Blocks

- Full-width Athletic Yellow containers with large black Lexend type, a black rail on the left, words rising in one by one. Used to break up monochromatic sections. Always left-aligned.

### Imagery

- High-contrast, desaturated (black and white) photography. Integrated with structural overlays or color-multiply effects.

## 6. Do's and Don'ts

### Do:

- Use 0px Radius everywhere.
- Embrace massive typographic scale.
- Use intentional asymmetry and bleeding elements.

### Don't:

- No Rounded Corners (0px is the law).
- No Pastel Colors.
- No Thin Borders for sectioning.
- No Centered Body Text (Left-align for technical structure).

## 7. Motion & Brand Assets

### Motion

- The hero runs a choreographed entrance on mount (badge → name lines → tagline → CTAs → portrait curtain → focus tag), then parallaxes gently on scroll (portrait down, name up, scroll cue fades). It is the one place motion is allowed to be a set piece.
- Scroll animations elsewhere replay on every pass (`viewport={{ once: false }}`) — this "kinetic" repetition is intentional; do not change to play-once.
- Page-wide devices: a 3px yellow scroll-progress line under the nav, and the active section's numeral + underline in the nav.
- Only transforms and opacity animate. Hover colour changes are CSS transitions; the moving part is always a wipe layer.
- The Stack marquee is the page's one marquee and its one CSS keyframe animation; it carries its own `prefers-reduced-motion` rule.
- `prefers-reduced-motion` is honored globally via `<MotionConfig reducedMotion="user">` in `main.tsx`; infinite loops (scroll cue) additionally check `useReducedMotion()`.
- Only cards with links show the chevron arrow + pointer cursor; the hover wipe belongs to every card.

### Accessibility floor

- Smallest type is 11px; text on dark surfaces is never below `/60` opacity. Text under 24px on yellow is `text-background`, not `on-primary`.
- Every hover has a visible resting state (touch devices never see `hover:`).
- Keyboard focus is a 3px square yellow ring (black on yellow). There is a skip link, and anchors land below the nav via `scroll-margin-top`.

### Brand assets

- `public/favicon.svg` + `public/apple-touch-icon.png`: yellow bar + hollow white block on deep black — the nav mark plus the `.stroke` typography motif.
- `public/og.jpg`: 1200×630 branded link-preview card generated from `og-src/og.html` (regeneration commands in CONTENT.md). Keep it in-system: black void, yellow blocking, Lexend uppercase, B&W photo. Its badge text must match `hero.eyebrow` in `src/data/site.ts`.
