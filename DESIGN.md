# Design System Document: High-End Editorial Experience

## 1. Overview & Creative North Star: "The Digital Curator"
This design system is built to transcend the standard "tech portfolio" aesthetic. Our Creative North Star is **"The Digital Curator"**—a philosophy that treats the screen as a physical gallery space or a high-end editorial spread. 

To achieve this, we move away from rigid, boxy layouts in favor of **intentional asymmetry** and **tonal depth**. We prioritize the "breathing room" of whitespace as a functional element, not a void. By utilizing a high-contrast typographic scale and a sophisticated dark palette, we create a sense of quiet authority and artistic permanence.

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in a "void-black" foundation, using light and shadow to define space rather than structural lines.

### Color Tokens (Material Convention)
*   **Background / Surface:** `#0e0e0e` (Deep Obsidian)
*   **Primary (Accents/Highlights):** `#c8c6c2` (Warm Silver)
*   **On-Surface (Body Text):** `#e5e5e5` (Soft Ivory)
*   **Surface-Container-Lowest:** `#000000` (Pure Black)
*   **Surface-Container-High:** `#1f1f1f` (Charcoal)

### Core Color Principles
*   **The "No-Line" Rule:** Explicitly prohibit the use of 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts. Transition from a `surface` section to a `surface-container-low` section to denote a change in context.
*   **Surface Hierarchy & Nesting:** Treat the UI as layers of fine paper. Place a `surface-container-high` card atop a `surface` background to create a natural, "physical" lift.
*   **The "Glass & Gradient" Rule:** For floating elements or navigation bars, utilize Glassmorphism. Use semi-transparent versions of `surface` colors with a `backdrop-filter: blur(20px)`.
*   **Signature Textures:** For primary CTAs, do not use flat fills. Use a subtle linear gradient from `primary` (#c8c6c2) to `primary-dim` (#bab9b4) at a 45-degree angle to provide a metallic, premium sheen.

## 3. Typography: The Editorial Voice
We pair a high-contrast serif with a utilitarian sans-serif to bridge the gap between "Art" and "Interface."

*   **Display & Headlines (Newsreader):** This is our "Editorial" voice. Use `display-lg` (3.5rem) with tighter letter-spacing (-0.02em) for hero moments. The serif's organic curves provide the "artistic" vibe requested.
*   **Body & Labels (Manrope):** This is our "Minimalist" voice. Manrope provides a clean, modern counterpoint to the serif. For `body-md`, ensure a line-height of 1.6 to maintain readability and the feeling of a premium publication.
*   **Intentional Scale:** Use extreme contrast between sizes. A `display-lg` headline should often be paired with a `label-sm` metadata tag to create a sophisticated, unbalanced hierarchy.

## 4. Elevation & Depth: Tonal Layering
In a "Digital Curator" system, we never use heavy drop shadows. We use light.

*   **The Layering Principle:** Stacking is the primary method of elevation. A pure black (`surface-container-lowest`) element on top of a charcoal (`surface-container-high`) background creates an "inset" look, while the reverse creates a "raised" look.
*   **Ambient Shadows:** For floating modals or menus, use a shadow with a 40px–60px blur, 4% opacity, and a color derived from `on-surface` (#e5e5e5). This mimics soft, ambient light hitting a surface.
*   **The "Ghost Border" Fallback:** If a container needs more definition, use the `outline-variant` (#484848) at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Navigation components should use `surface` at 70% opacity with a heavy blur. This prevents the UI from feeling "pasted on" and allows the editorial content to flow underneath.

## 5. Components: Refined Interaction

*   **Buttons (The Signature CTA):** 
    *   *Primary:* Warm Silver (`primary`) gradient fill, 0.25rem (sm) corner radius. Typography: `label-md` in all-caps with 0.1em letter spacing.
    *   *Tertiary:* Pure text using `title-sm` with a 1px underline using the `primary` token, offset by 4px.
*   **Cards & Lists:** 
    *   **Prohibited:** Horizontal dividers/lines.
    *   **Guideline:** Separate list items using the spacing scale (e.g., 32px vertical gap). Use a `surface-container-low` background on hover to define the interactive area.
*   **Input Fields:** 
    *   Minimalist "Underline" style only. No box containers. Use `outline-variant` at 20% opacity for the line. The line should animate to 100% opacity `primary` on focus.
*   **Chips:** 
    *   Use `surface-container-high` backgrounds with `label-sm` text. Corners should be `full` (9999px) for a soft, organic feel.
*   **Custom Component: The "Editorial Quote":**
    *   A combination of a `headline-lg` serif text paired with a small `label-md` attribution, floating asymmetrically within a large `surface-container-lowest` block.

## 6. Do's and Don'ts

### Do:
*   **Do** embrace asymmetry. It is okay for an image to be offset to the left while text is aligned to the right with empty space between.
*   **Do** use massive amounts of whitespace. If a section feels "full," it is likely over-designed.
*   **Do** use "Warm Silver" (`primary`) sparingly as a highlight to guide the eye to the most important action.

### Don't:
*   **Don't** use 100% opaque borders or dividers. This breaks the editorial flow and feels "techy."
*   **Don't** use standard "Blue" for links. Use the `primary` token or a simple weight change in the typography.
*   **Don't** use sharp, 0px corners. Even a subtle `0.25rem` (sm) radius softens the interface and makes it feel more "organic."
*   **Don't** over-animate. Transitions should be slow (300ms–500ms) and use a "Cubic Bezier" (0.4, 0, 0.2, 1) to mimic natural movement.
