import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.navbar} style={{ display: "flex", justifyContent: 'center', alignItems: "center", gap: '1rem', background: 'var(--bg)',  padding: "2rem" }}>
            <Link to='/'>About</Link>
            <Link to='/professionalsummary'>Professional Summary</Link>
            <Link to='/education'>Education</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/result'><button className={styles.submitButton}>Submit<img src="/src/assets/form-next-link.svg" width="20px" height="20px" alt="submit" /></button></Link>
        </nav>
    )
}