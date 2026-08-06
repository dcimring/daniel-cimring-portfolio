import { motion } from "framer-motion";
import SkillBadge from "../SkillBadge";
import { skills } from "../../data/skills";
import { stackContainerVariants } from "../motion";

const Stack = () => (
  <section id="stack" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-outline-variant/10">
    <div className="container mx-auto px-4 md:px-6">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false }}
        className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase mb-16 md:mb-24"
      >
        Core <br />
        <span className="stroke">Technologies</span>
      </motion.h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={stackContainerVariants}
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0"
      >
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Stack;
