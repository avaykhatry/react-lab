import styles from '../../styles/Cv.module.css'

function Cv() {

  const cvSections = [
    "about",
    "summary",
    "experiences",
    "education",
    "skills"
  ];

  const cvDetails = {
      about : {
        name : "John",
        contacts : [
          { type : "tel", value : "9760394583" },
          { type : "mailto", value : "john.d@gmail.com" },
          { type : "text", value : "Austin, TX" }, 
        ]
      },
      summary : "A product designer with expertise leading end-to-end design processes from scratch, specializing in mobile and responsive web design, and thriving in cross-functional environment.",
      education : [
        {
          id : 1,
          schoolName : "Harvard",
          level : "Bachelor",
          gpa : "3.95",
          startDate : "Apr 2022",
          endDate : "Apr 2026",
        }
      ],
      experiences : [
        {
          id : 1,
          organization : "Google",
          position : "Senior Developer",
          startDate : "Apr 2024",
          endDate : "Apr 2026",
          description: [
            {
              id : 1,
              detail : "I have worked hard in this position",
            },
            {
              id : 2,
              detail : "I was always on time",
            }
          ]
        },
        {
          id : 2,
          organization : "Apple",
          position : "Mid-level Devleoper",
          startDate : "Apr 2022",
          endDate : "Apr 2024",
          description: [
            {
              id : 1,
              detail : "I have worked hard in this position",
            },
            {
              id : 2,
              detail : "I was always on time",
            }
          ]
        }
      ],
      skills : [
        "Figma",
        "Sketch",
        "Adobe Creative Suite",
        "Miro",
        "Jira",
        "Agile"
      ]
    };

  return (
    <div className={styles.container}>
      {cvSections.map(sections => {
        const data = cvDetails[sections];
        switch (sections) {
          case "about":
            return(
              <div className={`${styles.header}`}>
                <div className={styles.headerName}>
                  {data.name}
                </div>
                <div className={styles.headerBtm}>
                  {data.contacts.map((contact, index) => (
                    <span key={index}>
                      {contact.type === "text"
                      ? (contact.value)
                      : (
                        <a href={`${contact.type}:${contact.value}`}>{contact.value}</a>
                      )}
                      {index < data.contacts.length - 1 && " | "}
                    </span>
                  ))}
                </div>
              </div>
            )
          case "summary":
            return (
              <div className={styles.section}>
                <div className={styles.title}>
                  PROFESSIONAL SUMMARY
                </div>
                {data}
              </div>
            )
          case "experiences":
            return (
              <div className={styles.section}>
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
              </div>
            )
          case "education":
            return (
              <div className={styles.section}>
                <div className={styles.title}>
                  EDUCATION
                </div>
                {data.map((item) => (
                  <div className={styles.inner}>
                    <div className={styles.subtitle}>
                      <div className="left">
                        {item.level}
                      </div>
                      <div className='right'>
                        {item.startDate} - {item.endDate}
                      </div>
                    </div>
                    {item.schoolName} ({item.gpa})
                  </div>
               ))}
              </div>
            )
          case "skills":
            return (
              <div className={styles.section}>
                <div className={styles.title}>
                  SKILLS
                </div>
                <div className={styles.inner}>
                  {data.join(", ")}
                </div>
              </div>
            )
        }
      })}
    </div>
  )
}

export default Cv;