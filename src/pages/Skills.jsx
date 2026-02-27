import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiVuedotjs , SiMysql } from "react-icons/si";
import { HiDatabase } from "react-icons/hi"; 

import "./Skills.css";

const Skills = () => {
  const techStack = [
    { icon: <FaReact />, name: "React" },
    { icon: <SiVuedotjs />, name: "Vue" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <HiDatabase/>, name: "HeidiSQL" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGitAlt />, name: "Git Bash" },
    { icon: <FaFigma />, name: "Figma" },
    
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills-title"
        >
          <span className="skills-number">02.</span> Skills
        </motion.h2>

        <div className="skills-grid">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6 }}
              className="skill-card"
            >
              <div className="skill-icon">{tech.icon}</div>
              <p>{tech.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;