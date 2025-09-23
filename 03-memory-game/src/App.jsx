import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState("");
  const [highScore, setHighScore] = useState("");

  return (
    <>
      <div>Current score: {score}</div>
      <div>Highest score: {highScore}</div>
    </>
  )
}

export default App
