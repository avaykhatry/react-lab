import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav style={{ display: "flex", gap: '1rem', padding: "1rem" }}>
            <Link to='/'>About</Link>
            <Link to='/professionalsummary'>Professional Summary</Link>
            <Link to='/education'>Education</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/result'>Result</Link>
        </nav>
    )
}