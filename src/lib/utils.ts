import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Derives the "01"-style card index from array position. */
export const cardIndex = (i: number) => String(i + 1).padStart(2, "0");
