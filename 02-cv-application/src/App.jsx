import { useState } from "react";
import styles from "./App.module.css";
import Cv from "./Cv";


function Input({ type, id, label, handleChange, value }) {
  
  return (
    <div className={styles.hero}>
      <label htmlFor={id}>{label}</label>
      <input value={value} onChange={handleChange} id={id} type={type} />
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

export function About( {setter, about} ) {

  function handleInputChange(e){
    setter({
      ...about,
      [e.target.id]: e.target.value
    });
  }
  return (  
      <form id="about" className={styles.about}>
        <Input handleChange={handleInputChange} type="text" id="name" label="Full name" />
        <Input handleChange={handleInputChange} type="email" id="email" label="Email" />
        <Input handleChange={handleInputChange} type="number" id="phone" label="Phone" />
        <Input handleChange={handleInputChange} type="text" id="location" label="Location" />
      </form>
  );
}

export function ProfessionalSummary() {
  return (
    <>
      <form id="prof-summary" className={styles.professionalSummary}>
        <Input
          type="text"
          id="professional-summary"
          label="Professional Summary"
        />
      </form>
    </>
  );
}

export function Experience() {
  return (
    <>
      <form id="experience" className={styles.experience}>
        <Input value="" type="text" id="job-title" label="Job Title" />
        <Input type="text" id="job-organization" label="Organization" />
        <Input type="text" id="job-location" label="Location" />
        <Input type="date" id="job-start-date" label="Start date" />
        <Input type="date" id="job-end-date" label="End date" />
        <Input type="text" id="job-description" label="Description" />
        <Input type="checkbox" id="job-status" label="I currently work here" />
      </form>
    </>
  );
}

export function Education() {
  return (
    <>
      <form id="education" className={styles.education}>
        <Input type="text" id="school" label="School" />
        <Input type="text" id="degree" label="Degree" />
        <Input type="text" id="location" label="Location" />
        <Input type="date" id="start-date" label="Start Date" />
        <Input type="date" id="grad-date" label="Graduation Date" />
        <Input type="checkbox" id="edu-status" label="I currently study here" />
      </form>
    </>
  );
}

export function Skills() {
  return (
    <>
      <form id="skills" className={styles.skills}>
        <Input type="text" id="skill-name" label="Skill name" />
      </form>
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

  // const [email, setEmail] = useState('avaya.1@gmail.com');
  // const [location, setLocation] = useState('Kathmandu, Nepal');
  // const [phone, setPhone] = useState('984*******');

  const components = {
    'about': <About setter={setAbout} about={about} />,
    'professional-summary': <ProfessionalSummary />,
    'experience': <Experience />,
    'education': <Education />,
    'skills': <Skills />
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
          <Cv name={about.name} email={about.email} location={about.location} phone={about.phone} />
        </div>

      </div>
    </div>
  );
}

export default App;
