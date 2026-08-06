import type { LucideIcon } from "lucide-react";

/**
 * A card in the Experience or Projects grid.
 * The visible "01"-style index is derived from array position at render time —
 * do not store it here.
 */
export interface CardItem {
  title: string;
  description: string;
  tags: string[];
  /** External link. Omit for cards that aren't clickable. */
  href?: string;
  /** "light" renders the yellow-on-black inverted card. Omit for the default dark card. */
  variant?: "light";
}

export interface Article {
  title: string;
  link: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface NavLink {
  name: string;
  href: string;
}
