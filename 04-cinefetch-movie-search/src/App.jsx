import './App.css'
import MovieCard from './components/MovieCard'

import Home from './pages/Home'
function App() {
  return <div>
      <MovieCard movie={{title: "Harry Potter", release_date: "2025"}}/>
    <Home />
  </div>
  
}

export default App
