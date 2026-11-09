import Footer from "./sections/Footer";
import Nav from "./sections/Nav";

/** The frame every page shares. `navBase` prefixes nav links on pages other than the home page. */
const PageShell = ({
  navBase,
  children,
}: {
  navBase?: string;
  children: React.ReactNode;
}) => (
  <div
    id="top"
    className="min-h-screen bg-background text-sm leading-[1.55] text-ink md:text-[15px] md:leading-[1.6] overflow-x-hidden"
  >
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 bg-accent text-background px-6 py-3"
    >
      Skip to content
    </a>
    <div className="shell">
      <Nav base={navBase} />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
    </div>
  </div>
);

export default PageShell;
