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
    <div className={cn(
      "p-10 h-full flex flex-col border-l-4 transition-all duration-500 ease-in-out group",
      isLight 
        ? "bg-primary border-primary text-background" 
        : "bg-surface-container border-primary text-on-surface hover:bg-primary hover:text-background"
    )}>
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
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
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
  <div className="flex items-center gap-4 p-6 bg-surface-container-high group hover:bg-primary transition-all">
    <Icon size={20} className="text-primary group-hover:text-on-primary transition-colors" />
    <span className="text-xs font-display font-black uppercase tracking-widest text-on-surface group-hover:text-on-primary">{name}</span>
  </div>
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
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-primary" />
            <span className="font-display text-lg font-black tracking-tighter uppercase">
              Daniel Cimring
            </span>
          </div>
          
          <div className="flex gap-10 items-center">
            {/* Desktop Links */}
            <div className="hidden sm:flex gap-10 items-center text-[10px] md:text-xs font-display font-black uppercase tracking-widest">
              <a href="#work" className="hover:text-primary transition-colors">Experience</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#stack" className="hover:text-primary transition-colors">Technologies</a>
              <a href="#insights" className="hover:text-primary transition-colors">Journal</a>
              <a href="mailto:dcimring@gmail.com" className="bg-primary text-on-primary px-6 py-3 hover:bg-white transition-colors">Connect</a>
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
                  <span>Experience</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#projects" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Projects</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#stack" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Technologies</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href="#insights" onClick={toggleMenu} className="flex items-center justify-between group">
                  <span>Journal</span>
                  <ChevronRight size={20} className="text-primary opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a 
                  href="mailto:dcimring@gmail.com" 
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
              animate="visible"
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
                      className="absolute inset-0 w-full h-full object-cover grayscale contrast-150 brightness-75"
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
                    <span className="text-on-surface opacity-20">Cimring</span>
                  </motion.h1>
                </div>

                <motion.p variants={itemVariants} className="text-lg md:text-xl text-on-surface/50 max-w-2xl mb-12 md:mb-16 leading-relaxed font-display font-medium uppercase tracking-tight">
                  "What a time to be alive—let's <span className="text-primary opacity-100">build something interesting</span> together."
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap gap-10 items-center">
                  <a 
                    href="mailto:dcimring@gmail.com" 
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
              <h2 className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase text-on-surface">
                Professional <br />
                Experience
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 border-t border-outline-variant/10">
              <ArchiveCard 
                index="01"
                title="AI-Driven Engineering"
                description="Leveraging LLMs, AI coding agents, and automation to develop new products and services."
                tags={["AI Agents", "Efficiency", "Automation"]}
                variant="light"
              />
              <ArchiveCard 
                index="02"
                title="Founder & CEO"
                description="Founded and scaled a mobile social network in South Africa, optimizing for low-bandwidth environments, constrained handsets, and localized community engagement."
                tags={["Entrepreneurship", "Strategy", "Growth"]}
              />
              <ArchiveCard 
                index="03"
                title="Online Gaming"
                description="Product management and new product development for a world leading online gaming company."
                tags={["Product", "Usability", "Financial Analysis"]}
              />
              <ArchiveCard 
                index="04"
                title="Hotels & Resorts"
                description="Built a system for rewarding high value clients and tracking spend, involved with new product development and quantitative services."
                tags={["Product", "Quantitative Analysis", "Data"]}
              />
              <ArchiveCard 
                index="05"
                title="Bitcoin Evangalist"
                description="Was an early Bitcoin evangalist among friends and family. Developed custom Python tools for tracking, analysis and backtesting."
                tags={["Data Analysis", "Python", "Bitcoin"]}
              />
              <ArchiveCard 
                index="06"
                title="Consulting"
                description="Consultant to the board of directors during the build and deployment of a large casino resort project, and to a private company doing new product development."
                tags={["Consulting", "Project Management"]}
              />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
              <h2 className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase">
                What I'm <br />
                Working On
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 border-t border-outline-variant/10">
              <ArchiveCard 
                index="01"
                title="Idea Validator"
                description="Platform to manage and validate startup ideas via personalized feedback links and industry insights."
                href="https://ideas.danielcimring.com"
                tags={["React", "Feedback", "SaaS"]}
                variant="light"
              />
              <ArchiveCard 
                index="02"
                title="Closing Agent"
                description="Unified real estate closing dashboard synchronizing all parties through automated workflows, transparent document management, and real-time deadline tracking"
                tags={["AI", "Python", "Data"]}
                href="https://closing-agent.vercel.app"
              />
              <ArchiveCard 
                index="03"
                title="Playlist Summariser"
                description="AI-powered tool that summarizes YouTube playlists, helping users digest high-value content efficiently."
                tags={["AI", "YouTube API", "NLP"]}
              />
              <ArchiveCard 
                index="04"
                title="Corporate League"
                description="WordPress plugin for Pickleball Cayman. Automates leaderboards and status reports from Excel data."
                href="https://www.corpleague.xyz/matches"
                tags={["WP", "Automation", "Discord"]}
              />
              <ArchiveCard 
                index="05"
                title="DinkDash"
                description="Community site for tracking pickleball rankings and player statistics. A hub for the local scene."
                href="https://dinkdash.xyz"
                tags={["React", "Stats", "Pickleball"]}
              />
              <ArchiveCard 
                index="06"
                title="Finance AI"
                description="Local-first AI dashboard for bank statements. Instant insights into spending patterns with zero setup."
                tags={["AI", "Privacy", "Finance"]}
              />
              <ArchiveCard 
                index="07"
                title="TickerTracker"
                description="Watchlist tracker for stocks and crypto with AI-powered ticker insertion and Discord buy-level alerts."
                href="https://tickertracker-ai-365775520621.us-west1.run.app"
                tags={["AI", "Discord", "Crypto"]}
              />
              <ArchiveCard 
                index="08"
                title="TweetTracker"
                description="Tracks public Twitter handles to detect buy/sell signals and build performance track records over time."
                tags={["AI", "Twitter", "Trading"]}
              />
              <ArchiveCard 
                index="09"
                title="Cayman Property AI"
                description="AI-assisted search for Cayman real estate. Creates dashboards from property data with future plans for ROI estimation."
                tags={["AI", "Python", "Data"]}
              />
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section id="stack" className="py-24 md:py-32 bg-background relative overflow-hidden border-t border-outline-variant/10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase mb-16 md:mb-24">
              Core <br />
              Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0">
              <SkillBadge name="Python" icon={Terminal} />
              <SkillBadge name="React / TS" icon={Code2} />
              <SkillBadge name="Bitcoin" icon={Bitcoin} />
              <SkillBadge name="Data Analysis" icon={BarChart3} />
              <SkillBadge name="Architecture" icon={Cpu} />
              <SkillBadge name="AI Coding" icon={Terminal} />
              <SkillBadge name="Supabase" icon={Database} />
              <SkillBadge name="Vite" icon={Globe} />
              <SkillBadge name="System Design" icon={Cpu} />
              <SkillBadge name="Finance" icon={BarChart3} />
              <SkillBadge name="Node.js" icon={Terminal} />
              <SkillBadge name="Tailwind" icon={Code2} />
              <SkillBadge name="Cloud Run" icon={Globe} />
              <SkillBadge name="Google Apps Script" icon={Code2} />
              <SkillBadge name="Vercel" icon={Globe} />
              <SkillBadge name="Convex" icon={Database} />
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section id="insights" className="py-24 md:py-32 bg-surface-container-low relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-[11.5vw] sm:text-7xl md:text-9xl font-display font-black tracking-tighter md:tracking-[calc(-0.05em)] leading-[0.85] uppercase mb-16 md:mb-24">
              Personal <br />
              Journal
            </h2>
            <div className="max-w-5xl">
              <p className="text-on-surface/60 mb-20 font-display font-medium uppercase text-lg md:text-xl leading-relaxed max-w-2xl tracking-tight">
                Some early articles I wrote mostly on Bitcoin.
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
              <a href="https://github.com/dcimring" target="_blank" className="hover:text-primary transition-colors">Github</a>
              <a href="https://www.linkedin.com/in/danielcimring/" target="_blank" className="hover:text-primary transition-colors">Linkedin</a>
              <a href="https://medium.com/@danielcimring" target="_blank" className="hover:text-primary transition-colors">Medium</a>
              <a href="mailto:dcimring@gmail.com" className="hover:text-primary transition-colors">Email</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
