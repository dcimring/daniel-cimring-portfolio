/** Derives the "001"-style entry index from array position. */
export const entryIndex = (i: number) => String(i + 1).padStart(3, "0");

/** Writes a label the way a file name would look: "React / TS" → "react/ts". */
export const toCommandCase = (label: string) =>
  label
    .toLowerCase()
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s+/g, "-");
