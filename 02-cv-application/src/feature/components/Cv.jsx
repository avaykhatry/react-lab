import styles from '../../styles/Cv.module.css'

function Cv() {

  const cvDetails = [
    {
      "about" : {
        "name" : "John",
        "contacts" : [
          {"type" : "tel", "value" : "9760394583"},
          {"type" : "mailto", "value" : "jogn.d@gmail.com"},
          {"type" : "text", "value" : "Austin, TX"}, 
        ]
      }
    },
    {
      "prosum" : "A product designer with expertise leading end-to-end design processes from scratch, specializing in mobile and responsive web design, and thriving in cross-functional environment."
    },
    {
      "education" : {
        "schoolName" : "Harvard",
        "level" : "Bachelor",
        "gpa" : "3.95",
        "sdate" : "Apr 2022",
        "gdate" : "Apr 2026",
      }
    },
    {
      "experience" : [{
        "id" : 1,
        "organization" : "Google",
        "position" : "Senior Devleoper",
        "sdate" : "Apr 2024",
        "edate" : "Apr 2026",
        "description": [
          {
            "id" : 1,
            "detail" : "I have worked hard in this position",
          },
          {
            "id" : 2,
            "detail" : "I was always on time",
          }
      ]
      },
      {
        "id" : 2,
        "organization" : "Apple",
        "position" : "Mid-level Devleoper",
        "sdate" : "Apr 2022",
        "edate" : "Apr 2024",
        "description": [
          {
            "id" : 1,
            "detail" : "I have worked hard in this position",
          },
          {
            "id" : 2,
            "detail" : "I was always on time",
          }
      ]
      }]
    },
    {
      "skills" : ["Figma", "Sketch", "Adobe Creative Suite", "Miro", "Jira", "Agile"]
    }
  ]
  return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerName}>
            {cvDetails[0].about.name}
          </div>
          <div className={styles.headerBtm}>

            {cvDetails[0].about.contacts.map((contact, index) => (
              <span key={index}>
                {contact.type === "text"
                ? (contact.value)
                : (
                  <a href={`${contact.type}:${contact.value}`}>{contact.value}</a>
                )}
                {index < cvDetails[0].about.contacts.length - 1 && " | "}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
              PROFESSIONAL SUMMARY
          </div>
              <div className={styles.inner}>
                {cvDetails[1].prosum}
              </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            EXPERIENCE
          </div>
          <div className={styles.inner}>
            {cvDetails[3].experience.map(item => 
              <div key={item.id}>  
                <div className={styles.subtitle}>
                  <div className={styles.left}>
                    {item.position}
                  </div>
                  <div className={styles.right}>
                    {item.sdate} - {item.edate}
                  </div>
                </div>
                <ul>
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
        <div className={styles.section}>
          <div className={styles.title}>
            EDUCATION
          </div>
          <div className={styles.inner}>
            <div className={styles.subtitle}>
              <div className="left">
                {cvDetails[2].education.level}
              </div>
              <div className='right'>
                {cvDetails[2].education.sdate} - {cvDetails[2].education.gdate}
              </div>
            </div>
              <p>{cvDetails[2].education.schoolName} ({cvDetails[2].education.gpa}) </p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            SKILLS
          </div>
          <div className={styles.inner}>
            {cvDetails[4].skills.join(", ")}
          </div>
        </div>
      </div>
  )
}

export default Cv;