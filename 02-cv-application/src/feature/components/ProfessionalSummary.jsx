import styles from '../../styles/App.module.css'
import { Input } from '../../components/Input';
import { useState } from 'react';

export function ProfessionalSummary({ setSummary }) {
  
  function handleChange(e) {
    setSummary(e.target.value);
  }

  return (
    <>
      <form id="prof-summary" className={styles.professionalSummary}>
        <Input
          handleChange={handleChange}
          type="text"
          id="professional-summary"
          label="Professional Summary"
        />
      </form>
    </>
  );
}