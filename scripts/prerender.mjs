// Runs after both Vite builds (see `build` in package.json). Writes the fully
// rendered HTML for the home page and every project page into dist/, and
// generates dist/sitemap.xml from the same list of pages.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { render, pages } from "../dist-ssr/entry-server.js";

const SITE = "https://danielcimring.com";
const DIST = "dist";
const ROOT_DIV = '<div id="root"></div>';

const escapeAttr = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Replaces exactly one match, so a changed index.html fails the build loudly. */
const replaceOnce = (html, pattern, replacement) => {
  if (html.search(pattern) === -1) {
    throw new Error(`prerender: index.html no longer matches ${pattern}`);
  }
  return html.replace(pattern, () => replacement);
};

const setMeta = (html, key, value) =>
  replaceOnce(
    html,
    new RegExp(`<meta\\s+(property|name)="${key}"\\s+content="[^"]*"\\s*/?>`),
    `<meta ${key.startsWith("og:") ? "property" : "name"}="${key}" content="${escapeAttr(value)}" />`,
  );

const withRoot = (html, path) =>
  replaceOnce(html, ROOT_DIV, `<div id="root">${render(path)}</div>`);

const projectHtml = (template, { path, project }) => {
  const url = `${SITE}${path}`;
  const title = `${project.title} // Daniel Cimring`;
  const { description } = project;
  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description,
    url,
    keywords: project.tags.join(", "),
    author: { "@type": "Person", name: "Daniel Cimring", url: SITE },
    ...(project.href && { sameAs: project.href }),
  };

  let html = template;
  html = replaceOnce(
    html,
    /<title>.*?<\/title>/,
    `<title>${escapeAttr(title)}</title>`,
  );
  html = replaceOnce(
    html,
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  );
  // The portrait only appears on the home page.
  html = replaceOnce(html, /<link\s+rel="preload"\s+as="image"[^>]*>\s*/, "");
  html = replaceOnce(
    html,
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, "\\u003c")}</script>`,
  );
  for (const [key, value] of [
    ["description", description],
    ["og:url", url],
    ["og:title", title],
    ["og:description", description],
    ["twitter:url", url],
    ["twitter:title", title],
    ["twitter:description", description],
  ]) {
    html = setMeta(html, key, value);
  }
  return withRoot(html, path);
};

const paths = pages.map((page) => page.path);
if (new Set(paths).size !== paths.length) {
  throw new Error(`prerender: two projects share a URL: ${paths.join(", ")}`);
}

const template = readFileSync(join(DIST, "index.html"), "utf8");

for (const page of pages) {
  // Written as /projects/x.html; `cleanUrls` in vercel.json serves it at /projects/x.
  const file = join(DIST, `${page.path}.html`);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, projectHtml(template, page));
}
writeFileSync(join(DIST, "index.html"), withRoot(template, "/"));

const urls = ["/", ...paths]
  .map((path) => `  <url>\n    <loc>${SITE}${path}</loc>\n  </url>`)
  .join("\n");
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

console.log(`prerendered ${paths.length + 1} pages`);
