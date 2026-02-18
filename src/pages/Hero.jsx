import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-bold mb-6"
      >
        Hi, I'm <span className="text-sky-400">Mark Jason</span>
      </motion.h1>

      <p className="text-gray-400 max-w-xl mb-8">
        Frontend Developer specializing in React applications,
        performance optimization, and scalable UI architecture.
      </p>

      <a
        href="#projects"
        className="bg-sky-500 px-6 py-3 rounded-2xl hover:bg-sky-600 transition"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;