import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

/**
 * Card used by the Work and Projects grids.
 *
 * Hover is a yellow layer that wipes in from the left rail (transform only —
 * cheap, and it works for keyboard focus too). The light (yellow) card wipes
 * to white instead. `featured` spans the full grid row with a two-column
 * layout; the plan is one featured card per Projects grid (the first).
 */
const ArchiveCard = ({
  index,
  title,
  description,
  tags,
  href,
  variant = "dark",
  featured = false,
}: {
  index: string;
  title: string;
  description: string;
  tags: string[];
  href?: string;
  variant?: "dark" | "light";
  featured?: boolean;
}) => {
  const isLight = variant === "light";

  const content = (
    <div
      className={cn(
        "relative overflow-hidden p-10 h-full flex flex-col border-l-4 border-primary",
        href ? "cursor-pointer" : "cursor-default",
        isLight
          ? "bg-primary text-background"
          : "bg-surface-container text-on-surface",
        featured && "lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:min-h-60",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 group-focus-within:scale-x-100",
          isLight ? "bg-on-surface" : "bg-primary",
        )}
      />
      <div className={featured ? "relative z-10 flex flex-col" : "contents"}>
        <span
          className={cn(
            "relative z-10 text-4xl font-display font-black mb-8 block transition-[color,transform] duration-500 group-hover:-translate-y-1",
            isLight
              ? "text-background/40 group-hover:text-background"
              : "text-primary group-hover:text-background/30",
          )}
        >
          {index}
        </span>
        <h3
          className={cn(
            "relative z-10 text-2xl font-display font-black mb-6 uppercase tracking-tighter leading-tight transition-[color,transform] duration-500 group-hover:translate-x-1",
            !isLight && "group-hover:text-background",
          )}
        >
          {title}
        </h3>
      </div>
      <div className={featured ? "relative z-10 flex flex-col" : "contents"}>
        <p
          className={cn(
            "relative z-10 text-base mb-12 leading-relaxed font-sans flex-grow transition-colors duration-500",
            isLight
              ? "text-background/80"
              : "text-on-surface/60 group-hover:text-background/80",
          )}
        >
          {description}
        </p>
        <div className="relative z-10 flex justify-between items-center mt-auto">
          <span
            className={cn(
              "text-[11px] font-display font-black uppercase tracking-widest transition-colors duration-500",
              isLight
                ? "text-background/70"
                : "text-on-surface/60 group-hover:text-background/50",
            )}
          >
            {tags.join(" / ")}
          </span>
          {/* Arrow only on linked cards — it signals clickability */}
          {href && (
            <ChevronRight
              size={24}
              className={cn(
                "shrink-0 transition-[color,transform] duration-500 group-hover:translate-x-2",
                isLight
                  ? "text-background"
                  : "text-primary group-hover:text-background",
              )}
            />
          )}
        </div>
      </div>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn("group h-full", featured && "md:col-span-2 lg:col-span-3")}
    >
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
};

export default ArchiveCard;
