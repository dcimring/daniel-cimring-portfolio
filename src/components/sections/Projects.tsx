import ArchiveCard from "../ArchiveCard";
import SectionHeading from "../SectionHeading";
import { projects } from "../../data/projects";
import { cardIndex } from "../../lib/utils";

/** First card is featured (full row). With 3 columns, (count − 1) divisible by 6 fills every row — see CONTENT.md. */
const Projects = () => (
  <section
    id="projects"
    className="py-24 md:py-32 bg-surface-container-low relative overflow-hidden"
  >
    <div className="shell">
      <SectionHeading
        href="#projects"
        line1="What I’m"
        line2="Building"
        variant="bleed-right"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
        {projects.map((item, i) => (
          <ArchiveCard
            key={item.title}
            index={cardIndex(i)}
            featured={i === 0}
            {...item}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
