import Nav from "./components/sections/Nav";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Stack from "./components/sections/Stack";
import Insights from "./components/sections/Insights";
import Footer from "./components/sections/Footer";
import ImpactBlock from "./components/ImpactBlock";

function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-background font-sans bg-background text-on-surface overflow-x-hidden">
      <Nav />
      <main>
        <Hero />

        <ImpactBlock>
          "My journey began as a child with an early computer and a love for
          code. Today I’m still driven by that same goal of creating meaningful
          solutions that are a joy to use."
        </ImpactBlock>

        <Experience />
        <Projects />
        <Stack />
        <Insights />
        <Footer />
      </main>
    </div>
  );
}

export default App;
