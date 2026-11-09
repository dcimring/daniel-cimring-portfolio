/**
 * An entry in the Work or Projects list.
 * The visible "001"-style index is derived from array position at render time —
 * do not store it here.
 */
export interface CardItem {
  title: string;
  description: string;
  tags: string[];
  /** External link. Omit for cards that aren't clickable. */
  href?: string;
}

export interface Project extends CardItem {
  /** Extra paragraphs shown only on the project's own page. */
  details?: string[];
  /** `false` skips the project's own page; the card links straight to `href`. */
  page?: false;
}

export interface Article {
  title: string;
  link: string;
}

export interface Skill {
  name: string;
}

export interface NavLink {
  name: string;
  href: string;
}
