import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="nav-logo">MJ</div>

        {/* Desktop Links */}
        <nav className="nav-links desktop">
          <a href="#about"><span>01.</span> About</a>
          <a href="#skills"><span>02.</span> Skills</a>
          <a href="#projects"><span>03.</span> Projects</a>
          <a href="#contact"><span>04.</span> Contact</a>
        </nav>

        {/* Hamburger */}
        <div 
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;