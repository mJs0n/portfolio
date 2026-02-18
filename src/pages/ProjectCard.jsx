const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
      <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

      <p className="text-gray-400 mb-4">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a href={project.github} target="_blank" className="text-sky-400">
          GitHub
        </a>
        <a href={project.demo} target="_blank" className="text-sky-400">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;