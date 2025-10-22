function Card({ src, handleClick }) {

    return (
        <div
            style = {{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                cursor: "pointer",
            }}
        >
            <img 
                src={src}
                alt="card"
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                onClick={handleClick}
            />
        </div>
    )
}

export default Card;