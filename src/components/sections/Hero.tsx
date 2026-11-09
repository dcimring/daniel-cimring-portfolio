import { email, hero } from "../../data/site";
import CtaLink from "../CtaLink";

/** Phones read name → portrait → about; from `lg` the portrait moves to its own column. */
const Hero = () => (
  <header className="grid grid-cols-1 gap-x-16 pt-6 pb-11 md:pt-16 md:pb-20 lg:grid-cols-[3fr_2fr]">
    <div>
      <p className="mb-3 text-muted md:mb-4.5">$ whoami</p>
      <h1 className="mb-2 text-[min(19.5vw,4.75rem)] leading-[0.96] font-extrabold tracking-[-0.06em] text-bright md:mb-3 md:text-[clamp(4.75rem,8.2vw,7.375rem)] md:leading-[0.98] md:tracking-[-0.05em]">
        daniel
        <br />
        cimring
        <span
          aria-hidden="true"
          className="cursor ml-[0.06em] inline-block h-[0.74em] w-[0.42em] bg-accent"
        />
      </h1>
      <p className="mb-6 text-base text-accent md:mb-9 md:text-lg">
        {hero.eyebrow.toLowerCase()}
      </p>
    </div>

    <figure className="mb-7 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mb-0">
      <div className="h-70 overflow-hidden md:aspect-square md:h-auto md:max-w-110">
        <picture>
          <source
            type="image/webp"
            srcSet="/daniel-480.webp 427w, /daniel-960.webp 854w"
            sizes="(min-width: 768px) 440px, 100vw"
          />
          <img
            src="/daniel-960.jpg"
            alt="Daniel Cimring"
            width={854}
            height={960}
            fetchPriority="high"
            className="block h-full w-full object-cover object-top mix-blend-lighten brightness-90"
          />
        </picture>
      </div>
      <figcaption className="mt-2 text-xs text-muted md:mt-2.5 md:text-[13px]">
        {hero.focus.label.toLowerCase()}: {hero.focus.value}
      </figcaption>
    </figure>

    <div>
      <p className="mb-1.5 text-muted md:mb-2">$ cat about.txt</p>
      <p className="mb-6 max-w-165 text-base md:mb-9 md:text-lg md:leading-[1.6]">
        {hero.tagline}
      </p>
      <p className="mb-2 hidden text-muted md:block">$ contact --now</p>
      <CtaLink href={`mailto:${email}`}>{hero.cta.toLowerCase()} →</CtaLink>
    </div>
  </header>
);

export default Hero;
