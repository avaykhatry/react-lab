// import { useScore } from "../context/ScoreContext";
import Card from "./Card";
import { useEffect, useState } from "react";

function ScoreBoard() {
    const [images, setImages] = useState("");
    // const { score, setScore } = useScore();

    useEffect(() => {
        fetch('https://dog.ceo/api/breed/akita/images')
        .then(response => response.json())
        .then(data => {
            setImages(data)
            console.log(data)
        })
        .catch(error => console.error(error))
    }, []);


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