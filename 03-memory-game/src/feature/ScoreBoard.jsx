// import { useScore } from "../context/ScoreContext";
import Card from "./Card";
import { useEffect, useState } from "react";

function ScoreBoard() {
    const [images, setImages] = useState("");
    // const { score, setScore } = useScore();

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/akita/images')
        fetch(`https://dog.ceo/api/breeds/image/random/${amount}`)
        .then(response => response.json())
        .then(data => {
            setImages(data.message)
            console.log(data)
        })
        .catch(error => console.error(error))
    }, [amount]);


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