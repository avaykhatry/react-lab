import './App.css'

function Text({ display="hello world" }) {
  return(
    <div>
      <p>{display}</p>
    </div>
  )
}
function App() {
  return (
    <div>
      <Text />
      <Text display='hi'  />
    </div>
  )
}

export default App
