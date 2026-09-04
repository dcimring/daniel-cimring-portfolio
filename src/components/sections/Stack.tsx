import { motion } from "framer-motion";
import SectionHeading from "../SectionHeading";
import SkillBadge from "../SkillBadge";
import { skills } from "../../data/skills";
import { stackContainerVariants } from "../motion";

const marqueeItems = [...skills, ...skills];

const Stack = () => (
  <section
    id="stack"
    className="py-24 md:py-32 bg-background relative overflow-hidden"
  >
    <div className="shell">
      <SectionHeading
        href="#stack"
        line1="What I"
        line2="Build With"
        variant="offset"
      />
    </div>

    {/* Full-bleed marquee of the same names in hollow type. Decorative: the grid below is the accessible list. */}
    <div
      aria-hidden="true"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-4 mb-16 md:mb-20"
    >
      <div className="marquee-track">
        {marqueeItems.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center whitespace-nowrap font-display font-black uppercase tracking-tighter leading-none text-6xl md:text-8xl stroke-dim after:content-[''] after:inline-block after:w-3 after:h-3 after:bg-primary after:mx-8"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>

    <div className="shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.1 }}
        variants={stackContainerVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-0"
      >
        {skills.map((skill) => (
          <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Stack;
