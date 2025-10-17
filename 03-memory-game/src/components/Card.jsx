import { useState } from "react";

function Card() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div
            style = {{
                width: "220px",
                border: "2px solid #333",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "transform 0.2s ease",
                transform: clicked ? "scale(0.95)" : "scale(1)",
            }}
        >
        <img src="https://picsum.photos/300/200" alt="card"
            style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
            }}
        />
        <div
            style={{
                padding: "12px",
                backgroundColor: clicked ? "#222" : "#fff",
                color: clicked ? "#fff" : "#000",
                textAlign: "center",
                fontFamily: "sans-serif", 
            }}
            onClick={handleClick}
        >
            <h3 style={{ margin: "0 0 6px" }}></h3>
            <p style={{ margin: 0 }}>
                {clicked ? "You clicked me!" : "Tap to interact"}
            </p>
        </div>


        </div>
    )
}

export default Card;