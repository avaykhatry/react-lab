import { useScore } from "../context/ScoreContext";
import Card from "./Card";
import { useEffect, useState } from "react";
import { shuffleArray } from "../services/shuffleArray";

function ScoreBoard() {
    const [images, setImages] = useState([]);
    const { score, setScore, setBestScore, selectedMode } = useScore();
    const [selected, setSelected] = useState([]);
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
        fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
        .then(response => response.json())
        .then(data => {
            setImages(data.message)
            console.log(data)
        })
        .catch(error => console.error(error))
    }, [amount]);

    useEffect(() => {
        if (score === 0) {
            setSelected([]);
        }
    }, [score]);

    return (
        <>
            {images?.map(i => 
                <Card key={i} src={i} handleClick={() => handleClick(i)} />
            )}
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
}

export default ScoreBoard;