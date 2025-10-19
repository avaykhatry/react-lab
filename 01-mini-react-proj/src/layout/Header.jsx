import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
    const [visiblity, setVisibility] = useState(false);

    function handleAboutClick() {
        setVisibility(prev => !prev);
    }

    return (
        <div className={styles.header}>
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
                    className={styles.theme}
                >
                        <img 
                            src="src/assets/theme.svg" 
                            height="28px" 
                            width="28px" 
                            alt="theme" 
                        />
                </div>
            </div>
            {visiblity && <p className={styles.aboutText}>This mini app contains all of my basic react projects that I developed during my learning endeavor.</p> }
        </div>
    )
}

export default Header;