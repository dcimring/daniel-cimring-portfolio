import PageShell from "./components/PageShell";
import PullQuote from "./components/PullQuote";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Stack from "./components/sections/Stack";
import Writing from "./components/sections/Writing";
import { impactQuote } from "./data/site";

function App() {
  return (
    <PageShell>
      <Hero />
      <PullQuote quote={impactQuote} />
      <Projects />
      <Experience />
      <Stack />
      <Writing />
    </PageShell>
  );
}

export default App;
