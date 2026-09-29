import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";

const Portfolio = () => {
  return (
    <div>
      <Navbar />

      <Home />
      <About />
      <Experience />

      <section
        id="skills"
        className="min-h-screen scroll-mt-20"
      >
        Skills Section
      </section>

      <section
        id="projects"
        className="min-h-screen scroll-mt-20"
      >
        Projects Section
      </section>

      <section
        id="contact"
        className="min-h-screen scroll-mt-20"
      >
        Contact Section
      </section>
    </div>
  );
};

export default Portfolio;