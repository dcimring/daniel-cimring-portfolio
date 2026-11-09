import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getCurrentYear = () => new Date().getFullYear();
const getBuildYear = () => Number(import.meta.env.VITE_BUILD_YEAR);

/**
 * The year shown on the page. Hydrates with the build year so it matches the
 * prerendered HTML, then switches to the visitor's current year.
 */
export const useCurrentYear = () =>
  useSyncExternalStore(subscribe, getCurrentYear, getBuildYear);
