import { projects } from "../data/projects";
import type { Project } from "../types";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Site-relative URL of a project's page, derived from its title. */
export const projectPath = (project: Project) =>
  `/projects/${slugify(project.title)}`;

/** Projects that get their own page (and a sitemap entry). */
export const projectPages = projects.filter((p) => p.page !== false);

export const findProjectByPath = (path: string) => {
  const normalized = path.replace(/\/$/, "");
  return projectPages.find((p) => projectPath(p) === normalized);
};
