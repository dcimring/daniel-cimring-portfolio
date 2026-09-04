import ArchiveCard from "../ArchiveCard";
import SectionHeading from "../SectionHeading";
import { experience } from "../../data/experience";
import { cardIndex } from "../../lib/utils";

const Experience = () => (
  <section
    id="work"
    className="py-24 md:py-32 bg-background relative overflow-hidden"
  >
    <div className="shell">
      <SectionHeading href="#work" line1="Where I’ve" line2="Worked" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
        {experience.map((item, i) => (
          <ArchiveCard key={item.title} index={cardIndex(i)} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
