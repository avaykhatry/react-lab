import styles from '../styles/App.module.css'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { CvContext, useCv } from '../contexts/CvContext';
import { useState } from 'react';


function Skills() {
    const {cvDetails, setCvDetails} = useCv();
    const [value, setValue] = useState("");


    function handleAddClick() {
        setCvDetails(cvDetails => ({
            ...cvDetails,
            skills: [
                ...cvDetails.skills,
                {
                    id: crypto.randomUUID(),
                    value: value, //shorthand syntax: value,
                }
            ]
        }))
    }

    return (
        <>
            <h2>Skills</h2>
            <section className={styles.section}>
                <Input value={value} id="skills" handleChange={e => setValue(e.target.value)} type="text"/>
                <Button handleClick={handleAddClick}>
                    Add Skill
                </Button>
                <div className={styles.title}>
                    SKILLS
                </div>
                <div className={styles.inner}>
                    <ul className={styles.skillsList}>
                    {cvDetails.skills.map((skill) => (
                        <li className={styles.skillsListInner} key={skill.id}>
                            {skill.value}
                            <button className={styles.skillsButton} onClick={() =>
                                setCvDetails(cvDetails => ({
                                    ...cvDetails,
                                    skills: cvDetails.skills.filter(item => 
                                        item.id !== skill.id
                                    )
                                }))
                            }>
                                <img src="src/assets/cross.svg" width="24px" height="24px" alt="" />
                            </button>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Skills;