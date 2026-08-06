import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { email, socials } from "../../data/site";
import { containerVariants, itemVariants } from "../motion";

const Hero = () => (
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

          {/* Spacer matching the four <br/> elements this replaced (4 x 24px line-height) */}
          <div className="h-24" aria-hidden="true" />

          <motion.div variants={itemVariants} className="flex flex-wrap gap-10 items-center">
            <a
              href={`mailto:${email}`}
              className="px-10 py-5 bg-primary text-on-primary font-display font-black text-base uppercase tracking-tighter hover:bg-white transition-colors"
            >
              Start a Conversation
            </a>
            <div className="flex gap-8">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-on-surface hover:text-primary transition-colors">
                <Github size={28} />
              </a>
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-on-surface hover:text-primary transition-colors">
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
);

export default Hero;
