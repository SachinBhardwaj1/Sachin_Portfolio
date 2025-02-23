import styles from "./ProjectsStyles.module.css";

const projects = [
  {
    title: "ReadNext - Personalized Book Guide",
    description:
      "Refined a Machine Learning model to improve book recommendations, scaling data efficiency for 6,000+ records.",
    technologies: ["Python", "Machine Learning", "Cosine Similarity"],
    github: "https://github.com/SachinBhardwaj1/readnext",
  },
  {
    title: "EmployEase DB",
    description:
      "Developed a SQL database with Cursors, Triggers, and Stored Procedures for optimized job tracking.",
    technologies: ["SQL", "Database Management"],
    github: "https://github.com/SachinBhardwaj1/employease-db",
  },
  {
    title: "Mental Health & Stress Insights",
    description:
      "Analyzed the impact of remote work on mental health using Python, SQL, and Tableau.",
    technologies: ["Python", "Data Analysis", "Tableau"],
    github: "https://github.com/SachinBhardwaj1/mental-health-analysis",
  },
];

function Projects() {
  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </p>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;