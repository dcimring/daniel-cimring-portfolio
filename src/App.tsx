import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Stack from "./components/sections/Stack";
import Writing from "./components/sections/Writing";
import Footer from "./components/sections/Footer";
import ImpactBlock from "./components/ImpactBlock";
import { impactQuote } from "./data/site";

function App() {
  return (
    <div
      id="top"
      className="min-h-screen selection:bg-primary selection:text-background font-sans bg-background text-on-surface overflow-x-hidden"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-60 bg-primary text-background px-6 py-3 font-display font-black uppercase tracking-widest text-xs"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <ImpactBlock quote={impactQuote} />
        <Experience />
        <Projects />
        <Stack />
        <Writing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
