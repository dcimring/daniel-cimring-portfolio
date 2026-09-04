import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { email, hero, socials } from "../../data/site";
import CtaLink from "../CtaLink";
import {
  curtainVariants,
  heroContainerVariants,
  itemVariants,
  lineRevealVariants,
} from "../motion";

/**
 * Mount-animated (not scroll-triggered) so the hero is never invisible in a
 * background tab or a prerender. Parallax MotionValues live on outer wrappers
 * and entrance variants on inner ones — a single element can't have both.
 * The portrait is never faded: it's painted at full opacity under a curtain,
 * so it still counts as the LCP element.
 */
const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const portraitY = useTransform(scrollY, [0, 700], [0, 90]);
  const nameY = useTransform(scrollY, [0, 700], [0, -40]);
  const cueOpacity = useTransform(scrollY, [0, 240], [1, 0]);
  const year = new Date().getFullYear();

  return (
    <section className="min-h-screen flex items-center pt-32 lg:pt-28 pb-12 md:pb-20 relative overflow-hidden bg-background">
      <div className="shell w-full relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 items-center"
        >
          <div className="min-w-0 relative z-20 lg:col-start-1 lg:col-end-9 lg:row-start-1">
            <motion.div variants={itemVariants} className="mb-8 md:mb-10">
              <div className="inline-block bg-primary px-6 py-3">
                <span className="font-display text-sm font-black text-on-primary uppercase tracking-[0.2em]">
                  {hero.eyebrow}
                </span>
              </div>
            </motion.div>

            <motion.div
              style={{ y: nameY }}
              className="flex gap-6 md:gap-10 items-start mb-8 md:mb-10 will-change-transform"
            >
              <div className="w-2 self-stretch bg-primary shrink-0 mt-1" />
              <h1 className="text-[clamp(3.5rem,min(12vw,15vh),8.5rem)] font-display font-black leading-[0.85] tracking-tighter uppercase whitespace-nowrap">
                <span className="block overflow-hidden py-[0.08em] -my-[0.08em]">
                  <motion.span variants={lineRevealVariants} className="block">
                    Daniel
                  </motion.span>
                </span>
                <span className="block overflow-hidden py-[0.08em] -my-[0.08em] stroke">
                  <motion.span variants={lineRevealVariants} className="block">
                    Cimring
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="max-w-xl text-lg md:text-xl leading-relaxed text-on-surface/70 mb-10 md:mb-12"
            >
              {hero.tagline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-10 items-center"
            >
              <CtaLink href={`mailto:${email}`}>{hero.cta}</CtaLink>
              <div className="flex gap-8">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  <Github size={28} />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-on-surface hover:text-primary transition-colors"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Portrait: first on mobile (85% wide, pushed right), columns 7–12 on desktop, bleeding to the viewport edge. */}
          <motion.div
            style={{ y: portraitY }}
            className="order-first lg:order-none relative z-10 w-[85%] ml-auto mb-14 lg:mb-0 lg:w-auto lg:ml-0 lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:self-center mr-bleed will-change-transform"
          >
            <div className="relative aspect-[3/4] lg:aspect-auto lg:h-[calc(100vh-13rem)] lg:min-h-[28rem] lg:max-h-[52rem] bg-surface-container-high overflow-hidden">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/daniel-480.webp 480w, /daniel-960.webp 960w"
                  sizes="(min-width: 1024px) 50vw, 85vw"
                />
                <img
                  src="/daniel-960.jpg"
                  alt="Daniel Cimring"
                  width={854}
                  height={960}
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale contrast-150 brightness-80"
                />
              </picture>
              <div className="absolute inset-0 border-[12px] lg:border-[20px] border-primary/20 pointer-events-none" />
              <motion.div
                aria-hidden="true"
                variants={curtainVariants}
                className="absolute inset-0 bg-background origin-right pointer-events-none"
              />
            </div>
            <motion.div
              variants={itemVariants}
              className="absolute -bottom-5 -left-5 lg:-bottom-8 lg:-left-10 z-20 bg-primary p-5 lg:p-8"
            >
              <div className="text-[10px] lg:text-xs font-display font-black text-on-primary uppercase tracking-[0.3em] mb-1 lg:mb-2">
                {hero.focus.label} {year}
              </div>
              <div className="text-base lg:text-xl font-display font-black text-on-primary uppercase tracking-tighter leading-none">
                {hero.focus.value}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: cueOpacity }}
        aria-hidden="true"
        className="absolute bottom-12 right-12 z-30 hidden md:flex flex-col items-center gap-6"
      >
        <span className="text-[10px] font-display font-black text-primary uppercase tracking-[0.5em] [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="relative w-0.5 h-24 bg-on-surface/15 overflow-hidden">
          {reduceMotion ? (
            <div className="absolute inset-x-0 top-0 h-1/2 bg-primary" />
          ) : (
            <motion.div
              className="absolute inset-x-0 top-0 h-1/2 bg-primary"
              animate={{ y: ["-100%", "200%"] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
