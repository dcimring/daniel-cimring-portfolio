import { useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  type LucideIcon
} from "lucide-react";
import { cn } from "./lib/utils";
import { email, navLinks, socials } from "./data/site";
import { experience } from "./data/experience";
import { projects } from "./data/projects";
import { skills } from "./data/skills";
import { articles } from "./data/articles";

/** Derives the "01"-style card index from array position. */
const cardIndex = (i: number) => String(i + 1).padStart(2, "0");

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
  variant?: "dark" | "light"
}) => {
  const isLight = variant === "light";
  
  const content = (
    <motion.div 
      whileHover={{ 
        backgroundColor: "var(--color-primary)",
        color: "var(--color-background)"
      }}
      className={cn(
        "p-10 h-full flex flex-col border-l-4 group cursor-pointer",
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
        <ChevronRight size={24} className={cn(
          "transition-all duration-500 transform group-hover:translate-x-2",
          isLight ? "text-background" : "text-primary group-hover:text-background"
        )} />
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

const SkillBadge = ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }}
    whileHover={{ scale: 1.05, backgroundColor: "var(--color-primary)" }}
    className="flex items-center gap-4 p-6 bg-surface-container-high group cursor-default"
  >
    <Icon size={20} className="text-primary group-hover:text-on-primary transition-colors" />
    <span className="text-xs font-display font-black uppercase tracking-widest text-on-surface group-hover:text-on-primary">{name}</span>
  </motion.div>
);

const ImpactBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full bg-primary py-16 md:py-20 px-6 my-8 md:my-12">
    <div className="container mx-auto">
      <h3 className="text-3xl md:text-6xl font-display font-black uppercase tracking-tighter text-on-primary leading-none text-center md:text-left">
        {children}
      </h3>
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary selection:text-background font-sans bg-background text-on-surface overflow-x-hidden">
      
      {/* Navigation */}
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

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-32 pb-12 md:pb-20 relative overflow-hidden bg-background">
          <div className="container mx-auto px-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
              className="grid lg:grid-cols-12 gap-0 items-stretch"
            >
              <div className="lg:col-span-8 flex flex-col justify-center">
                <motion.div variants={itemVariants} className="mb-8 md:mb-10">
                  <div className="inline-block bg-primary px-6 py-3">
                    <span className="font-display text-sm font-black text-on-primary uppercase tracking-[0.2em]">
                      Entrepreneur • Software Developer
                    </span>
                  </div>
                </motion.div>

                {/* Option 1: Mobile Asymmetric Editorial Inset */}
                <motion.div 
                  variants={itemVariants}
                  className="block lg:hidden w-[85%] ml-auto mb-10 md:mb-12 relative"
                >
                  <div className="aspect-square bg-surface-container-high relative overflow-hidden">
                    <img 
                      src="/daniel.jpg" 
                      alt="Daniel Cimring"
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-100"
                    />
                    <div className="absolute inset-0 border-[10px] border-primary/20 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 bg-primary p-4">
                      <div className="text-[8px] font-display font-black text-on-primary uppercase tracking-[0.2em] mb-1">Focus 2026</div>
                      <div className="text-sm font-display font-black text-on-primary uppercase tracking-tighter">AI Agents</div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="flex gap-10 items-start mb-10 md:mb-12">
                  <div className="w-2 h-48 md:h-64 bg-primary shrink-0 mt-2" />
                  <motion.h1 variants={itemVariants} className="text-5xl sm:text-8xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter uppercase">
                    Daniel <br />
                    <span className="stroke">Cimring</span>
                  </motion.h1>
                </div>

                <br />
                <br />
                <br />
                <br />


                <motion.div variants={itemVariants} className="flex flex-wrap gap-10 items-center">
                  <a
                    href={`mailto:${email}`}
                    className="px-10 py-5 bg-primary text-on-primary font-display font-black text-base uppercase tracking-tighter hover:bg-white transition-colors"
                  >
                    Start a Conversation
                  </a>
                  <div className="flex gap-8">
                    <a href={socials.github} target="_blank" className="text-on-surface hover:text-primary transition-colors">
                      <Github size={28} />
                    </a>
                    <a href={socials.linkedin} target="_blank" className="text-on-surface hover:text-primary transition-colors">
                      <Linkedin size={28} />
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <div className="hidden lg:flex lg:col-span-4 relative mt-20 lg:mt-0 items-center">
                <motion.div 
                  variants={itemVariants}
                  className="w-full aspect-[3/4] bg-surface-container-high relative overflow-hidden"
                >
                  <img 
                    src="/daniel.jpg" 
                    alt="Daniel Cimring"
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-85"
                  />
                  <div className="absolute inset-0 border-[20px] border-primary/20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 bg-primary p-8">
                    <div className="text-xs font-display font-black text-on-primary uppercase tracking-[0.3em] mb-2">Focus 2026</div>
                    <div className="text-xl font-display font-black text-on-primary uppercase tracking-tighter">AI Agents</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 right-12 hidden md:block">
            <div className="flex flex-col items-center gap-6">
              <span className="text-[10px] font-display font-black text-primary uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Scroll</span>
              <div className="w-1 h-24 bg-gradient-to-b from-primary to-transparent" />
            </div>
          </div>

        </section>

        <ImpactBlock>
          "My journey began as a child with an early computer and a love for code. Today I’m still driven by that same goal of creating meaningful solutions that are a joy to use."
        </ImpactBlock>

        {/* Experience Section */}
        <section id="work" className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase text-on-surface"
              >
                Professional <br />
                <span className="stroke">Experience</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 border-t border-outline-variant/10">
              {experience.map((item, i) => (
                <ArchiveCard key={item.title} index={cardIndex(i)} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
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

        {/* Stack Section */}
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
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.04
                  }
                }
              }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0"
            >
              {skills.map((skill) => (
                <SkillBadge key={skill.name} name={skill.name} icon={skill.icon} />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-24 md:py-32 bg-surface-container-low relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase mb-16 md:mb-24"
            >
              Personal <br />
              <span className="stroke">Journal</span>
            </motion.h2>
            <div className="max-w-5xl">
              <p className="text-on-surface/60 mb-20 font-display font-medium uppercase text-lg md:text-xl leading-relaxed max-w-2xl tracking-tight">
                Some early articles I wrote mostly on Bitcoin.
              </p>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
                className="space-y-0"
              >
                {articles.map((article, i) => (
                  <motion.a 
                    key={i}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                    whileHover={{ 
                      x: 10,
                      backgroundColor: "var(--color-surface-container)" 
                    }}
                    className="flex items-center justify-between group p-8 border-b border-outline-variant/10"
                  >
                    <div className="flex items-center gap-8">
                      <span className="text-xs font-display font-black text-primary tracking-widest">0{i + 1}</span>
                      <h3 className="text-xl md:text-2xl font-display font-black group-hover:text-primary transition-colors leading-tight uppercase tracking-tighter">{article.title}</h3>
                    </div>
                    <ChevronRight size={24} className="text-primary opacity-0 group-hover:opacity-100 transition-all hidden md:block" />
                  </motion.a>
                ))}
              </motion.div>
              <div className="mt-20">
                <a
                  href={socials.medium}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-xs font-display font-black text-primary uppercase tracking-[0.3em] group"
                >
                  <span>Explore Archive</span>
                  <div className="relative">
                    <ExternalLink size={14} />
                    <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-24 bg-surface-container-low border-t border-outline-variant/10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-primary" />
              <span className="text-xs font-display font-black uppercase tracking-[0.4em] text-on-surface/40">Daniel Cimring // 2026</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 text-[10px] font-display font-black uppercase tracking-[0.3em] text-on-surface/40">
              <a href={socials.github} target="_blank" className="hover:text-primary transition-colors">Github</a>
              <a href={socials.linkedin} target="_blank" className="hover:text-primary transition-colors">Linkedin</a>
              <a href={socials.medium} target="_blank" className="hover:text-primary transition-colors">Medium</a>
              <a href={`mailto:${email}`} className="hover:text-primary transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
