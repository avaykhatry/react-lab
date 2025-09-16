import './App.css'

  function Input(props) {
    return(
      <>
      <input id={props.id} type={props.type} />
      <label for={props.for}>{props.name}</label>
      </>
    )
  }

  
function App() {
  

  return (
    <>
      <h1>Build Your CV</h1>
      <form>
        <Input type='text' id="name" for="name" name="Name"/>
        <Input type='email' id='email' for='email' name="Email"/>
        <Input type="tel" id='phone' for='phone' name="Phone"/>
      </form>
    </>
  )
}

export default App
