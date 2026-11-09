import { skills } from "../../data/skills";
import { toCommandCase } from "../../lib/utils";

const Stack = () => (
  <section id="stack" className="pb-12 md:pb-20">
    <h2 className="mb-4 text-muted md:mb-5">$ ls stack/</h2>
    <ul className="grid grid-cols-2 gap-x-3 gap-y-2 text-[13px] text-bright md:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] md:gap-x-6 md:text-base">
      {skills.map((skill) => (
        <li key={skill.name} className="wrap-anywhere">
          {toCommandCase(skill.name)}
        </li>
      ))}
    </ul>
  </section>
);

export default Stack;
