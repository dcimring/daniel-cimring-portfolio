import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { skillBadgeVariants } from "./motion";

/** One cell of the gapless Stack slab. Even cells are a step lighter so the slab reads as a checker, not a blur. */
const SkillBadge = ({
  name,
  icon: Icon,
}: {
  name: string;
  icon: LucideIcon;
}) => (
  <motion.div
    variants={skillBadgeVariants}
    className="relative overflow-hidden flex items-center gap-4 p-6 bg-surface-container-high even:bg-surface-container-highest group cursor-default"
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 bg-primary origin-left scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100"
    />
    <Icon
      size={20}
      className="relative z-10 text-primary group-hover:text-background transition-colors duration-300"
    />
    <span className="relative z-10 text-xs font-display font-black uppercase tracking-widest text-on-surface group-hover:text-background transition-colors duration-300">
      {name}
    </span>
  </motion.div>
);

export default SkillBadge;
