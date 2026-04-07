import { useState, useCallback } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  BarChart3, 
  Bitcoin,
  ChevronRight,
  Code2,
  Database,
  Globe,
  Menu,
  X,
  type LucideIcon
} from "lucide-react";
import { cn } from "./lib/utils";

const Section = ({ children, className, title, id, alternative }: { children: React.ReactNode; className?: string; title: string; id: string; alternative?: boolean }) => (
  <section id={id} className={cn("py-24 md:py-32 relative overflow-hidden", alternative ? "bg-surface-container-lowest" : "bg-background", className)}>
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-6 mb-16 md:mb-24">
        <div className="w-1 h-3 bg-accent" />
        <h2 className="text-[10px] md:text-xs font-sans font-bold tracking-[0.2em] uppercase text-primary/60">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, description, tags, category }: { title: string; description: string; tags: string[]; category: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    className="group p-10 bg-surface-container-high/40 relative transition-all hover:bg-surface-container-high"
  >
    <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink size={18} className="text-accent" />
    </div>
    <span className="text-[10px] font-sans text-primary/50 mb-6 block uppercase tracking-[0.1em]">{category}</span>
    <h3 className="text-2xl font-serif mb-4 group-hover:text-primary transition-colors">{title}</h3>
    <p className="text-on-surface/70 text-base mb-8 leading-relaxed font-sans">{description}</p>
    <div className="flex flex-wrap gap-3">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] font-sans py-1.5 px-3 bg-surface-container-high rounded-full text-on-surface/60 uppercase tracking-widest">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillBadge = ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
  <div className="flex items-center gap-4 p-5 bg-surface-container-high/30 group hover:bg-surface-container-high/60 transition-all rounded-sm">
    <Icon size={18} className="text-primary/40 group-hover:text-primary transition-colors" />
    <span className="text-xs font-sans uppercase tracking-widest text-on-surface/80">{name}</span>
  </div>
);

