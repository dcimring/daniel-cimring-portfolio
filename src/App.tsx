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
  <section id={id} className={cn("py-24 md:py-32 relative overflow-hidden", alternative ? "bg-surface-container-low" : "bg-background", className)}>
    <div className="container mx-auto px-6">
      <div className="inline-block bg-primary px-4 py-2 mb-12">
        <h2 className="text-xs font-display font-black tracking-tighter uppercase text-on-primary">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, description, tags, category }: { title: string; description: string; tags: string[]; category: string }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="group bg-surface-container relative transition-all"
  >
    <div className="p-10">
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] font-display font-bold text-primary uppercase tracking-widest">{category}</span>
        <ExternalLink size={18} className="text-primary opacity-40 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-2xl font-display font-black mb-4 uppercase tracking-tighter leading-none">{title}</h3>
      <p className="text-on-surface/60 text-base mb-8 leading-relaxed font-sans">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-display py-1 px-3 border border-outline-variant bg-transparent text-on-surface/40 uppercase font-bold">
            {tag}
          </span>
        ))}
      </div>
    </div>
    <div className="h-1 w-0 bg-primary group-hover:w-full transition-all duration-300" />
  </motion.div>
);

const SkillBadge = ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
  <div className="flex items-center gap-4 p-6 bg-surface-container-high group hover:bg-primary transition-all">
    <Icon size={20} className="text-primary group-hover:text-on-primary transition-colors" />
    <span className="text-xs font-display font-black uppercase tracking-widest text-on-surface group-hover:text-on-primary">{name}</span>
  </div>
);

const ImpactBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full bg-primary py-20 px-6 my-12">
    <div className="container mx-auto">
      <h3 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter text-on-primary leading-none text-center md:text-left">
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
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-primary" />
            <span className="font-display text-lg font-black tracking-tighter uppercase">
              Daniel Cimring
            </span>
          </div>
          
          <div className="flex gap-10 items-center">
            {/* Desktop Links */}
            <div className="hidden sm:flex gap-10 items-center text-[10px] md:text-xs font-display font-black uppercase tracking-widest">
              <a href="#work" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#stack" className="hover:text-primary transition-colors">Expertise</a>
              <a href="#insights" className="hover:text-primary transition-colors">Journal</a>
              <a href="mailto:daniel@cimring.com" className="bg-primary text-on-primary px-6 py-3 hover:bg-white transition-colors">Connect</a>
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

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute top-24 left-0 w-full bg-surface-container-low border-b border-outline-variant/10 p-10 sm:hidden z-40"
            >
              <div className="flex flex-col gap-10 font-display text-lg font-black uppercase tracking-tighter">
                <a href="#work" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Portfolio</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#stack" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Expertise</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#insights" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Journal</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a 
                  href="mailto:daniel@cimring.com" 
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
        <section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden bg-background">
          <div className="container mx-auto px-8 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="grid lg:grid-cols-12 gap-0 items-stretch"
            >
              <div className="lg:col-span-8 flex flex-col justify-center">
                <motion.div variants={itemVariants} className="mb-10">
                  <div className="inline-block bg-primary px-6 py-3">
                    <span className="font-display text-sm font-black text-on-primary uppercase tracking-[0.2em]">
                      Engineer • Entrepreneur • Curator
                    </span>
                  </div>
                </motion.div>

                {/* Option 1: Mobile Asymmetric Editorial Inset */}
                <motion.div 
                  variants={itemVariants}
                  className="block lg:hidden w-[85%] ml-auto mb-12 relative"
                >
                  <div className="aspect-square bg-surface-container-high relative overflow-hidden">
                    <img 
                      src="/daniel.jpg" 
                      alt="Daniel Cimring"
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-75"
                    />
                    <div className="absolute inset-0 border-[10px] border-primary/20 pointer-events-none" />
                    <div className="absolute bottom-0 right-0 bg-primary p-4">
                      <div className="text-[8px] font-display font-black text-on-primary uppercase tracking-[0.2em] mb-1">Focus 2026</div>
                      <div className="text-sm font-display font-black text-on-primary uppercase tracking-tighter">Bitcoin Infra</div>
                    </div>
                  </div>
                </motion.div>
                
                <div className="flex gap-10 items-start mb-12">
                  <div className="w-2 h-48 md:h-64 bg-primary shrink-0 mt-2" />
                  <motion.h1 variants={itemVariants} className="text-5xl sm:text-8xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter uppercase">
                    Daniel <br />
                    <span className="text-on-surface opacity-20">Cimring</span>
                  </motion.h1>
                </div>

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface max-w-2xl mb-16 leading-relaxed font-display font-medium uppercase tracking-tight">
                  Designing resilient systems at the intersection of <span className="text-on-surface opacity-30">finance</span>, <span className="text-on-surface opacity-30">data architecture</span>, and <span className="text-on-surface opacity-30">Bitcoin infrastructure</span>.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-10 items-center">
                  <a 
                    href="mailto:daniel@cimring.com" 
                    className="px-10 py-5 bg-primary text-on-primary font-display font-black text-base uppercase tracking-tighter hover:bg-white transition-colors"
                  >
                    Start a Conversation
                  </a>
                  <div className="flex gap-8">
                    <a href="https://github.com/dcimring" target="_blank" className="text-on-surface hover:text-primary transition-colors">
                      <Github size={28} />
                    </a>
                    <a href="https://www.linkedin.com/in/danielcimring/" target="_blank" className="text-on-surface hover:text-primary transition-colors">
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
                    className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-75"
                  />
                  <div className="absolute inset-0 border-[20px] border-primary/20 pointer-events-none" />
                  <div className="absolute bottom-0 right-0 bg-primary p-8">
                    <div className="text-xs font-display font-black text-on-primary uppercase tracking-[0.3em] mb-2">Focus 2026</div>
                    <div className="text-xl font-display font-black text-on-primary uppercase tracking-tighter">Bitcoin Infra</div>
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
          "The most elegant systems are those that treat complexity as a ghost—felt in the outcome, but invisible in the interface."
        </ImpactBlock>

        {/* Work Section */}
        <Section title="Portfolio" id="work">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
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
          <div className="max-w-5xl">
            <p className="text-on-surface/60 mb-20 font-display font-medium uppercase text-lg md:text-xl leading-relaxed max-w-2xl tracking-tight">
              Exploring the intersection of technology, sound money, and market behavior.
            </p>
            <div className="space-y-0">
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
                  className="flex items-center justify-between group transition-all p-8 hover:bg-surface-container border-b border-outline-variant/10"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-xs font-display font-black text-primary tracking-widest">0{i + 1}</span>
                    <h3 className="text-xl md:text-2xl font-display font-black group-hover:text-primary transition-colors leading-tight uppercase tracking-tighter">{article.title}</h3>
                  </div>
                  <ChevronRight size={24} className="text-primary opacity-0 group-hover:opacity-100 transition-all hidden md:block" />
                </motion.a>
              ))}
            </div>
            <div className="mt-20">
              <a 
                href="https://medium.com/@danielcimring" 
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
        </Section>

        {/* Footer */}
        <footer className="py-24 bg-surface-container-low border-t border-outline-variant/10">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
            <div className="flex items-center gap-4">
              <div className="w-2 h-8 bg-primary" />
              <span className="text-xs font-display font-black uppercase tracking-[0.4em] text-on-surface/40">Daniel Cimring // 2026</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 text-[10px] font-display font-black uppercase tracking-[0.3em] text-on-surface/40">
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
