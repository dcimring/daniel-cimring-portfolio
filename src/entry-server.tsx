import { renderToString } from "react-dom/server";
import Root from "./Root";
import { projectPages, projectPath } from "./lib/projects";

/** Used only by `scripts/prerender.mjs` at build time. */
export const render = (path: string) => renderToString(<Root path={path} />);

export const pages = projectPages.map((project) => ({
  path: projectPath(project),
  project,
}));
