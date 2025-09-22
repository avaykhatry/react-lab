import styles from "../../App.module.css";
import { Input } from '../../components/Input/Input'
import { Button } from "../../components/Input/Button";

export function Experience({ desc, setDesc, experience, setExperience }) {

  function handleChange(e) {
    setExperience(experience => ({...experience,
      [e.target.id]: e.target.value}));
  }

  function handleDescChange(e) {
    setDesc(e.target.value);
  }

  function handleClick() {
    setExperience({
      ...experience,
      jobDescription: [...experience.jobDescription, {id: crypto.randomUUID(), description: desc}]
    })
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
          handleChange={handleDescChange}
          type="text"
          id="jobDescription"
          label="Description"
        />
        <Button handleClick={handleClick}>Add Description</Button>
      </form>
    </>
  );
}
