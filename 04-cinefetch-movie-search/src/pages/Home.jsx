import { useState } from "react";
import MovieCard from "../components/MovieCard";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {
            id: crypto.randomUUID(),
            title: "Harry Potter",
            release_date: "2004"
        },
        {
            id: crypto.randomUUID(),
            title: "the good, bad and the ugly",
            release_date: "2006"
        },
        {
            id: crypto.randomUUID(),
            title: "goblin",
            release_date: "2008"
        }
    ]

    const handleSearch = (e) => {
        alert(searchQuery)
        //to prevent default page refreshing behavior of submit button
        e.preventDefault()
        setSearchQuery("")
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                onChange={(e) => setSearchQuery(e.target.value)}
                value={searchQuery}
                type="text" 
                placeholder="search movies here..." className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => 
                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && <MovieCard movie={movie} key={movie.id} />
            )}
        </div>
    </div>
}

export default Home;