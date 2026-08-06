import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import { articles } from "../../data/articles";
import { socials } from "../../data/site";
import { articleItemVariants, insightsContainerVariants } from "../motion";

const Insights = () => (
  <section
    id="insights"
    className="py-24 md:py-32 bg-surface-container-low relative overflow-hidden"
  >
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase mb-16 md:mb-24"
      >
        Personal <br />
        <span className="stroke">Journal</span>
      </motion.h2>
      <div className="max-w-5xl">
        <p className="text-on-surface/60 mb-20 font-display font-medium uppercase text-lg md:text-xl leading-relaxed max-w-2xl tracking-tight">
          Some early articles I wrote mostly on Bitcoin.
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={insightsContainerVariants}
          className="space-y-0"
        >
          {articles.map((article, i) => (
            <motion.a
              key={i}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={articleItemVariants}
              whileHover={{
                x: 10,
                backgroundColor: "var(--color-surface-container)",
              }}
              className="flex items-center justify-between group p-8 border-b border-outline-variant/10"
            >
              <div className="flex items-center gap-8">
                <span className="text-xs font-display font-black text-primary tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="text-xl md:text-2xl font-display font-black group-hover:text-primary transition-colors leading-tight uppercase tracking-tighter">
                  {article.title}
                </h3>
              </div>
              <ChevronRight
                size={24}
                className="text-primary opacity-0 group-hover:opacity-100 transition-all hidden md:block"
              />
            </motion.a>
          ))}
        </motion.div>
        <div className="mt-20">
          <a
            href={socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-xs font-display font-black text-primary uppercase tracking-[0.3em] group"
          >
            <span>Explore Archive</span>
            <div className="relative">
              <ExternalLink size={14} />
              <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Insights;
