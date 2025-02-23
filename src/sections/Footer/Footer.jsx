import { useState, useEffect } from "react";
import styles from "./FooterStyles.module.css";

const Footer = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show footer when scrolling down, hide when scrolling up
      if (currentScrollPos > prevScrollPos) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }

      // Ensure the latest scroll position is stored correctly
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <footer className={`${styles.footer} ${footerVisible ? styles.visible : styles.hidden}`}>
      <p>Made with ❤️ by Sachin Bhardwaj ©️ 2025</p>
    </footer>
  );
};

export default Footer;