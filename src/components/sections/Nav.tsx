import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { email, navCta, navLinks } from "../../data/site";
import { cn, sectionIndex } from "../../lib/utils";
import CtaLink from "../CtaLink";

/**
 * Fixed nav. Links are plain anchors: CSS `scroll-behavior` + `scroll-margin-top`
 * handle the smooth scroll, the URL hash updates, and back/forward work.
 * The bar (not the <nav>) carries the backdrop blur, because a backdrop-filter
 * would otherwise become the containing block for the fixed mobile backdrop.
 */
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const { scrollYProgress } = useScroll();

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);
  const toggleMenu = useCallback(() => setIsMenuOpen((prev) => !prev), []);

  // Active section: a thin band around the upper-middle of the viewport so exactly one section wins.
  useEffect(() => {
    const targets = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveHref(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Mobile menu: Escape closes, body scroll locks, focus moves in and back out.
  useEffect(() => {
    if (!isMenuOpen) return;
    const toggle = toggleRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      toggle?.focus();
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="relative z-20 glass-morphism">
        <div className="shell h-24 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-4 group">
            <div className="w-2 h-8 bg-primary" />
            <span className="font-display text-lg font-black tracking-tighter uppercase group-hover:text-primary transition-colors">
              Daniel Cimring
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-10 items-center text-xs font-display font-black uppercase tracking-widest">
            {navLinks.map((link) => {
              const isActive = link.href === activeHref;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "relative py-2 transition-colors hover:text-primary",
                    isActive && "text-primary",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "mr-2 text-primary transition-opacity",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    {sectionIndex(link.href)}
                  </span>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40,
                      }}
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                    />
                  )}
                </a>
              );
            })}
            <CtaLink href={`mailto:${email}`} size="sm">
              {navCta}
            </CtaLink>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={toggleRef}
            onClick={toggleMenu}
            className="md:hidden p-2 text-on-surface hover:text-primary transition-colors"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Scroll progress */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: scrollYProgress }}
          className="absolute bottom-0 left-0 h-[3px] w-full bg-primary origin-left"
        />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeMenu}
              aria-hidden="true"
              className="fixed inset-0 z-0 bg-background/60 md:hidden"
            />
            <motion.div
              key="menu"
              id="mobile-menu"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute top-full left-0 w-full z-10 bg-surface-container-low p-10 md:hidden"
            >
              <div className="flex flex-col gap-10 font-display text-lg font-black uppercase tracking-tighter">
                {navLinks.map((link, i) => (
                  <a
                    key={link.href}
                    ref={i === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex items-center justify-between group"
                  >
                    <span>
                      <span className="mr-3 text-primary text-xs tracking-widest">
                        {sectionIndex(link.href)}
                      </span>
                      {link.name}
                    </span>
                    <ChevronRight
                      size={20}
                      className="text-primary opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-[opacity,transform]"
                    />
                  </a>
                ))}
                <CtaLink href={`mailto:${email}`} className="mt-6 w-full py-5">
                  {navCta}
                </CtaLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
