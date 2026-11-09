import { experience } from "../../data/experience";

const Experience = () => (
  <section id="work" className="pb-12 md:pb-20">
    <h2 className="mb-5 text-muted md:mb-6">$ history</h2>
    <div className="grid grid-cols-1 gap-x-16 gap-y-6.5 lg:grid-cols-2 lg:gap-y-8">
      {experience.map((item) => (
        <article key={item.title}>
          <h3 className="mb-1 text-[17px] leading-[1.3] font-bold text-accent md:mb-1.5 md:text-lg">
            {item.title}
          </h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
