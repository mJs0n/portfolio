import Background from "./Background";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Contact from "./Contact";
import FadeInSection from "./FadeInSection";
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