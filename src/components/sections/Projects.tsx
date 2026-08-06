import { motion } from "framer-motion";
import ArchiveCard from "../ArchiveCard";
import { projects } from "../../data/projects";
import { cardIndex } from "../../lib/utils";

const Projects = () => (
  <section
    id="projects"
    className="py-24 md:py-32 bg-background relative overflow-hidden"
  >
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase"
        >
          What I'm <br />
          <span className="stroke">Working On</span>
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 border-t border-outline-variant/10">
        {projects.map((item, i) => (
          <ArchiveCard key={item.title} index={cardIndex(i)} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
