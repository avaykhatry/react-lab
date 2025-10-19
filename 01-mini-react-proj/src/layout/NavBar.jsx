import { Link } from "react-router-dom";
import Counter from "../pages/Counter";
import ToDoList from "../pages/ToDoList";
import styles from "./NavBar.module.css";

export function NavBar() {
    return (
        <div className={styles.navbar}>
            <Link to='/counter'>Click The Count</Link>
            <Link to='/todo'>Track The Tasks</Link>
            <Link to='/colorpicker'>Color Picker</Link>
            <Link to='/quotegen'>Quote Generator</Link>
        </div>
    )
}