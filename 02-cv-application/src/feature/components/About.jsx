import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import styles from "../../styles/App.module.css";

function About() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2 className={styles.title}>About</h2>
      <div className={styles.section}>
      <Input value={value} type="text" id='fullName' label="Full Name" handleChange={e => setValue(e.target.value)} placeholder="John Allen"/>
      <Input value={value} type="text" id="email" label="Email" handleChange={e => setValue(e.target.value)} placeholder='john.allen@gmail.com'/>
      <Input value={value} type="number" id="phone" label="Phone" handleChange={e => setValue(e.target.value)} placeholder='977989782939*'/>
    </div>
  </div>
)}

export default About;