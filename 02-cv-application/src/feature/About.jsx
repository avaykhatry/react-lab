import styles from '../App.module.css'
import { Input } from '../App'

export function About( {setAbout, about} ) {

  function handleInputChange(e){
    setAbout({
      ...about,
      [e.target.id]: e.target.value
    });
  }
  return (  
      <form id="about" className={styles.about}>
        <Input handleChange={handleInputChange} type="text" id="name" label="Full name" />
        <Input handleChange={handleInputChange} type="email" id="email" label="Email" />
        <Input handleChange={handleInputChange} type="tel" id="phone" label="Phone" placeholder={'+977 984*******'} />
        <Input handleChange={handleInputChange} type="text" id="location" label="Location" />
      </form>
  );
}