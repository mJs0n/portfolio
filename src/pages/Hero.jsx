import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="hero-intro"
        >
          Hi, My name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hero-name"
        >
          Mark Jason Estremos.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero-tagline"
        >
          I build things for the web.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="hero-description"
        >
           I build fast, accessible, and scalable web applications using modern
           technologies. Passionate about clean architecture and intuitive user
           experiences, I turn ideas into polished, production-ready products.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ y: -3 }}
          className="hero-button"
        >
          Check out my work!
        </motion.a>

      </div>
    </section>
  );
};

export default Hero;