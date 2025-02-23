import styles from "./AboutStyles.module.css";

function About() {
  return (
    <section className={styles.about}>
      <h2>About Me</h2>
      <p>
        I&apos;m a passionate Full Stack Developer with experience in building
        scalable, high-performance applications. With expertise in JavaScript,
        React, Node.js, and cloud technologies, I love solving complex
        problems and optimizing performance.
      </p>
      <h3>Skills</h3>
      <ul className={styles.skillsList}>
        <li>Programming & Scripting Languages: JavaScript, TypeScript, HTML, CSS, Python, Java</li>
        <li>Frontend Frameworks & Libraries: React, Redux, Vue.js, Next.js, Angular</li>
        <li>Backend Development & APIs: Node.js, Express.js, RESTful APIs, GraphQL</li>
        <li>Testing & Performance Optimization: Cypress.io, Jest, Lighthouse, ES Lint, Web Performance Optimization</li>
        <li>Database & Cloud Technologies: MySQL, MongoDB, PostgreSQL, Azure, AWS</li>
        <li>Development Tools & DevOps: Git, Docker, CI/CD Pipelines, NPM, System Design, Distributed Systems</li>
        <li>Other Areas: Responsive Web Design, Agile, Debugging, Data Visualization</li>
      </ul>
    </section>
  );
}

export default About;
