import styles from '../styles/App.module.css'
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { CvContext, useCv } from '../contexts/CvContext';
import { useState } from 'react';


function Skills() {
    const {cvDetails, setCvDetails} = useCv();
    const [value, setValue] = useState("");

    function handleChange(e) {
        setValue(e.target.value);
    }

    function handleAddClick() {
        if (!value.trim()) return;
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
        setValue("");
    }

    return (
        <>
            <h2 className={styles.title}>Skills</h2>
                <section className={styles.section}>
                    <div style={{display: "flex", alignItems: "center" }}>
                        <Input value={value} label="Skill" id="skills" placeholder="React.js" handleChange={handleChange} type="text"
                        style={{
                            borderTopRightRadius: "0px",
                            borderBottomRightRadius: "0px",
                            flex: 1,
                        }}
                        />
                        <button
                            style={{ 
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "6px",
                                cursor: "pointer",
                                background: "var(--secondary)",
                                borderRadius: "0",
                                border: "none",
                                marginTop: "0.6rem",
                                padding: "10px 16px",
                                borderTopRightRadius: "6px",
                                borderBottomRightRadius: "6px",

                            }} 
                            onClick={handleAddClick}>
                                <div>
                                    Add Skill
                                </div>
                                <img src="src/assets/add.svg" width="20px" height="20px" alt="add" />
                        </button>
                    </div>
                    <div className={styles.inner}>
                        <ul className={styles.skillsList}>
                        {cvDetails.skills.map((skill) => (
                            <li className={styles.skillsListInner} key={skill.id}>
                                {skill.value}
                                    <img style={{cursor: "pointer"}}
                                    onClick={() =>
                                        setCvDetails(cvDetails => ({
                                            ...cvDetails,
                                            skills: cvDetails.skills.filter(item => 
                                                item.id !== skill.id
                                            )
                                        }))
                                    } 
                                    src="src/assets/cross.svg" width="24px" height="24px" alt="" />
                            </li>
                        ))}
                        </ul>
                    </div>
                </section>
        </>
    )
}

export default Skills;