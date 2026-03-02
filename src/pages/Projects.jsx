import { motion } from "framer-motion";
import { projects } from "../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          <span className="projects-number">03.</span> Projects
        </motion.h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
            >
              <p className="project-featured">Featured Project</p>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <ul className="project-tech">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;