import { StrictMode } from "react";
import App from "./App";
import ProjectPage from "./components/ProjectPage";
import { findProjectByPath } from "./lib/projects";

/** Shared by the browser entry and the prerender, so both produce the same tree. */
const Root = ({ path }: { path: string }) => {
  const project = findProjectByPath(path);
  return (
    <StrictMode>
      {project ? <ProjectPage project={project} /> : <App />}
    </StrictMode>
  );
};

export default Root;
