import { email, socials } from "../../data/site";

const Footer = () => (
  <footer className="py-24 bg-surface-container-low border-t border-outline-variant/10">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-16">
      <div className="flex items-center gap-4">
        <div className="w-2 h-8 bg-primary" />
        <span className="text-xs font-display font-black uppercase tracking-[0.4em] text-on-surface/40">Daniel Cimring // 2026</span>
      </div>
      <div className="flex flex-wrap justify-center md:justify-end gap-x-12 gap-y-6 text-[10px] font-display font-black uppercase tracking-[0.3em] text-on-surface/40">
        <a href={socials.github} target="_blank" className="hover:text-primary transition-colors">Github</a>
        <a href={socials.linkedin} target="_blank" className="hover:text-primary transition-colors">Linkedin</a>
        <a href={socials.medium} target="_blank" className="hover:text-primary transition-colors">Medium</a>
        <a href={`mailto:${email}`} className="hover:text-primary transition-colors">Email</a>
      </div>
    </div>
  </footer>
);

export default Footer;
