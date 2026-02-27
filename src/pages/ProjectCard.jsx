import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white/5 backdrop-blur-xl 
      border border-white/10 
      rounded-2xl p-6 
      shadow-xl hover:shadow-cyan-500/10
      transition duration-300"
    >
      <h3 className="text-2xl font-semibold mb-3 text-white">
        {project.title}
      </h3>

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <div className="flex gap-4">
        <a href={project.demo} className="text-cyan-400 hover:underline">
          Live Demo
        </a>
        <a href={project.github} className="text-indigo-400 hover:underline">
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;