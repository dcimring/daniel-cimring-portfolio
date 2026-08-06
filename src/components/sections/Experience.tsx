import { motion } from "framer-motion";
import ArchiveCard from "../ArchiveCard";
import { experience } from "../../data/experience";
import { cardIndex } from "../../lib/utils";

const Experience = () => (
  <section
    id="work"
    className="py-24 md:py-32 bg-background relative overflow-hidden"
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase text-on-surface"
        >
          Professional <br />
          <span className="stroke">Experience</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 border-t border-outline-variant/10">
        {experience.map((item, i) => (
          <ArchiveCard key={item.title} index={cardIndex(i)} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
