import styles from "./Cv.module.css";
import App from "./App";


export default function Cv({ name, email, location, phone, summary, skill, experience, education}) {

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
            {summary}
          </div>
        </div>
      </div>

        {/* Experience */}
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.title}>{experience.jobTitle}</div>
          <div className={`${styles.expInnerHeader} ${styles.subtitle}`}>
            <div>{experience.jobOrganization} ({experience.jobLocation})</div>
            <div>{experience.jobStart} - {experience.jobEnd}</div>
          </div>
          <ul>
              {experience.jobDescription.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      </div>

      {/* education */}
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.title}>EDUCATION</div>
          <div className={`${styles.eduInnerHeader} ${styles.subtitle}`}>
            <div>{education.degree}</div>
            <div>{education.schoolStartDate} - {education.gradDate}</div>
          </div>
          <div>{education.school} (GPA {education.gpa})</div>
          <div>{education.schoolLocation}</div>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.title}>SKILLS</div>
          <div>{skill}</div>
        </div>
      </div>
    </div>
  );
}
