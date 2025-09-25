import MovieCard from "../components/MovieCard";

function Home() {
    const movies = [
        {
            id: crypto.randomUUID(),
            title: "Harry Potter",
            release_date: "2004"
        },
        {
            id: crypto.randomUUID(),
            title: "Harry Potter 2",
            release_date: "2006"
        },
        {
            id: crypto.randomUUID(),
            title: "Harry Potter 3",
            release_date: "2008"
        }
    ]

    const handleSearch = () => {
        alert("search button clicked!");
    };

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text" 
                placeholder="search movies here..." className="search-input"
            />
            <button type="submit" className="search-button">
                Search
            </button>
        </form>
        <div className="movies-grid">
            {movies.map((movie) => 
                <MovieCard movie={movie} key={movie.id} />
            )}
        </div>
    </div>
}

export default Home;