import styles from "./ExperienceStyles.module.css";

const experiences = [
  {
    company: "TCS",
    role: "Senior Software Engineer",
    duration: "November 2022 - June 2023",
    description: [
        "⭐ Led React v18 migration, improving UI responsiveness and performance by 35%, increasing ticket booking efficiency and a 25% improvement in application workflow.",
        "⭐ Monitored system performance, addressed 4 downtime issues, and deployed solutions to ensure 98% system availability. Integrated single-page applications, enhancing user engagement by 80%.",
        "⭐ Enhanced UIs for autonomous kiosks and ship-specific apps, driving 95% user engagement, a 45% rise in ticket reservations, and a 30% boost in crew POS and onboarding efficiency."
      ]
  },
  {
    company: "Accenture",
    role: "Software Engineer",
    duration: "August 2020 - November 2022",
    description: [
        "⭐ Analyzed user engagement trends in credit union services, identified low interaction rates, and implemented a rewards program feature, boosted user engagement by 15% and traffic by 55%.",
        "⭐ Led statement processing by assessing and documenting client requirements and implemented a statement mailing request feature with cross-browser compatible using React, cutting down processing time by 20%.",
        "⭐ Amplified electronic credit card statement delivery by introducing monthly, quarterly, and yearly options, improving transparency and simplifying customer issues by 35%.",
        "⭐ Automated testing with Cypress, reducing manual inefficiencies and speeding execution. Improved SonarQube code quality, resolved issues, and increased JUnit coverage to 96%."
      ]
  },
  {
    company: "Arizona State University",
    role: "Graduate Teaching Assistant - Part Time",
    duration: "August 2024 - Present",
    description: [
        "⭐ Mentoring 90 students across 5 Software and Web Development courses through structured and strategic planned modules.",
        "⭐ Conducting office hours twice each week, providing students with 1:1 tutoring session, assisting in complex concepts."
    ]
  }
];

function Experience() {
    return (
      <section className={styles.experience}>
        <h2>Experiences</h2>
        <div className={styles.experienceContainer}>
          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <h3>{exp.company}</h3>
              <h4>{exp.role}</h4>
              <h4>{exp.duration}</h4>
              <ul>
                {exp.description.map((desc, i) => (
                  <li key={i}>
                    {desc.split("⭐").map((line, j) => (
                      <>
                        {j > 0 && <><br />⭐</>}
                        {line}
                      </>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Experience;  