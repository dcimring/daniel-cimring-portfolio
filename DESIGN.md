# Design System: High-Impact Athletic Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Kinetic Monolith"**

This design system moves away from the polite, rounded aesthetics of standard SaaS platforms and embraces the raw, aggressive energy of performance athletics. The "Kinetic Monolith" is defined by sharp 0px corners, extreme typographic contrast, and an uncompromising color palette. It breaks the "template" feel through **Intentional Asymmetry**: large blocks of primary yellow overlap monochromatic imagery, and text bleeds across color boundaries to create a sense of forward motion.

## 2. Colors & Surface Logic

### The Palette
The core of this system is the tension between `#0e0e0e` (Deep Black) and `#fde400` (Athletic Yellow).
*   **Background (`#0e0e0e`)**: The void. All content emerges from this depth.
*   **Primary (`#fde400`)**: The "High-Voltage" accent. Used for high-impact callouts and primary actions.
*   **On-Surface (`#ffffff`)**: Pure white for maximum readability against the dark void.
*   **Surface Containers**: Tonal stacking using `#131313`, `#191919`, and `#1f1f1f`.

### The "No-Line" Rule
Traditional 1px borders are strictly prohibited for sectioning. Boundaries are created through:
1.  **Background Shifts**: Move between surface containers to define content areas.
2.  **Color Blocking**: Full-bleed blocks of Athletic Yellow as natural separators.
3.  **Hard Edges**: High-contrast imagery meeting solid color blocks.

### The "Glass & Gradient" Rule
*   **Glassmorphism**: For floating elements (navigation), use `#131313` at 80% opacity with a `backdrop-filter: blur(20px)`.
*   **Kinetic Gradient**: Subtle linear gradient from `#fde400` to `#edd600` on large CTAs.

## 3. Typography

### Headline Philosophy: The Lexend Heavyweight
*   **Display & Headline (Lexend)**: Always **Uppercase**. Tight tracking (-0.02em to -0.05em) for a "wall of text" effect.
*   **Body & Title (Inter)**: Clean, technical counter-balance.
*   **Contrast**: High-impact uppercase headers vs. utilitarian body text.

## 4. Elevation & Depth
Depth is achieved via **Tonal Stacking** rather than shadows.
*   **Ghost Border Fallback**: Use `#484848` at 20% opacity only when essential for accessibility (e.g., inputs).
*   **Border-Text-Stroke**: Use for "hollow" text effects on large display type to reduce visual weight while maintaining impact.

## 5. Components

### Buttons
*   **Primary**: Solid Athletic Yellow, black uppercase Lexend, 0px radius.
*   **Hover States**: Transition to white or dim yellow.

### Impact Blocks
*   Full-width Athletic Yellow containers with large black Lexend type. Used to break up monochromatic sections.

### Imagery
*   High-contrast, desaturated (black and white) photography. Integrated with structural overlays or color-multiply effects.

## 6. Do's and Don'ts

### Do:
*   Use 0px Radius everywhere.
*   Embrace massive typographic scale.
*   Use intentional asymmetry and bleeding elements.

### Don't:
*   No Rounded Corners (0px is the law).
*   No Pastel Colors.
*   No Thin Borders for sectioning.
*   No Centered Body Text (Left-align for technical structure).
