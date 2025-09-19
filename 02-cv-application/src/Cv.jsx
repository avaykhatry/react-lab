import styles from "./Cv.module.css";
import App from "./App";


export default function Cv({ name, email, location, phone}) {

  return (
    <div className={styles.container}>
        {/* Header Section */}
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.header}>{name}</div>
          <div className={styles.flex}>
            <a href="">{email}</a>
            <a href="">{phone}</a>
            <span>{location}</span>
          </div>
        </div>
      </div>

        {/* Professional Summaray */}
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.title}>PROFESSIONAL SUMMARY</div>
          <div>
            A product designer with expertise leading end-to-end design
            processes from scratch, specializing in mobile and responsive web
            design, and thriving in cross-functional environment.
          </div>
        </div>
      </div>

        {/* Experience */}
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.title}>EXPERIENCE</div>
          <div className={`${styles.expInnerHeader} ${styles.subtitle}`}>
            <div>Product Designer, Marqeta (B2B Fintech)</div>
            <div>Jun 2024 - Present</div>
          </div>
          <ul>
            <li>
              Directed the design of Money Movement SDK, collaborating with an
              agile cross-functional team, and managing the full design process
              from competitive research to mockup, and handoff.
            </li>
            <li>
              Managed a diverse group of stakeholders, aligning goals and design
              decisions through research data and strategic communication to
              ensure cohesive project development.
            </li>
          </ul>
        </div>
      </div>

      {/* education */}
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.title}>EDUCATION</div>
          <div className={`${styles.eduInnerHeader} ${styles.subtitle}`}>
            <div>B.S., Information Technology</div>
            <div>Apr 2022 - Apr 2026</div>
          </div>
          <div>Westcliff University (GPA 3.99)</div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.title}>SKILLS</div>
          <div>React, SQL, JS, HTML, CSS, Figma</div>
        </div>
      </div>
    </div>
  );
}
