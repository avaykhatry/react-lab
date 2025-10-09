import styles from '../../styles/App.module.css'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { CvContext, useCv } from '../../contexts/CvContext';
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
                        <li key={skill.id}>
                            {skill.value}
                            <Button handleClick={() =>
                                setCvDetails(cvDetails => ({
                                    ...cvDetails,
                                    skills: cvDetails.skills.filter(item => 
                                        item.id !== skill.id
                                    )
                                }))
                            }>
                                del
                            </Button>
                        </li>
                    ))}
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Skills;