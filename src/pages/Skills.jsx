const Skills = () => {
  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "REST APIs",
    "Git",
  ];

  return (
    <section className="py-20 bg-slate-800">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-700 px-6 py-3 rounded-2xl shadow"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;