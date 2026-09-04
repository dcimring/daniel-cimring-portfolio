import { cn } from "../lib/utils";

/**
 * Primary call-to-action. Yellow "Kinetic Gradient" layer over a white base;
 * the gradient fades out on hover to reveal white (DESIGN.md: hover → white).
 * Opacity is animated because `background-image` can't transition.
 */
const CtaLink = ({
  href,
  children,
  size = "md",
  className,
}: {
  href: string;
  children: React.ReactNode;
  size?: "sm" | "md";
  className?: string;
}) => (
  <a
    href={href}
    className={cn(
      "group relative inline-block overflow-hidden bg-on-surface text-background font-display font-black uppercase text-center",
      size === "sm"
        ? "px-6 py-3 text-xs tracking-widest"
        : "px-10 py-5 text-base tracking-tighter",
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="absolute inset-0 kinetic-gradient transition-opacity duration-300 group-hover:opacity-0"
    />
    <span className="relative z-10">{children}</span>
  </a>
);

export default CtaLink;
