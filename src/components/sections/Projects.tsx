import { projects } from "../../data/projects";
import { projectPath, projectSlug } from "../../lib/projects";
import { entryIndex, toCommandCase } from "../../lib/utils";

const externalLink = { target: "_blank", rel: "noopener noreferrer" };

/** One row per project: stacked on phones, a four-column listing from `md`. */
const Projects = () => (
  <section id="projects" className="pb-12 md:pb-20">
    <h2 className="text-muted">
      $ ls -l projects/{" "}
      <span className="text-ink">| total {projects.length}</span>
    </h2>
    <div className="mt-3 border-t border-rule">
      {projects.map((project, i) => {
        const hasPage = project.page !== false;
        return (
          <article
            key={project.title}
            className="grid grid-cols-[1fr_auto] items-center gap-x-7 border-b border-rule pt-3.5 pb-3 md:grid-cols-[2.25rem_minmax(0,2fr)_minmax(0,5fr)_6rem] md:items-baseline md:py-4.5"
          >
            <span className="text-[13px] text-muted md:text-[15px]">
              {entryIndex(i)}
            </span>
            <div className="min-h-11 content-center text-right md:order-last md:min-h-0 md:text-left md:text-sm">
              {project.href && (
                <a
                  href={project.href}
                  {...externalLink}
                  aria-label={`${project.title}, live site`}
                  className="inline-block py-3 pl-6 md:pl-0"
                >
                  live ↗
                </a>
              )}
              {!project.href && <span className="text-warn">local</span>}
            </div>
            <h3 className="col-span-2 mb-2 text-[22px] leading-[1.2] font-bold tracking-[-0.03em] wrap-anywhere md:col-span-1 md:mb-0 md:text-[21px] md:leading-[1.25] md:tracking-normal">
              <a
                href={hasPage ? projectPath(project) : project.href}
                {...(!hasPage && externalLink)}
                className="text-bright no-underline hover:text-accent"
              >
                {projectSlug(project)}
              </a>
            </h3>
            <div className="col-span-2 md:col-span-1">
              <p className="mb-2 md:mb-1">{project.description}</p>
              <p className="text-xs text-muted md:text-[13px]">
                {project.tags.map(toCommandCase).join(" ")}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Projects;
