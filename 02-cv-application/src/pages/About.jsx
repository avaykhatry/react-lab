import { Input } from "../components/Input";
import { Button } from "../components/Button";
import styles from "../styles/App.module.css";
import { useState } from "react";
import { useCv } from "../contexts/CvContext";

function About() {
  const { setCvDetails } = useCv();
  const [value, setValue] = useState("");

  function handleNameChange(e) {
    setValue(e.target.value)
    setCvDetails(cvDetails => ({
      ...cvDetails,
      about: {
        ...cvDetails.about,
        name : e.target.value,
      }
    }))
  }

  function handleContactsChange(e) {
    setValue(e.target.value)

    setCvDetails(cvDetails => ({
      ...cvDetails,
      about : {
        ...cvDetails.about,
        contacts : cvDetails.about.contacts.map(
          contact => (
            contact.type === e.target.id ?
            { ...contact, value } :
            contact
          )
        )
      }
    }))
  }
  return (
    <div>
      <h2 className={styles.title}>About</h2>
      <div className={styles.section}>
      <Input value={value} type="text" id='fullName' label="Full Name" handleChange={handleNameChange} placeholder="John Allen"/>
      <Input value={value} type="number" id="tel:" label="Phone" handleChange={handleContactsChange} placeholder='977989782939*'/>
      <Input value={value} type="text" id="mailto:" label="Email" handleChange={handleContactsChange} placeholder='john.allen@gmail.com'/>
      <Input value={value} type="text" id="text" label="Location" handleChange={handleContactsChange} placeholder='Austin, TX'/>
    </div>
  </div>
)}

export default About;