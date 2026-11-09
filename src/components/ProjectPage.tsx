import { projects } from "../data/projects";
import { projectPages, projectPath, projectSlug } from "../lib/projects";
import { entryIndex, toCommandCase } from "../lib/utils";
import type { Project } from "../types";
import CtaLink from "./CtaLink";
import PageShell from "./PageShell";

const ProjectPage = ({ project }: { project: Project }) => {
  const position = projectPages.indexOf(project);
  const next = projectPages[(position + 1) % projectPages.length];
  const slug = projectSlug(project);

  return (
    <PageShell navBase="/">
      <article className="pt-6 pb-12 md:pt-14 md:pb-20">
        <a href="/#projects" className="inline-block py-3 text-muted">
          ← cd ../projects
        </a>
        <p className="mt-8 mb-3 text-muted">
          $ cat projects/{slug}/README.md{" "}
          <span className="text-ink">
            | {entryIndex(projects.indexOf(project))}
          </span>
        </p>
        <h1 className="mb-8 text-[clamp(2rem,8vw,5rem)] leading-[1.02] font-extrabold tracking-[-0.05em] wrap-anywhere text-bright">
          {slug}
        </h1>
        <p className="mb-6 max-w-170 text-base leading-[1.6] md:text-lg">
          {project.description}
        </p>
        {project.details?.map((paragraph) => (
          <p key={paragraph} className="mb-5 max-w-170">
            {paragraph}
          </p>
        ))}
        <p className="mt-8 mb-8 text-xs text-muted md:text-[13px]">
          {project.tags.map(toCommandCase).join(" ")}
        </p>
        {project.href ? (
          <CtaLink href={project.href} external>
            visit site ↗
          </CtaLink>
        ) : (
          <p className="text-warn">status: local, not public yet</p>
        )}
      </article>

      <section aria-label="Next project" className="pb-12 md:pb-20">
        <p className="mb-2 text-muted">$ cd ../next</p>
        <a
          href={projectPath(next)}
          className="inline-block py-2 text-[22px] leading-[1.2] font-bold tracking-[-0.03em] wrap-anywhere"
        >
          {projectSlug(next)} →
        </a>
      </section>
    </PageShell>
  );
};

export default ProjectPage;
