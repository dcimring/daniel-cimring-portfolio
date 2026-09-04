import { email, socials } from "../../data/site";

const footerLinks = [
  { name: "Github", href: socials.github },
  { name: "Linkedin", href: socials.linkedin },
  { name: "Medium", href: socials.medium },
];

const Footer = () => (
  <footer className="py-24 bg-surface-container">
    <div className="shell flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
      <div className="flex items-center gap-4">
        <div className="w-2 h-8 bg-primary" />
        <span className="text-xs font-display font-black uppercase tracking-[0.4em] text-on-surface/60">
          Daniel Cimring // {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-12 gap-y-6 text-[11px] font-display font-black uppercase tracking-[0.3em] text-on-surface/60">
        {footerLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href={`mailto:${email}`}
          className="hover:text-primary transition-colors"
        >
          Email
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
