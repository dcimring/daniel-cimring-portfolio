import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Terminal, 
  Cpu, 
  BarChart3, 
  Bitcoin,
  ChevronRight,
  Code2,
  Database,
  Globe,
  TrendingUp,
  Menu,
  X,
  type LucideIcon
} from "lucide-react";
import { cn } from "./lib/utils";

const BitcoinPrice = () => {
  const [price, setPrice] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const response = await fetch("https://api.coinbase.com/v2/prices/spot?currency=USD");
        const data = await response.json();
        setPrice(parseFloat(data.data.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
      } catch (error) {
        console.error("Error fetching BTC price:", error);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-2 px-3 py-1 border border-accent/20 bg-accent/5 rounded-sm">
      <TrendingUp size={12} className="text-accent animate-pulse" />
      <span className="text-[10px] font-mono text-accent uppercase tracking-tighter">
        BTC/USD: {price ? `$${price}` : "LOADING..."}
      </span>
    </div>
  );
};

const Section = ({ children, className, title, id }: { children: React.ReactNode; className?: string; title: string; id: string }) => (
  <section id={id} className={cn("py-16 md:py-24 border-b border-border relative overflow-hidden", className)}>
    <div className="container mx-auto px-6">
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <div className="h-[1px] w-8 md:w-12 bg-accent" />
        <h2 className="text-[10px] md:text-sm font-mono tracking-widest uppercase text-accent">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

const ProjectCard = ({ title, description, tags, category }: { title: string; description: string; tags: string[]; category: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group p-8 border border-border bg-background/50 backdrop-blur-sm relative transition-all hover:border-accent/50"
  >
    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
      <ExternalLink size={18} className="text-accent" />
    </div>
    <span className="text-[10px] font-mono text-muted mb-4 block uppercase tracking-tighter">{category}</span>
    <h3 className="text-xl font-mono mb-3 group-hover:text-accent transition-colors uppercase">{title}</h3>
    <p className="text-muted text-sm mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-[10px] font-mono py-1 px-2 border border-border bg-muted/5 text-muted uppercase tracking-tighter">
          {tag}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillBadge = ({ name, icon: Icon }: { name: string; icon: LucideIcon }) => (
  <div className="flex items-center gap-3 p-4 border border-border bg-background/30 backdrop-blur-sm group hover:border-accent/30 transition-all">
    <Icon size={18} className="text-muted group-hover:text-accent transition-colors" />
    <span className="text-sm font-mono uppercase tracking-tight">{name}</span>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen selection:bg-accent selection:text-background font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-2 h-2 rounded-full bg-terminal animate-pulse shadow-[0_0_8px_var(--color-terminal)]" />
            <span className="font-mono text-[10px] md:text-xs tracking-tighter uppercase hidden sm:block">
              SYSTEM STATUS: ONLINE // DANIEL_CIMRING_v2.0
            </span>
            <span className="font-mono text-[10px] md:text-xs tracking-tighter uppercase sm:hidden">
              DC_V2.0
            </span>
          </div>
          
          <div className="flex gap-4 md:gap-8 items-center">
            <BitcoinPrice />
            
            {/* Desktop Links */}
            <div className="hidden sm:flex gap-4 md:gap-8 items-center text-[10px] md:text-xs font-mono uppercase tracking-widest">
              <a href="#work" className="hover:text-accent transition-colors">Work</a>
              <a href="#stack" className="hover:text-accent transition-colors">Stack</a>
              <a href="#insights" className="hover:text-accent transition-colors">Insights</a>
              <a href="mailto:daniel@cimring.com" className="px-3 py-1.5 md:px-4 md:py-2 border border-accent text-accent hover:bg-accent hover:text-background transition-all">Contact</a>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="sm:hidden p-2 text-muted hover:text-accent transition-colors"
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
              className="absolute top-16 left-0 w-full bg-background border-b border-border p-6 sm:hidden z-40"
            >
              <div className="flex flex-col gap-6 font-mono text-sm uppercase tracking-widest">
                <a href="#work" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Work</span>
                  <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#stack" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Stack</span>
                  <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#insights" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Insights</span>
                  <ChevronRight size={14} className="text-accent opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a 
                  href="mailto:daniel@cimring.com" 
                  className="mt-2 w-full py-3 border border-accent text-accent text-center hover:bg-accent hover:text-background transition-all"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center pt-16 relative overflow-hidden border-b border-border">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none overflow-hidden">
            <div className="grid grid-cols-6 md:grid-cols-12 gap-2 md:gap-4 h-full w-full">
              {Array.from({ length: 72 }).map((_, i) => (
                <div key={i} className="border border-white/10 aspect-square" />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="max-w-4xl"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                <span className="font-mono text-[10px] md:text-xs py-1 px-3 bg-accent/10 text-accent border border-accent/20 rounded-full uppercase tracking-widest">
                  Software Engineer & Entrepreneur • BSc, MBA
                </span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl sm:text-7xl md:text-8xl font-mono font-bold leading-tight mb-6 md:mb-8 tracking-tighter uppercase">
                DANIEL <br />
                <span className="text-accent italic">CIMRING</span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-lg md:text-2xl text-muted max-w-2xl mb-8 md:mb-12 leading-relaxed">
                Building digital systems at the intersection of <span className="text-foreground border-b border-accent/30">finance</span>, 
                <span className="text-foreground border-b border-accent/30"> data architecture</span>, and 
                <span className="text-foreground border-b border-accent/30"> Bitcoin infrastructure</span>.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-6 items-center">
                <div className="flex gap-4">
                  <a href="https://github.com/dcimring" target="_blank" className="p-3 border border-border hover:border-accent hover:text-accent transition-all group">
                    <Github size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/danielcimring/" target="_blank" className="p-3 border border-border hover:border-accent hover:text-accent transition-all group">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:daniel@cimring.com" className="p-3 border border-border hover:border-accent hover:text-accent transition-all group">
                    <Mail size={20} />
                  </a>
                </div>
                <div className="h-px w-12 bg-border hidden sm:block" />
                <div className="flex items-center gap-3 text-xs font-mono text-muted uppercase tracking-widest">
                  <Bitcoin size={16} className="text-accent" />
                  <span>Sound Money Maximalist</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
          </div>
        </section>

        {/* Work Section */}
        <Section title="Proof of Work" id="work">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              description="Active contributor on Medium, analyzing the intersection of technical infrastructure, finance, and the future of sound money."
              tags={["Research", "Writing", "Macro"]}
            />
            <ProjectCard 
              category="AI & Efficiency"
              title="AI-Driven Engineering"
              description="Leveraging LLMs and AI coding agents to accelerate service deployment and optimize operational costs. High-speed prototyping with enterprise stability."
              tags={["LLMs", "AI Agents", "Efficiency"]}
            />
          </div>
        </Section>

        {/* Stack Section */}
        <Section title="The Stack" id="stack" className="bg-muted/5">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
        <Section title="Insights" id="insights">
          <div className="max-w-4xl">
            <p className="text-muted mb-12 font-mono text-sm leading-relaxed uppercase tracking-tighter max-w-2xl">
              I frequently write about the intersection of technology, sound money, and market behavior on Medium and Twitter.
            </p>
            <div className="space-y-6">
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
                  className="flex items-center justify-between p-6 border border-border hover:bg-muted/5 group transition-all"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-mono text-muted">0{i + 1}</span>
                    <h3 className="text-lg font-mono group-hover:text-accent transition-colors uppercase">{article.title}</h3>
                  </div>
                  <ChevronRight size={18} className="text-muted group-hover:text-accent transition-all" />
                </motion.a>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a 
                href="https://medium.com/@danielcimring" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:underline uppercase tracking-widest"
              >
                View all articles on Medium <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 border-t border-border bg-background">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-mono uppercase tracking-widest">Daniel Cimring // 2026</span>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4 text-[10px] font-mono uppercase tracking-widest text-muted">
              <a href="https://github.com/dcimring" target="_blank" className="hover:text-accent">Github</a>
              <a href="https://www.linkedin.com/in/danielcimring/" target="_blank" className="hover:text-accent">Linkedin</a>
              <a href="https://medium.com/@danielcimring" target="_blank" className="hover:text-accent">Medium</a>
              <a href="mailto:daniel@cimring.com" className="hover:text-accent">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
