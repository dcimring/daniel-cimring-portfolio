import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { skillBadgeVariants } from "./motion";

const SkillBadge = ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
  <motion.div
    variants={skillBadgeVariants}
    whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)" }}
    className="flex items-center gap-4 p-6 bg-surface-container-high group cursor-default"
  >
    <Icon size={20} className="text-primary group-hover:text-on-primary transition-colors" />
    <span className="text-xs font-display font-black uppercase tracking-widest text-on-surface group-hover:text-on-primary">{name}</span>
  </motion.div>
);

export default SkillBadge;
