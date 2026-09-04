import { motion } from "framer-motion";
import { navLinks } from "../data/site";
import { cn, sectionIndex } from "../lib/utils";
import {
  barVariants,
  headingContainerVariants,
  lineRevealRightVariants,
  lineRevealVariants,
} from "./motion";

export type HeadingVariant = "reveal" | "bleed-right" | "offset" | "bar";

/**
 * Numbered section heading. One motif (two lines rising out of a clip) in four
 * layouts so the sections don't read as a template:
 * - `reveal`      baseline: left-aligned, line 2 hollow
 * - `bleed-right` right-aligned, hollow line runs off the right edge
 * - `offset`      line 2 stepped in, hollow in yellow
 * - `bar`         line 1 sits on a yellow block that wipes in
 *
 * `href` must be the section id (`#work`) so the eyebrow index comes from the
 * nav order. The `.stroke` class stays on the static wrapper, never on the
 * moving span (text-stroke on a transforming element is unreliable in Safari).
 */
const SectionHeading = ({
  href,
  line1,
  line2,
  variant = "reveal",
}: {
  href: string;
  line1: string;
  line2: string;
  variant?: HeadingVariant;
}) => {
  const label = navLinks.find((link) => link.href === href)?.name ?? "";
  const lineVariants =
    variant === "bleed-right" ? lineRevealRightVariants : lineRevealVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={headingContainerVariants}
      className={cn(
        "mb-16 md:mb-24",
        variant === "bleed-right" && "text-right lg:-mr-[6vw]",
      )}
    >
      <span className="block mb-6 font-display text-xs font-black uppercase tracking-[0.3em] text-primary">
        {sectionIndex(href)} / {label}
      </span>
      <h2 className="text-[clamp(3rem,11.5vw,8rem)] font-display font-black uppercase tracking-tighter leading-[0.85]">
        <span className="block overflow-hidden py-[0.08em] -my-[0.08em]">
          <motion.span variants={lineVariants} className="block">
            {variant === "bar" ? (
              <span className="relative isolate inline-block px-[0.08em] text-background">
                <motion.span
                  aria-hidden="true"
                  variants={barVariants}
                  className="absolute inset-0 -z-10 bg-primary origin-left"
                />
                {line1}
              </span>
            ) : (
              line1
            )}
          </motion.span>
        </span>
        <span
          className={cn(
            "block overflow-hidden py-[0.08em] -my-[0.08em]",
            variant === "offset" ? "stroke-primary md:pl-[12vw]" : "stroke",
          )}
        >
          <motion.span variants={lineVariants} className="block">
            {line2}
          </motion.span>
        </span>
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
