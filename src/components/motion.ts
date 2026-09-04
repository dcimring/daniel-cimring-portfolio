import type { Variants } from "framer-motion";

/**
 * Shared framer-motion variants, hoisted to module scope so they aren't
 * recreated on every render.
 *
 * IMPORTANT: the `hidden` / `visible` key names are load-bearing — parent
 * containers drive child animations by name via `initial="hidden"` +
 * `animate="visible"` / `whileInView="visible"` with `staggerChildren`.
 * Renaming a key silently breaks the stagger propagation.
 */

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;
const EASE_WIPE = [0.76, 0, 0.24, 1] as const;

/** Hero: mount-time container. No opacity on the parent — the hero must never be invisible. */
export const heroContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.15,
    },
  },
};

/** Hero: individual staggered child (badge, tagline, CTA row, focus tag). */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
    },
  },
};

/** A line of display type rising out of an `overflow-hidden` wrapper. Used by the hero name and every section heading. */
export const lineRevealVariants: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/** Same reveal, entering from the right (Projects heading, which bleeds off the right edge). */
export const lineRevealRightVariants: Variants = {
  hidden: { y: "110%", x: 60 },
  visible: {
    y: "0%",
    x: 0,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

/** Section heading container: staggers its two lines. */
export const headingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/** Yellow block behind a heading line, wiping in from the left. */
export const barVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: EASE_WIPE },
  },
};

/** Hero portrait: a background-coloured curtain that slides off the (already painted) image. */
export const curtainVariants: Variants = {
  hidden: { scaleX: 1 },
  visible: {
    scaleX: 0,
    transition: { duration: 0.9, ease: EASE_WIPE },
  },
};

/** Impact quote: container staggering words. */
export const impactContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.035,
    },
  },
};

/** Impact quote: a single word. */
export const impactWordVariants: Variants = {
  hidden: { opacity: 0, y: "0.5em" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/** Stack: grid container staggering skill badges in quickly (reads as a row-by-row sweep). */
export const stackContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

/** Stack: a single skill badge. */
export const skillBadgeVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Writing: list container staggering article rows in. */
export const writingContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/** Writing: a single article row. */
export const articleItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};
