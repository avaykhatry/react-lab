import { Input } from "../../components/Input"
import styles from '../../styles/App.module.css'

function Education({ setValue, value, setCvDetails }) {

  function handleChange(e) {
    setValue(e.target.value)
    setCvDetails(cvDetails => (
      {
        ...cvDetails,
        education : cvDetails.education.map(edu => (
          {...edu, [e.target.id] : e.target.value}
        ))
      }
    ))
  }
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
          handleChange={handleChange}
        />
        <Input
          type='text'
          label='School Name'
          id='schoolName'
          value={value}
          placeholder='The University of ...'
          handleChange={handleChange}
        />
        <Input
          type='number'
          label='GPA'
          id='gpa'
          value={value}
          placeholder='3.95'
          handleChange={handleChange}
        />
        <Input
          type='text'
          label='Start Date'
          id='startDate'
          value={value}
          placeholder='Jan 2022'
          handleChange={handleChange}
        />
        <Input
          type='text'
          label='Grad Date'
          id='endDate'
          value={value}
          placeholder='Dec 2023'
          handleChange={handleChange}
        />
      </div>
    </>
  )
}

export default Education;