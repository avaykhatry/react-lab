import { useScore } from "../context/ScoreContext";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import { shuffleArray } from "../services/shuffleArray";
import styles from './WinModal.module.css';

function ScoreBoard() {
    const [images, setImages] = useState([]);
    const { score, setScore, setBestScore, selectedMode } = useScore();
    const [selected, setSelected] = useState([]);
    const dialogRef = useRef(null);
    const [hasShown, setHasShown] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    let amount;

    switch (selectedMode) {
        case 'easy':
            amount = 9;
            break;
        
        case 'medium':
            amount = 12;
            break;

        case 'hard':
            amount = 15;
            break;

        default:
            break;
    }

    useEffect(() => {
        let isMounted = true;
        setIsLoading(false);

        fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
            .then(response => response.json())
            .then(data => {
                if(isMounted) {
                    setImages(data.message);
                    console.log(data);
                    setIsLoading(true);
                }
            })
            .catch(error => console.error(error));
            
        return () => isMounted = false;
    }, [amount]);

    useEffect(() => {
        if (!dialogRef.current) return;
        if (score === 0) {
            setSelected([]);
            setHasShown(false);
        } else if (score === amount && !hasShown) {
            dialogRef.current.showModal();
            setHasShown(true);
        }
    }, [score, amount, hasShown]);

    // useEffect(() => {
    //     if (bestScore === amount) {
    //         dialog.showModal();
    //     }
    // }, [bestScore, amount]);

    return (
        <>
            {!isLoading ? 'loading...' : images?.map(i => 
                <Card key={i} src={i} handleClick={() => handleClick(i)} />
            )}
                ? <img 
                    src="src/assets/load.svg"
                    width="32px"
                    height="auto" 
                    alt="load alt image" 
                    className={styles.loadingIcon}
                /> 
                : images.map(i => 
                    <Card
                        key={i} 
                        src={i}
                        handleClick={() => handleClick(i)}
                        handleImageLoad={() => {
                            setLoadCount(prev => prev + 1)
                            console.log('image loaded!');
                        }}
                    />
                )
            }
            <dialog className={styles.dialogBox} ref={dialogRef} id="favDialog">
                <form method='dialog'>
                    <div className={styles.dialogBoxInner}>
                        <p>
                            Congrats! You won! 🏆
                        </p>
                        <button onClick={() => {
                            dialogRef.current.close()
                            setScore(0);
                            }}>
                            close
                        </button>
                    </div>
                </form>
            </dialog>
        </>
    )

    // function handleClick(i) {
    //     setImages( prev => shuffleArray(prev));
    //     setScore(prev => {
    //         const isSelected = selected.some(s => s.id === i);
    //         const newScore = isSelected ? 0 : prev + 1;
        
    //         setSelected(prev => (newScore === 0 ? [] :
    //             [
    //                 ...prev,
    //                 {
    //                     id: i,
    //                     value: i
    //                 }
    //             ]
    //         ))
    //         return newScore;
    //     })
    // };

    function handleClick(i) {
        setImages(prev => shuffleArray(prev));
        setScore(prev => (
            selected.some( select => select.id === i) 
            ? handleBestScore()
            : prev + 1
        ));
        console.log(selected);
        handleSelected(i);
    }

    function handleSelected(i) {
        setSelected(prev => [
            ...prev,
            {
                id: i,
                value: i,
            }
        ]);
    }

    function handleBestScore() {
        setBestScore(prev => 
            prev < selected.length ? (localStorage.setItem('bestScore', selected.length), selected.length) : prev)
        setScore(0)
    }
}

export default ScoreBoard;