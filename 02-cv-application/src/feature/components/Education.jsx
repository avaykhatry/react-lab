import styles from '../../App.module.css'
import { Input } from '../../components/Input/Input'

export function Education({ education, setEducation }) {

  function handleChange(e) {
    setEducation({
      ...education,
      [e.target.id]: e.target.value
    });
  }
  return (
    <>
      <form id="education" className={styles.education}>
        <Input handleChange={handleChange} type="text" id="school" label="School" />
        <Input handleChange={handleChange} type="text" id="degree" label="Degree" />
        <Input handleChange={handleChange} type="text" id="schoolLocation" label="Location" />
        <Input handleChange={handleChange} type="text" id="schoolStartDate" label="Start Date" />
        <Input handleChange={handleChange} type="text" id="gradDate" label="Graduation Date" />
        <Input handleChange={handleChange} type="text" id="gpa" label="GPA" />
      </form>
    </>
  );
}