import { email, socials } from "../../data/site";

const footerLinks = [
  { name: "github", href: socials.github },
  { name: "linkedin", href: socials.linkedin },
  { name: "medium", href: socials.medium },
];

const Footer = () => (
  <footer className="pb-8 md:pb-10">
    <p className="mb-1.5 text-muted md:mb-2">$ mail</p>
    <a
      href={`mailto:${email}`}
      className="inline-block py-1.5 text-[min(8vw,1.9375rem)] leading-[1.15] font-extrabold tracking-[-0.06em] md:py-2 md:text-[clamp(2rem,4.6vw,4rem)] md:leading-[1.1] md:tracking-[-0.04em]"
    >
      {email}
    </a>
    <div className="mt-3 flex gap-6 md:mt-5">
      {footerLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3"
        >
          {link.name}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
