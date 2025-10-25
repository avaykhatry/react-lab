import './styles/App.css'
import Header from './layouts/Header'
import Card from './feature/Card'
import ScoreBoard from './feature/ScoreBoard'

function App() {
  
  return (
    <>
      <Header />
      <div className="body">
        <ScoreBoard />
      </div>
    </>
  )
}

export default App
