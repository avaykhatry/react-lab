import { useState } from "react";
import styles from "./App.module.css";
import Cv from "./Cv";
import { Experience } from "./feature/Experience";
import { Education } from "./feature/Education";
import { About } from "./feature/About";
import { ProfessionalSummary } from "./feature/ProfessionalSummary";

export function Input({ type, id, label, handleChange, placeholder }) {
  
  return (
    <div className={styles.hero}>
      <label htmlFor={id}>{label}</label>
      <input placeholder={placeholder} onChange={handleChange} id={id} type={type} />
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}


export function Skills({ setSkill }) {

  function handleChange(e) {
    setSkill(
      e.target.value,
    )
  }
  return (
    <>
      <form id="skills" className={styles.skills}>
        <Input handleChange={handleChange} type="text" id="skill-name" label="Skill name" placeholder={'React, SQL, Figma'} />
      </form>
      <br />
      {/* <Button onClick={() => setSkills([...skills, ])}>ADD SKILL</Button> */}
    </>
  );
}

function App() {
  const [view, setView] = useState(null);
  const [about, setAbout] = useState({
    name: 'Harry Potter',
    email: 'harry.potter@hogwarts.edu',
    location: 'tree house',
    phone: '0********'
  });
  const [summary, setSummary] = useState('A product designer with expertise leading end-to-end design processes from scratch, specializing in mobile and responsive web design, and thriving in cross-functional environment.');
  const [experience, setExperience] = useState({
    jobTitle: 'EXPERIENCE',
    jobOrganization: 'Product Designer, Marqeta',
    jobLocation: 'B2B Fintech',
    jobStart: 'Jun 2024',
    jobEnd: 'Present',
    jobDescription: 'Directed the design of Money Movement SDK, collaborating with an agile cross-functional team, and managing the full design process from competitive research to mockup, and handoff.',
  })

  const [education, setEducation] = useState({
    school: 'Westcliff University',
    degree: 'B.S., Information Technology',
    schoolLocation: 'California, USA',
    schoolStartDate: 'Apr 2022',
    gradDate: 'Apr 2026',
    gpa: 3.99,
  })

  const [skill, setSkill] = useState('React');

  const components = {
    'about': <About setAbout={setAbout} about={about} />,
    'professional-summary': <ProfessionalSummary setSummary={setSummary} />,
    'experience': <Experience experience={experience} setExperience={setExperience} />,
    'education': <Education education={education} setEducation={setEducation} />,
    'skills': <Skills setSkill={setSkill} />
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>Build Your CV</div>
        <button>Download</button>
        <button>Share</button>
      </div>
      
        <div className={styles.nav}>
          <div className={styles.navTitle}>
            <a onClick={() => setView('about')} href="#about">About</a>
          </div>
          <div className={styles.navTitle}>
            <a onClick={() => setView('professional-summary')} href="#prof-summary">Professional Summary</a>
          </div>
          <div className={styles.navTitle}>
            <a onClick={() => setView('experience')} href="#experience">Experience</a>
          </div>
          <div className={styles.navTitle}>
            <a onClick={() => setView('education')} href="#education">Education</a>
          </div>
          <div className={styles.navTitle}>
            <a onClick={() => setView('skills')} href="#skills">Skills</a>
          </div>
        </div>
        <div className={styles.main}>
        <div className={styles.left}>
          {view === null && setView('about')}
          {components[view]}
        </div>
        <div className={styles.right}>
          <Cv name={about.name} email={about.email} location={about.location} phone={about.phone} summary={summary} skill={skill} experience={experience} education={education} />
        </div>

      </div>
    </div>
  );
}

export default App;
