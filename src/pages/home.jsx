import Background from "../pages/Background";
import Navbar from "../pages/Navbar";
import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import FadeInSection from "../pages/FadeInSection";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="relative bg-slate-950 text-white overflow-hidden">
      <Background />
      <Navbar />
      <Hero />
      
       <FadeInSection> 
        <Skills />
      </FadeInSection>
  
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