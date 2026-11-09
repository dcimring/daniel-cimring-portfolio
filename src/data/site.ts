import type { NavLink } from "../types";

export const email = "dcimring@gmail.com";

/**
 * Each `href` must match a section `id`. Listed in page order.
 */
export const navLinks: NavLink[] = [
  { name: "Projects", href: "#projects" },
  { name: "Work", href: "#work" },
  { name: "Stack", href: "#stack" },
  { name: "Writing", href: "#writing" },
];

export const socials = {
  github: "https://github.com/dcimring",
  linkedin: "https://www.linkedin.com/in/danielcimring/",
  medium: "https://medium.com/@danielcimring",
};

export const hero = {
  eyebrow: "Builder • Founder",
  tagline:
    "I started a mobile social network in South Africa, ran product for an online gaming company, and now ship products with AI agents from Cayman.",
  cta: "Get in touch",
  /** Caption under the portrait. */
  focus: { label: "Focus", value: "AI Agents" },
};

/** Pull-quote under the hero. The part after the last colon is highlighted. */
export const impactQuote =
  "I got an early computer as a kid and started writing code. I’m still at it, and the goal hasn’t changed: build things people actually enjoy using.";

export const writing = {
  intro:
    "Written a few years back when I was spending most of my time on Bitcoin data. Old now, but it’s still how I work: pull the numbers, test the idea, write down what actually happened.",
  cta: "More on Medium",
};
