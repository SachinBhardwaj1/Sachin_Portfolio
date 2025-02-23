import { motion } from "framer-motion";
import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <motion.section 
      className={styles.contact}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Contact Me</h2>
      <p>I&apos;d love to connect! Feel free to reach out.</p>
      
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className={styles.submitButton}>Send</button>
      </form>
      
      <p>Email: <a href="mailto:sachinb2397@gmail.com">sachinb2397@gmail.com</a></p>
      
      <div className={styles.socialIcons}>
        <a href="https://github.com/SachinBhardwaj1" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/sachinbhardwajus" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </motion.section>
  );
}

export default Contact;