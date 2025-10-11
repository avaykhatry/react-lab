import styles from '../styles/App.module.css'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { useState } from 'react'
import { useCv } from '../contexts/CvContext'

function Experience() {
  const {cvDetails, setCvDetails} = useCv();
  const [detailValue, setDetailValue] = useState("");

  function handleChange(e, expId) {
    const { id : field, value } = e.target

    setCvDetails(prev => ({
      ...prev,
      experiences : prev.experiences.map(exp => 
        exp.id === expId
        ? {
          ...exp,
          [field] : field === 'description' ? exp.description : value
        }
        : exp
      )
    }))
  }

  function handleAddDescription(expId) {
    if (!detailValue.trim()) return

    setCvDetails(prev => (
      {
        ...prev,
        experiences : prev.experiences.map(exp => 
          exp.id === expId
            ? {
              ...exp,
              description : [
                ...exp.description,
                {
                  id : crypto.randomUUID(),
                  detail : detailValue,
                }
              ]
            }
            : exp
        )
      }
    ));
    setDetailValue("");
  }

  function handleDeleteDescription(expId, descId) {
    setCvDetails(prev => ({
      ...prev,
      experiences : prev.experiences.map(exp => 
        exp.id === expId
        ? {
            ...exp,
            description : exp.description.filter(d => 
              d.id !== descId
            )
          } 
        : exp                          
      )
    }))
  }

  function handleAddExperienceButton() {
    setCvDetails(prev => ({
      ...prev,
      experiences : [ ...prev.experiences,
        {
          id : crypto.randomUUID(),
          organization : "",
          position : "",
          startDate : "",
          endDate : "",
          description: [],
        }
      ]
    }))
  }

  function handleDeleteExperience(expId){
    setCvDetails(prev => ({
      ...prev,
      experiences : prev.experiences.filter(exp => exp.id !== expId)
    }))
  }

  return (
    <>
      <h2 className={styles.title}>
        Experience
      </h2>
      {cvDetails.experiences.map(experience => (
        <div key={experience.id} className="section">
          <Input
            type='text'
            id='position'
            label='Position'
            placeholder='React Dev...'
            value={experience.position}
            handleChange={e => handleChange(e, experience.id)}
          />
          <Input
            type='text'
            id='organization'
            label='Organization'
            placeholder='Personal Proj...'
            value={experience.organization}
            handleChange={e => handleChange(e, experience.id)}
          />
          <Input
            type='text'
            id='startDate'
            label='Start Date'
            placeholder='Jan 2...'
            value={experience.startDate}
            handleChange={e => handleChange(e, experience.id)}
          />
          <Input
            type='text'
            id='endDate'
            label='End Date'
            placeholder='Pres...'
            value={experience.endDate}
            handleChange={e => handleChange(e, experience.id)}
          />
          <Input
            type='text'
            id='description'
            label='New Description'
            placeholder='Built multiple proj...'
            value={detailValue}
            handleChange={e => setDetailValue(e.target.value)}
          />
          <Button handleClick={() => handleAddDescription(experience.id)}>
            Add Description
          </Button>
          
          <ul className={styles.descriptionList}>
            {experience.description.map(desc => (
              <li key={desc.id}>
                {desc.detail}
                <button onClick={() => handleDeleteDescription(experience.id, desc.id)}>
                  del
                </button>
              </li>
            ))}
          </ul>

          <Button handleClick={() => handleDeleteExperience(experience.id)}>
            Delete Experience
          </Button>
        </div>
      ))}
      
      <Button handleClick={handleAddExperienceButton}>
        Add Experience
      </Button>
    </>
  )
}

export default Experience;