import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

const ArchiveCard = ({
  index,
  title,
  description,
  tags,
  href,
  variant = "dark"
}: {
  index: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  variant?: "dark" | "light";
}) => {
  const isLight = variant === "light";

  const content = (
    <motion.div
      whileHover={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-background)"
      }}
      className={cn(
        "p-10 h-full flex flex-col border-l-4 group",
        href ? "cursor-pointer" : "cursor-default",
        isLight
          ? "bg-primary border-primary text-background"
          : "bg-surface-container border-primary text-on-surface"
      )}
    >
      <span className={cn(
        "text-4xl font-display font-black mb-8 block transition-colors duration-500",
        isLight ? "text-background/30" : "text-primary group-hover:text-background/30"
      )}>
        {index}
      </span>
      <h3 className="text-2xl font-display font-black mb-6 uppercase tracking-tighter leading-tight">
        {title}
      </h3>
      <p className={cn(
        "text-base mb-12 leading-relaxed font-sans flex-grow transition-colors duration-500",
        isLight ? "text-background/80" : "text-on-surface/60 group-hover:text-background/80"
      )}>
        {description}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <span className={cn(
          "text-[10px] font-display font-bold uppercase tracking-widest transition-colors duration-500",
          isLight ? "text-background/40" : "text-on-surface/40 group-hover:text-background/40"
        )}>
          {tags.join(" / ")}
        </span>
        {/* Arrow only on linked cards — it signals clickability */}
        {href && (
          <ChevronRight size={24} className={cn(
            "transition-all duration-500 transform group-hover:translate-x-2",
            isLight ? "text-background" : "text-primary group-hover:text-background"
          )} />
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
};

export default ArchiveCard;
