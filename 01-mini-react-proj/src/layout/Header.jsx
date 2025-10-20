import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
    const [visiblity, setVisibility] = useState(false);
    const [theme, setTheme] = useState('dark');

    function handleAboutClick() {
        setVisibility(prev => !prev);
    }

    function toggleTheme() {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <div className={ theme === 'light' ? styles.headerLight : styles.headerDark}>
            <div className={styles.headerInner}>
                <div className={styles.logo}>
                    Mini Apps
                </div>
                <div
                    className={styles.about}
                    onClick={handleAboutClick}
                >
                   {visiblity ? "Hide" : "Show"} About
                </div>
                <div 
                    className={theme === 'light' ? styles.themeLight : styles.themeDark}
                    onClick={toggleTheme}
                >
                    <img 
                        src="src/assets/theme.svg"
                        height="28px" 
                        width="28px" 
                        alt="theme" 
                    />
                </div>
            </div>
            {visiblity && 
                <p className={styles.aboutText}>
                    This web app contains my react practice projects that I developed during my learning endeavor.
                </p>
            }
        </div>
    )
}

export default Header;