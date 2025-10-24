import { useScore } from '../context/ScoreContext';
import styles from './Header.module.css';

export default function Header() {

    const { score, bestScore, selectedMode, setSelectedMode } = useScore();
    

    return (
        <div className={styles.header}>
            <h1 className={styles.logo}>
                Pochita
            </h1>
            <div className={styles.gameMode}>
                <label>
                    Choose game mode
                        <select name="gameMode" value={selectedMode} onChange={e => setSelectedMode(e.target.value)}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                </label>
            </div>
            <div className={styles.scoreBoard}>
                <div>
                    {`Current score: ${score}`}
                </div>
                <div>
                    {`Highest score: ${bestScore}`}
                </div>
            </div>
            {console.log(`current mode: ${selectedMode}`)}
        </div>
    )
}