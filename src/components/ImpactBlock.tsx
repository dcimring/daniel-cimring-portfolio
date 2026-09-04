import { motion } from "framer-motion";
import { impactContainerVariants, impactWordVariants } from "./motion";

/**
 * Full-width yellow pull-quote. Words rise in one by one on scroll.
 * Rendered as <p>, not a heading, so the document outline stays h1 → h2.
 * The words are `aria-hidden` and the <p> carries the whole quote as its
 * label, so screen readers get one sentence instead of thirty spans.
 */
const ImpactBlock = ({ quote }: { quote: string }) => (
  <div className="w-full bg-primary py-16 md:py-20 my-8 md:my-12">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={impactContainerVariants}
      className="shell flex gap-8 md:gap-12"
    >
      <div
        aria-hidden="true"
        className="w-2 shrink-0 self-stretch bg-background"
      />
      <p
        aria-label={quote}
        className="text-2xl md:text-6xl font-display font-black uppercase tracking-tighter text-on-primary leading-none text-left"
      >
        {quote.split(" ").map((word, i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            variants={impactWordVariants}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </p>
    </motion.div>
  </div>
);

export default ImpactBlock;
