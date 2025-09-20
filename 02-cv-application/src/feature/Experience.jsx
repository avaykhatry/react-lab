import styles from "../App.module.css";
import { Input } from "../App";

export function Experience({ experience, setExperience }) {
  function handleChange(e) {
    setExperience({
      ...experience,
      [e.target.id]: e.target.value,
    });
  }
  return (
    <>
      <form id="experience" className={styles.experience}>
        <Input
          handleChange={handleChange}
          value=""
          type="text"
          id="jobTitle"
          label="Job Title"
        />
        <Input
          handleChange={handleChange}
          type="text"
          id="jobOrganization"
          label="Organization"
        />
        <Input
          handleChange={handleChange}
          type="text"
          id="jobLocation"
          label="Location"
        />
        <Input
          handleChange={handleChange}
          type="text"
          id="jobStart"
          label="Start date"
          placeholder={"Jun 2024"}
        />
        <Input
          handleChange={handleChange}
          type="text"
          id="jobEnd"
          label="End date"
          placeholder={"Present"}
        />
        <Input
          handleChange={handleChange}
          type="text"
          id="jobDescription"
          label="Description"
        />
      </form>
    </>
  );
}
