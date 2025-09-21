import { useState } from "react";
import styles from "./App.module.css";
import Cv from "./Cv";
import { Experience } from "./feature/components/Experience";
import { Education } from "./feature/components/Education";
import { About } from "./feature/components/About";
import { ProfessionalSummary } from "./feature/components/ProfessionalSummary";
import { Button } from "./components/Input/Button";
import { Input } from "./components/Input/Input";
import React, { useRef } from "react";
import html2pdf from "html2pdf.js";



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
    </>
  );
}

function App() {
  const [view, setView] = useState("");
  const [desc, setDesc] = useState("Directed the design of Money Movement SDK, collaborating with an agile cross-functional team, and managing the full design process from competitive research to mockup, and handoff.");
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
    jobDescription: [],
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

  const cvRef = useRef();

  const handleDownload = () => {
    const element = cvRef.current;
    html2pdf().from(element).save("cv.pdf");
  };

  const components = {
    'about': <About setAbout={setAbout} about={about} />,
    'professional-summary': <ProfessionalSummary setSummary={setSummary} />,
    'experience': <Experience desc={desc} setDesc={setDesc} experience={experience} setExperience={setExperience} />,
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
          {view === "" && setView('about')}
          {components[view]}
        </div>
        <div className={styles.right}>
                <div ref={cvRef}>
          <Cv name={about.name} email={about.email} location={about.location} phone={about.phone} summary={summary} skill={skill} experience={experience} education={education} />
          </div>
          <button onClick={handleDownload}>Download PDF</button>
        </div>

      </div>
    </div>
  );
}

export default App;
