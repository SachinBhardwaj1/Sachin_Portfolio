import styles from "./HomepageStyles.module.css";
import { FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Homepage() {
  return (
    <section className={styles.homepage}>
      <div className={styles.homepageContent}>
        <img src={"/SachinPic.png"} alt="Sachin Bhardwaj" className={styles.homepageImage} />
        <h1>Hello, I&apos;m <span className={styles.highlight}>Sachin</span> 👋</h1>
        <h2>I&apos;m a Full Stack Developer.</h2>
        <p>🚀 Fueled by Chai ☕ | 🌎 Based in USA 🇺🇸 | 👨‍💻 Software Engineer 💼 </p>
        <div className="social-icons">
          <a href="mailto:sachinb2397@gmail.com" target="_blank" rel="noopener noreferrer">
            <MdEmail />
          </a>
          <a href="https://github.com/SachinBhardwaj1" target="_blank" rel="noopener noreferrer">
            <FaGithub/>
          </a>
          <a href="https://linkedin.com/in/sachinbhardwajus" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/sachin" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Homepage;