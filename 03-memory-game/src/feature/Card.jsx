import styles from './Card.module.css';

function Card({ src, handleClick, handleImageLoad }) {

    return (
        <div
            onClick={handleClick}
            className={styles.imageContainer}
        >
            <img 
                src={src}
                alt="card"
                loading="lazy"
                onLoad={handleImageLoad}
                style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                }}
            />
        </div>
    )
}

export default Card;