const EditorialQuote = ({ quote, attribution }: { quote: string; attribution: string }) => (
  <div className="my-24 md:my-32 max-w-4xl mx-auto px-6">
    <h3 className="text-3xl md:text-5xl font-serif italic text-on-surface/90 leading-tight mb-8">
      "{quote}"
    </h3>
    <div className="flex items-center gap-4">
      <div className="h-px w-8 bg-accent" />
      <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-accent">{attribution}</span>
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
        staggerChildren: 0.15,
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      } 
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-surface-container-lowest font-sans bg-background text-on-surface">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism">
        <div className="container mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Daniel Cimring
            </span>
          </div>
          
          <div className="flex gap-10 items-center">
            {/* Desktop Links */}
            <div className="hidden sm:flex gap-10 items-center text-[10px] md:text-xs font-sans font-bold uppercase tracking-[0.2em]">
              <a href="#work" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#stack" className="hover:text-primary transition-colors">Expertise</a>
              <a href="#insights" className="hover:text-primary transition-colors">Journal</a>
              <a href="mailto:daniel@cimring.com" className="text-primary border-b border-accent/60 hover:border-accent pb-1 transition-all">Connect</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="sm:hidden p-2 text-on-surface/60 hover:text-primary transition-colors"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-0 w-full bg-background border-b border-primary/5 p-8 sm:hidden z-40"
            >
              <div className="flex flex-col gap-8 font-sans text-[10px] font-bold uppercase tracking-[0.3em]">
                <a href="#work" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Portfolio</span>
                  <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#stack" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Expertise</span>
                  <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#insights" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Journal</span>
                  <ChevronRight size={14} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a 
                  href="mailto:daniel@cimring.com" 
                  className="mt-4 w-full py-4 border border-primary/20 text-primary text-center hover:bg-primary/5 transition-all"
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
        <section className="min-h-screen flex items-center pt-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-lowest/50 -z-10" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-8">
                <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
                  <span className="font-sans text-[10px] md:text-xs font-bold py-3 px-6 bg-accent/10 text-accent rounded-sm uppercase tracking-[0.3em] border border-accent/20">
                    Engineer • Entrepreneur • Curator
                  </span>
                </motion.div>
                
                <div className="flex gap-8 items-start mb-10">
                  <div className="w-1 h-32 md:h-48 bg-accent hidden sm:block shrink-0 mt-2" />
                  <motion.h1 variants={itemVariants} className="text-6xl sm:text-8xl md:text-9xl font-serif font-medium leading-[0.9] tracking-tight">
                    Daniel <br />
                    <span className="italic text-primary/90">Cimring</span>
                  </motion.h1>
                </div>

                <motion.p variants={itemVariants} className="text-xl md:text-3xl text-on-surface/80 max-w-2xl mb-12 leading-tight font-serif italic">
                  Designing resilient systems at the intersection of <span className="text-on-surface border-b border-accent/40">finance</span>, 
                  <span className="text-on-surface border-b border-accent/40"> data architecture</span>, and 
                  <span className="text-on-surface border-b border-accent/40"> Bitcoin infrastructure</span>.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-8 items-center">
                  <a 
                    href="mailto:daniel@cimring.com" 
                    className="px-8 py-4 metallic-gradient text-surface-container-lowest font-sans font-bold text-xs uppercase tracking-[0.2em] rounded-sm hover:scale-[1.02] transition-transform animate-metallic shadow-[0_0_20px_rgba(255,237,0,0.1)]"
                  >
                    Start a Conversation
                  </a>
                  <div className="flex gap-6">
                    <a href="https://github.com/dcimring" target="_blank" className="text-on-surface/40 hover:text-primary transition-colors">
                      <Github size={22} />
                    </a>
                    <a href="https://www.linkedin.com/in/danielcimring/" target="_blank" className="text-on-surface/40 hover:text-primary transition-colors">
                      <Linkedin size={22} />
                    </a>
                  </div>
                </motion.div>
              </div>
              
              <div className="hidden lg:block lg:col-span-4 relative">
                <motion.div 
                  variants={itemVariants}
                  className="aspect-[4/5] bg-surface-container-high relative overflow-hidden rounded-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/10" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-[10px] font-sans font-bold text-accent uppercase tracking-[0.3em] mb-2">Current Focus</div>
                    <div className="text-sm font-serif italic text-on-surface/60">Bitcoin Infrastructure & Data Analysis</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 right-12 hidden md:block">
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-sans font-bold text-accent uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Scroll</span>
              <div className="w-px h-16 bg-gradient-to-b from-accent to-transparent" />
            </div>
          </div>
        </section>

        <EditorialQuote 
          quote="The most elegant systems are those that treat complexity as a ghost—felt in the outcome, but invisible in the interface."
          attribution="Philosophy of Architecture"
        />

        {/* Work Section */}
        <Section title="Portfolio" id="work">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ProjectCard 
              category="Entrepreneurship"
              title="Founder & CEO"
              description="Founded and scaled a mobile social network in Africa, optimizing for low-bandwidth environments and localized community engagement."
              tags={["Strategy", "Scaling", "Growth"]}
            />
            <ProjectCard 
              category="Enterprise"
              title="Insurance & Gaming"
              description="Core architecture and legacy modernization for high-stakes environments. Built high-availability systems for the insurance and gaming sectors."
              tags={["System Design", "Legacy", "Scale"]}
            />
            <ProjectCard 
              category="Hospitality"
              title="Resort Systems"
              description="Engineered system integrations and operational efficiencies for international hotel and resort groups through data-driven automation."
              tags={["Automation", "Data", "Enterprise"]}
            />
            <ProjectCard 
              category="Data Analysis"
              title="Bitcoin ETF Flows"
              description="Developed custom Python tools for tracking institutional Bitcoin adoption and market liquidity, bridging hard money and technical data."
              tags={["Python", "Pandas", "Bitcoin"]}
            />
            <ProjectCard 
              category="Bitcoin"
              title="Sound Money Research"
              description="Active contributor analyzing the intersection of technical infrastructure, finance, and the future of sound money."
              tags={["Research", "Writing", "Macro"]}
            />
            <ProjectCard 
              category="AI & Efficiency"
              title="AI-Driven Engineering"
              description="Leveraging LLMs and AI coding agents to accelerate service deployment and optimize operational costs."
              tags={["LLMs", "AI Agents", "Efficiency"]}
            />
          </div>
        </Section>

        {/* Stack Section */}
        <Section title="Expertise" id="stack" alternative>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            <SkillBadge name="Python" icon={Terminal} />
            <SkillBadge name="React / TS" icon={Code2} />
            <SkillBadge name="Bitcoin" icon={Bitcoin} />
            <SkillBadge name="Data Analysis" icon={BarChart3} />
            <SkillBadge name="Architecture" icon={Cpu} />
            <SkillBadge name="PostgreSQL" icon={Database} />
            <SkillBadge name="Vite" icon={Globe} />
            <SkillBadge name="System Design" icon={Cpu} />
            <SkillBadge name="Finance" icon={BarChart3} />
            <SkillBadge name="Node.js" icon={Terminal} />
            <SkillBadge name="Tailwind" icon={Code2} />
            <SkillBadge name="Cloud Run" icon={Globe} />
          </div>
        </Section>

        {/* Insights Section */}
        <Section title="Journal" id="insights">
          <div className="max-w-4xl">
            <p className="text-on-surface/60 mb-16 font-serif italic text-xl leading-relaxed max-w-2xl">
              Exploring the intersection of technology, sound money, and market behavior.
            </p>
            <div className="space-y-12">
              {[
                { title: "Bitcoin Price Exploration: Why Most People Shouldn't Trade It", link: "https://medium.com/@danielcimring" },
                { title: "Dollar Cost Averaging — Does It Really Work? Bitcoin Case Study", link: "https://medium.com/@danielcimring" },
                { title: "A strategy for trading ETH to make more BTC", link: "https://medium.com/@danielcimring" },
                { title: "Downloading historical data from Coinmarketcap using Python", link: "https://medium.com/@danielcimring" }
              ].map((article, i) => (
                <motion.a 
                  key={i}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group transition-all"
                  whileHover={{ x: 20 }}
                >
                  <div className="flex items-center gap-10">
                    <span className="text-[10px] font-sans font-bold text-accent uppercase tracking-[0.3em]">0{i + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-serif group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                  </div>
                  <ChevronRight size={24} className="text-primary/20 group-hover:text-primary transition-all hidden md:block" />
                </motion.a>
              ))}
            </div>
            <div className="mt-20">
              <a 
                href="https://medium.com/@danielcimring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 text-[10px] font-sans font-bold text-primary hover:text-primary/80 uppercase tracking-[0.3em] transition-colors"
              >
                Explore Archive <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-24 bg-surface-container-lowest border-t border-primary/5">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-on-surface/40">Daniel Cimring // MMXXVI</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-on-surface/40">
              <a href="https://github.com/dcimring" target="_blank" className="hover:text-primary transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/danielcimring/" target="_blank" className="hover:text-primary transition-colors">Linkedin</a>
              <a href="https://medium.com/@danielcimring" target="_blank" className="hover:text-primary transition-colors">Medium</a>
              <a href="mailto:daniel@cimring.com" className="hover:text-primary transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
