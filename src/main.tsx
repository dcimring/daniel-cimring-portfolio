import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import Root from "./Root";

const container = document.getElementById("root")!;
const app = <Root path={window.location.pathname} />;

// Built pages arrive prerendered; the dev server serves an empty #root.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
