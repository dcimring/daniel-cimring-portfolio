import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { articles } from "../../data/articles";
import { socials, writing } from "../../data/site";
import { cardIndex } from "../../lib/utils";
import { articleItemVariants, writingContainerVariants } from "../motion";

const Writing = () => (
  <section
    id="writing"
    className="py-24 md:py-32 bg-surface-container-low relative overflow-hidden"
  >
    <div className="shell">
      <SectionHeading
        href="#writing"
        line1="Things I’ve"
        line2="Written"
        variant="bar"
      />
      <div className="max-w-5xl">
        <p className="text-on-surface/70 mb-16 text-lg md:text-xl leading-relaxed max-w-xl">
          {writing.intro}
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={writingContainerVariants}
          className="flex flex-col gap-1"
        >
          {articles.map((article, i) => (
            <motion.a
              key={article.link}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={articleItemVariants}
              className="relative overflow-hidden flex items-center justify-between gap-4 md:gap-6 group p-6 md:p-8 bg-surface-container hover:bg-surface-container-high transition-colors duration-300"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 bg-primary origin-top scale-y-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
                <span className="text-xs font-display font-black text-primary tracking-widest">
                  {cardIndex(i)}
                </span>
                <h3 className="text-lg md:text-2xl font-display font-black group-hover:text-primary group-hover:translate-x-2 transition-[color,transform] duration-300 leading-tight uppercase tracking-tighter">
                  {article.title}
                </h3>
              </div>
              <ChevronRight
                size={24}
                className="shrink-0 text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-[opacity,transform] duration-300"
              />
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-16">
          <a
            href={socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center gap-4 pb-2 text-xs font-display font-black text-primary uppercase tracking-[0.3em] group"
          >
            <span>{writing.cta}</span>
            <ExternalLink size={14} />
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Writing;
