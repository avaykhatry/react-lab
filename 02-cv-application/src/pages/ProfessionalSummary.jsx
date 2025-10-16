import styles from '../styles/App.module.css'
import { Input } from '../components/Input';
import { useState } from 'react';
import { useCv } from '../contexts/CvContext';

function ProfessionalSummary() {
  const {setCvDetails} = useCv();
  const [value, setValue] = useState("");

  function handleChange(e) {
    setValue(e.target.value)
    setCvDetails(cvDetails => ({
      ...cvDetails,
      summary : value
    }))
  }

  return (
    <div>
        <h2 className={styles.title}>
          Professional Summary
        </h2>
        <div className={styles.section}>
          <Input
            value={value}
            handleChange={handleChange}
            type="text"
            id="professional-summary"
            label="Professional Summary"
            style={{
              width: "422%",
            }}
          />
      </div>
    </div>
  );
}

export default ProfessionalSummary;