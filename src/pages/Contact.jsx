import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="contact-number"
        >
          04. What's Next?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-title"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="contact-description"
        >
          I'm currently open to new opportunities and collaborations.
          Whether you have a question or just want to say hi,
          I’ll get back to you as soon as possible.
        </motion.p>

        <motion.a
          href="mailto:markjasonestremos@gmail.com"
          whileHover={{ y: -3 }}
          className="contact-button"
        >
          Say Hello
        </motion.a>

      </div>
    </section>
  );
};

export default Contact;