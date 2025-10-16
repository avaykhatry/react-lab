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
        <div key={experience.id} className={styles.section}>
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
          <div style={{display: "flex", alignItems: "center"}}>
            <Input
              type='text'
              id='description'
              label='New Description'
              placeholder='Built multiple proj...'
              value={detailValue}
              handleChange={e => setDetailValue(e.target.value)}
            />
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                marginTop: "0.6rem",
                padding: "10px 16px",
                cursor: "pointer",
                background: "var(--secondary)",
                borderRadius: "0",
                border: "none",
                borderTopRightRadius: "6px",
                borderBottomRightRadius: "6px",
              }} onClick={() => handleAddDescription(experience.id)}>
              Add
              <img src="src/assets/add.svg" width="20px" height="20px" alt="" />
            </button>
          </div>
          
          <ul className={styles.descriptionList}>
            {experience.description.map(desc => (
              <li className={styles.descriptionListInner} key={desc.id}>
                {desc.detail}
                  <img style={{cursor: "pointer"}} onClick={() => handleDeleteDescription(experience.id, desc.id)} src="src/assets/cross.svg" height="24px" width="24px" alt="cross" />
              </li>
            ))}
          </ul>
          <Button
            handleClick={() => handleDeleteExperience(experience.id)}
            style={{
              background: "var(--acc)",
              color: "var(--surface)"
            }}            
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
              }}>
              <p>Delete this experience</p>
              <img src="/src/assets/delete.svg" width="22px" height="22px" alt="" 
                style={{
                  filter: "invert(0.9)"
                }}
              />
            </div>
          </Button>
        </div>
      ))}
      <Button 
        style={{
          display: "flex",
          margin: "2rem auto",
          background: "var(--secondary)",
        }} handleClick={handleAddExperienceButton}>
        <div
          style={{ 
            display: "flex", 
            alignItems: "center",
          }}>
          <p>Add Experience</p>
          <img src="/src/assets/add.svg" width="22px" height="22px" alt="add" />
        </div>
      </Button>
      
    </>
  )
}

export default Experience;