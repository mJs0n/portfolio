import Background from "../pages/Background";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import FadeInSection from "../pages/FadeInSection"; // ✅ ADD THIS

const Home = () => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      <Background />
      <Navbar />
      <Hero />

      <FadeInSection>
        <Projects />
      </FadeInSection>

      <FadeInSection>
        <Contact />
      </FadeInSection>
    </div>
  );
};

export default Home;