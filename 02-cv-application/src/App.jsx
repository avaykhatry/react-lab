import styles from "./App.module.css";

function Input({ type, id, label }) {
  return (
    <div className={styles.nav}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} />
    </div>
  );
}

function Button({ children }) {
  return <button>{children}</button>;
}

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>Build Your CV</div>
        <button>Download</button>
        <button>Share</button>
      </div>
      <div className={styles.main}>
        <div className={styles.left}>
          <div className={styles.leftTitle}>
            <a href="#about">About</a> 
          </div>
          <div className={styles.leftTitle}>
            <a href="#prof-summary">Professional Summary</a>
          </div>
          <div className={styles.leftTitle}>
            <a href="#experience">Experience</a>
          </div>
          <div className={styles.leftTitle}>
            <a href="#education">Education</a>
          </div>
          <div className={styles.leftTitle}>
            <a href="#skills">Skills</a>
          </div>
        </div>
        <div className={styles.right}>
          <form id="about" className={styles.about}>
            <Input type="text" id="name" label="Full name" />
            <Input type="email" id="email" label="Email" />
            <Input type="number" id="phone" label="Phone" />
            <Input type="text" id="location" label="Location" />
          </form>
        </div>
        <div className={styles.forms}>
          <form id="experience" className={styles.experience}>
            <Input type="text" id="job-title" label="Job Title" />
            <Input type="text" id="job-organization" label="Organization" />
            <Input type="text" id="job-location" label="Location" />
            <Input type="date" id="job-start-date" label="Start date" />
            <Input type="date" id="job-end-date" label="End date" />
            <Input type="text" id="job-description" label="Description" />
            <Input type="checkbox" id="job-status" label="I currently work here" />
          </form>
          <form id="education" className={styles.education}>
            <Input type="text" id="school" label="School" />
            <Input type="text" id="degree" label="Degree" />
            <Input type="text" id="location" label="Location" />
            <Input type="date" id="start-date" label="Start Date" />
            <Input type="date" id="grad-date" label="Graduation Date" />
            <Input type="checkbox" id="edu-status" label="I currently study here" />
          </form>
          <form id="skills" className={styles.skills}>
            <Input type="text" id="skill-name" label="Skill name" />
          </form>
          <form id="prof-summary" className={styles.professionalSummary}>
            <Input type="text" id="professional-summary" label="Professional Summary" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
