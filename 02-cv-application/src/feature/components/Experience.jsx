import styles from '../../styles/App.module.css'
import { Input } from '../../components/Input/Input'
import { useState } from 'react'

function Experience() {
  const [value, setValue] = useState('');

  return (
    <>
      <h2 className={styles.title}>Experience</h2>
      <div className="section">
        <Input
          type='text'
          id=''
          label=''
          placeholder=''
          value={value}
          handleChange={e => setValue(e.target.value)}
        />
      </div>
    </>
  )
}

export default Experience;