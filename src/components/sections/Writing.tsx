import { articles } from "../../data/articles";
import { socials, writing } from "../../data/site";

const externalLink = { target: "_blank", rel: "noopener noreferrer" };

const Writing = () => (
  <section id="writing" className="pb-12 md:pb-20">
    <h2 className="mb-3 text-muted md:mb-3.5">$ tail writing/*.md</h2>
    <p className="mb-3 max-w-190 md:mb-5">
      <span className="text-muted"># </span>
      {writing.intro}
    </p>
    {articles.map((article) => (
      <a
        key={article.link}
        href={article.link}
        {...externalLink}
        className="block py-3 text-base leading-[1.4] md:py-2.5 md:text-[17px]"
      >
        {article.title}
      </a>
    ))}
    <a
      href={socials.medium}
      {...externalLink}
      className="inline-block py-3 text-muted"
    >
      {writing.cta.toLowerCase()} →
    </a>
  </section>
);

export default Writing;
