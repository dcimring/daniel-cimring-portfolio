import { motion } from "framer-motion";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";
import { cardIndex } from "../lib/utils";
import { projectPages, projectPath } from "../lib/projects";
import type { Project } from "../types";
import CtaLink from "./CtaLink";
import {
  heroContainerVariants,
  itemVariants,
  lineRevealVariants,
} from "./motion";
import Footer from "./sections/Footer";
import Nav from "./sections/Nav";

const ProjectPage = ({ project }: { project: Project }) => {
  const position = projectPages.indexOf(project);
  const next = projectPages[(position + 1) % projectPages.length];

  return (
    <div
      id="top"
      className="min-h-screen selection:bg-primary selection:text-background font-sans bg-background text-on-surface overflow-x-hidden"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 bg-primary text-background px-6 py-3 font-display font-black uppercase tracking-widest text-xs"
      >
        Skip to content
      </a>
      <Nav base="/" />
      <main id="main" tabIndex={-1} className="outline-none">
        <motion.article
          initial="hidden"
          animate="visible"
          variants={heroContainerVariants}
          className="shell pt-40 md:pt-48 pb-24 md:pb-32"
        >
          <motion.div variants={itemVariants}>
            <a
              href="/#projects"
              className="inline-flex items-center gap-3 mb-16 text-xs font-display font-black uppercase tracking-widest text-on-surface/60 hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              All projects
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <div className="inline-block bg-primary px-6 py-3">
              <span className="font-display text-sm font-black text-on-primary uppercase tracking-[0.2em]">
                Project {cardIndex(projects.indexOf(project))}
              </span>
            </div>
          </motion.div>

          <div className="flex gap-6 md:gap-10 items-start mb-12 md:mb-16">
            <div className="w-2 self-stretch bg-primary shrink-0 mt-1" />
            <h1 className="min-w-0 text-[clamp(1.75rem,8.5vw,7.5rem)] font-display font-black leading-[0.9] tracking-tighter uppercase wrap-break-word overflow-hidden py-[0.08em] -my-[0.08em]">
              <motion.span variants={lineRevealVariants} className="block">
                {project.title}
              </motion.span>
            </h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-lg md:text-xl leading-relaxed text-on-surface/70 mb-10 md:mb-12"
          >
            {project.description}
          </motion.p>

          {project.details?.map((paragraph) => (
            <motion.p
              key={paragraph}
              variants={itemVariants}
              className="max-w-2xl text-base md:text-lg leading-relaxed text-on-surface/70 mb-6"
            >
              {paragraph}
            </motion.p>
          ))}

          <motion.p
            variants={itemVariants}
            className="text-[11px] font-display font-black uppercase tracking-widest text-on-surface/60 mt-10 md:mt-12 mb-12"
          >
            {project.tags.join(" / ")}
          </motion.p>

          {project.href && (
            <motion.div variants={itemVariants}>
              <CtaLink href={project.href} external>
                Visit site
              </CtaLink>
            </motion.div>
          )}
        </motion.article>

        <a
          href={projectPath(next)}
          className="group block bg-surface-container-low"
        >
          <div className="shell py-16 md:py-24 flex items-center justify-between gap-8">
            <div className="min-w-0">
              <div className="text-xs font-display font-black uppercase tracking-widest text-primary mb-4">
                Next project
              </div>
              <div className="text-3xl md:text-5xl font-display font-black uppercase tracking-tighter leading-none group-hover:text-primary transition-colors">
                {next.title}
              </div>
            </div>
            <ChevronRight
              size={40}
              className="shrink-0 text-primary transition-transform duration-500 group-hover:translate-x-2"
            />
          </div>
        </a>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
