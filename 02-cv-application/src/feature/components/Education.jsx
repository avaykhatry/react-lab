import { useState } from "react";
import { Input } from "../../components/Input/Input"
import styles from '../../styles/App.module.css'

function Education() {
  const [value, setValue] = useState('');

  return (
    <>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.section}>
        <Input
          type='text'
          label='Level'
          id='level'
          value={value}
          placeholder='M.S., Informati...'
          handleChange={e => setValue(e.target.value)}
        />
        <Input
          type='text'
          label='School Name'
          id='school'
          value={value}
          placeholder='The University of ...'
          handleChange={e => setValue(e.target.value)}
        />
        <Input
          type='number'
          label='GPA'
          id='gpa'
          value={value}
          placeholder='3.95'
          handleChange={e => setValue(e.target.value)}
        />
        <Input
          type='text'
          label='Start Date'
          id='sdate'
          value={value}
          placeholder='Jan 2022'
          handleChange={e => setValue(e.target.value)}
        />
        <Input
          type='text'
          label='Grad Date'
          id='gdate'
          value={value}
          placeholder='Dec 2023'
          handleChange={e => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default Education;