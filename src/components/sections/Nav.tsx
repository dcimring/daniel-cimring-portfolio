import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Menu, X } from "lucide-react";
import { email, navLinks } from "../../data/site";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism border-b border-outline-variant/10">
      <div className="container mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
        <a href="#" className="flex items-center gap-4 group" onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <div className="w-2 h-8 bg-primary" />
          <span className="font-display text-lg font-black tracking-tighter uppercase group-hover:text-primary transition-colors">
            Daniel Cimring
          </span>
        </a>

        <div className="flex gap-10 items-center">
          {/* Desktop Links */}
          <div className="hidden sm:flex gap-10 items-center text-[10px] md:text-xs font-display font-black uppercase tracking-widest">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
            <a href={`mailto:${email}`} className="bg-primary text-on-primary px-6 py-3 hover:bg-white transition-colors">Connect</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 text-on-surface/60 hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-24 left-0 w-full bg-surface-container-low border-b border-outline-variant/10 p-10 sm:hidden z-40"
          >
            <div className="flex flex-col gap-10 font-display text-lg font-black uppercase tracking-tighter">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between group"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <span>{link.name}</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
              <a
                href={`mailto:${email}`}
                className="mt-6 w-full py-5 bg-primary text-on-primary text-center hover:bg-white transition-all"
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
