
import Hero from "./Hero";
import Skills from "./Skills";

import Projects from "./Projects";
import Contact from "./Contact";


const Home = () => {
  return (
    <div className="bg-slate-900 text-white">
     
      <Hero />
     <Skills />
      
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;