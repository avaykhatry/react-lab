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
            {images?.message?.map(i => 
                <Card key={i} src={i} />
            )}
            {/* {console.log(images?.message[0])} */}
        </>
    )
}

export default ScoreBoard;