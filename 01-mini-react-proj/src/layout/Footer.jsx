import { useState } from "react";
import styles from './Footer.module.css';

function Footer() {
    const pages = [1, 2, 3, 4, 5];
    const [pageIndex, setPageIndex] = useState(0);
    const page = pages[pageIndex];

    return (
        <div className={styles.footer}>
            <button 
                className={styles.changePageButton} 
                onClick={changePage}
            >
                Change page
            </button>
            <p>Page: {page}</p>
        </div>
    )

    function changePage() {
        setPageIndex(prev => ((prev + 1) % pages.length));
    }
}

export default Footer;