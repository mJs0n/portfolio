import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 
      bg-white/5 backdrop-blur-xl 
      border border-white/10
      px-8 py-3 rounded-full
      flex gap-8 text-white shadow-lg"
    >
      <a href="#about" className="hover:text-cyan-400 transition">
        About
      </a>
      <a href="#projects" className="hover:text-cyan-400 transition">
        Projects
      </a>
      <a href="#contact" className="hover:text-cyan-400 transition">
        Contact
      </a>
    </motion.nav>
  );
};

export default Navbar;