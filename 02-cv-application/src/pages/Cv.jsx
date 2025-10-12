import { useCv } from '../contexts/CvContext';
import styles from '../styles/Cv.module.css'

function Cv() {
  const { cvDetails } = useCv();

  const cvSections = [
    "about",
    "summary",
    "experiences",
    "education",
    "skills"
  ];

  return (
    <div className={styles.container}>
      {cvSections.map(sections => {
        const data = cvDetails[sections];
        switch (sections) {
          case "about":
            return(
              <section className={`${styles.header}`}>
                <div className={styles.headerName}>
                  {data.name}
                </div>
                <div className={styles.headerBtm}>
                  {data.contacts.map((contact, index) => (
                    <span key={index}>
                      {contact.type === "text"
                      ? (contact.value)
                      : (
                        <a
                          href={`${contact.type}${contact.value}`}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {contact.value}</a>
                      )}
                      {index < data.contacts.length - 1 && " • "}
                    </span>
                  ))}
                </div>
              </section>
            )
          case "summary":
            return (
              <section className={styles.section}>
                <div className={styles.title}>
                  PROFESSIONAL SUMMARY
                </div>
                {data}
              </section>
            )
          case "experiences":
            return (
              <section className={styles.section}>
                <div className={styles.title}>
                  EXPERIENCE
                </div>
                <div className={styles.inner}>
                  {data.map(item => 
                    <div key={item.id}>  
                      <div className={styles.subtitle}>
                        <div className={styles.left}>
                          {item.position}
                        </div>
                        <div className={styles.right}>
                          {item.startDate} - {item.endDate}
                        </div>
                      </div>
                      <ul className={styles.experienceList}>
                        {item.description.map(des => 
                          <li key={des.id}>
                            {des.detail}
                          </li>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            )
          case "education":
            return (
              <section className={styles.section}>
                <div className={styles.title}>
                  EDUCATION
                </div>
                {data.map((item) => (
                  <div key={item.id} className={styles.inner}>
                    <div className={styles.subtitle}>
                      <div className={styles.left}>
                        {item.level}
                      </div>
                      <div className={styles.right}>
                        {item.startDate} - {item.endDate}
                      </div>
                    </div>
                    {item.schoolName} ({item.gpa})
                  </div>
               ))}
              </section>
            )
          case "skills":
            return (
              <section className={styles.section}>
                <div className={styles.title}>
                  SKILLS
                </div>
                <div className={styles.inner}>
                  <ul className={styles.skillsList}>
                    {data.map((skill) => (
                      <li key={skill.id}>{skill.value}</li>
                    ))}
                  </ul>
                </div>
            </section>
            )
        }
      })}
    </div>
  )
}

export default Cv;