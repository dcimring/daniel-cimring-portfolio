import { projects } from "../data/projects";
import type { Project } from "../types";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** A project's title as a URL and display slug: "Cayman Cup" → "cayman-cup". */
export const projectSlug = (project: Project) => slugify(project.title);

/** Site-relative URL of a project's page, derived from its title. */
export const projectPath = (project: Project) =>
  `/projects/${projectSlug(project)}`;

/** Projects that get their own page (and a sitemap entry). */
export const projectPages = projects.filter((p) => p.page !== false);

export const findProjectByPath = (path: string) => {
  const normalized = path.replace(/\/$/, "");
  return projectPages.find((p) => projectPath(p) === normalized);
};
