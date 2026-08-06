import type { Variants } from "framer-motion";

/**
 * Shared framer-motion variants, hoisted to module scope so they aren't
 * recreated on every render.
 *
 * IMPORTANT: the `hidden` / `visible` key names are load-bearing — parent
 * containers drive child animations by name via `initial="hidden"` +
 * `whileInView="visible"` with `staggerChildren`. Renaming a key silently
 * breaks the stagger propagation.
 */

/** Hero: parent container staggering its children in. */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 0.5,
    },
  },
};

/** Hero: individual staggered child (badge, headline, CTA row, portrait). */
export const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

/** Stack: grid container staggering skill badges in quickly. */
export const stackContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

/** Stack: a single skill badge. */
export const skillBadgeVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/** Insights: list container staggering article rows in. */
export const insightsContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/** Insights: a single article row. */
export const articleItemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
