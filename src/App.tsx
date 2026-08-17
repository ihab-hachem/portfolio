import { About } from "./components/About";
import { AIEngineering } from "./components/AIEngineering";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { FeaturedProject } from "./components/FeaturedProject";
import { Focus } from "./components/Focus";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Nav } from "./components/Nav";
import { Philosophy } from "./components/Philosophy";
import { Projects } from "./components/Projects";
import { SystemsDiagram } from "./components/SystemsDiagram";
import { TechStack } from "./components/TechStack";

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Focus />
        <TechStack />
        <Experience />
        <AIEngineering />
        <FeaturedProject />
        <Projects />
        <SystemsDiagram />
        <Philosophy />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
