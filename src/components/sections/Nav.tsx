import { navLinks } from "../../data/site";

/** Links are plain anchors: CSS `scroll-behavior` handles the smooth scroll. */
const Nav = ({ base = "" }: { base?: string }) => (
  <nav
    aria-label="Main"
    className="flex flex-col pt-3 pb-1 text-[13px] md:flex-row md:items-center md:justify-between md:py-4 md:text-[15px]"
  >
    <a href={`${base}#top`} className="text-muted no-underline">
      daniel@cayman:~
    </a>
    <div className="flex justify-between md:gap-6">
      {navLinks.map((link) => (
        <a key={link.href} href={`${base}${link.href}`} className="py-3.25">
          ./{link.name.toLowerCase()}
        </a>
      ))}
    </div>
  </nav>
);

export default Nav;
