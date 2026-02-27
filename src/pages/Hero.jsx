import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center text-white px-6">
      
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-6"
      >
        Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          Modern Web Experiences
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 max-w-xl mb-8"
      >
        I craft high-performance React applications with elegant UI,
        smooth animations, and scalable architecture.
      </motion.p>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="#projects"
        className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-lg shadow-cyan-500/20"
      >
        View Projects
      </motion.a>
    </section>
  );
};

export default Hero;