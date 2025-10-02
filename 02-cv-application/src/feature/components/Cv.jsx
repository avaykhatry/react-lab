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
        name : "John Allen",
        contacts : [
          { type : "tel:", value : "9760394583" },
          { type : "mailto:", value : "john.all@gmail.com" },
          { type : "text", value : "Austin, TX" },
          { type : "https://www.linkedin.com/in/", value : "avaya-khatri"},
          { type : "https://github.com/", value: "avaykhatry"} 
        ]
      },
      summary : "Aspiring frontend developer passionate about building responsive and user-friendly web applications using React, JavaScript, and modern UI frameworks. Seeking a React Internship to apply my coding skills, learn from experienced engineers, and contribute to real-world projects.",
      education : [
        {
          id : 1,
          schoolName : "Harvard University",
          level : "Bachelor of Computer Science",
          gpa : "3.8",
          startDate : "Apr 2022",
          endDate : "Apr 2026",
        }
      ],
      experiences : [
        {
          id : 1,
          organization : "Personal Projects",
          position : "React Developer (Project Work)",
          startDate : "Jan 2024",
          endDate : "Present 2026",
          description: [
            {
              id : 1,
              detail : "Built multiple projects including a task manager, weather app, and portfolio site using React, JavaScript, and CSS.",
            },
            {
              id : 2,
              detail : "Implemented reusable components, state management with React Hooks, and API integrations.",
            },
            {
              id : 3,
              detail : "Deployed projects using GitHub Pages and Netlify.",
            }
          ]
        },
        {
          id : 2,
          organization : "Open Source Contributions",
          position : "Contributor",
          startDate : "Jun 2023",
          endDate : "Present",
          description: [
            {
              id : 1,
              detail : "Contributed bug fixes and documentation improvements to open-source React libraries.",
            },
            {
              id : 2,
              detail : "Collaborated with other developers via GitHub issues and pull requests.",
            }
          ]
        }
      ],
      skills : [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Tailwind CSS / Bootstrap",
        "Git & GitHub",
        "REST APIs",
        "Node.js (basic)",
        "Agile / Scrum"
      ]
    };

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
                  <div className={styles.inner}>
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
                    {data.map((skill, index) => (
                      <li key={index}>{skill}</li>
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