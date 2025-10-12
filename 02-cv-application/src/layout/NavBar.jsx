import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav className="navbar" style={{ display: "flex", justifyContent: 'center', gap: '1rem', background: 'var(--bg)',  padding: "1rem 2rem", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
            <Link to='/'>About</Link>
            <Link to='/professionalsummary'>Professional Summary</Link>
            <Link to='/education'>Education</Link>
            <Link to='/experience'>Experience</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/result'>Result</Link>
        </nav>
    )
}