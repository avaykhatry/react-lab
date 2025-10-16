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
            <Link to='/result'>Result</Link>
        </nav>
    )
}