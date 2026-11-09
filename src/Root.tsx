import { StrictMode } from "react";
import { MotionConfig } from "framer-motion";
import App from "./App";
import ProjectPage from "./components/ProjectPage";
import { findProjectByPath } from "./lib/projects";

/** Shared by the browser entry and the prerender, so both produce the same tree. */
const Root = ({ path }: { path: string }) => {
  const project = findProjectByPath(path);
  return (
    <StrictMode>
      <MotionConfig reducedMotion="user">
        {project ? <ProjectPage project={project} /> : <App />}
      </MotionConfig>
    </StrictMode>
  );
};

export default Root;
