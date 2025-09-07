import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import randomLogo from '../public/random-svgrepo-com.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='py-4 flex justify-end  items-center'>
          <img src={randomLogo} className="logo random w-14 mr-auto" alt="random logo" />
          <button className='hover:bg-red-300 border-1 px-2 rounded-md cursor-pointer' onClick={() => setCount(0)}>Reset</button>
      </div>
      <div className="count-log text-9xl py-24">
      {count}
      </div>
      <button className='hover:bg-red-300 border-1 px-2 rounded-md cursor-pointer' onClick={() => setCount(count + 1)}>Increment</button><br /><br />
      <button className='hover:bg-red-300 border-1 px-2 rounded-md cursor-pointer' onClick={() => setCount(count-1)}>Decrement</button>
    </>
  )
}

export default App
