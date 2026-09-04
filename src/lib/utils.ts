import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { navLinks } from "../data/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Derives the "01"-style card index from array position. */
export const cardIndex = (i: number) => String(i + 1).padStart(2, "0");

/**
 * Derives the "01"-style section index from the section's position in
 * `navLinks`, so reordering the nav renumbers the section eyebrows too.
 */
export const sectionIndex = (href: string) =>
  cardIndex(navLinks.findIndex((link) => link.href === href));
