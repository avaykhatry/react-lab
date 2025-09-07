import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import randomLogo from '../public/random-svgrepo-com.svg'
import "./App.css";

function MyButton({ info, onClick }) {
  return (
  <button onClick={onClick} className="border-1 cursor-pointer px-2 rounded-md my-12">{info.name}</button>
  );

}

export default function App() {
  let [count, setCount] = useState(0);
  return (
    <>
    <MyButton onClick={() => setCount(0)} info={{name: "Reset"}} />
      <div className="text-9xl p-12">{count}</div>
      <div className="flex gap-36 justify-center items-center">
      <MyButton onClick={() => setCount(count + 1)} info={{name: 'Increase'}} />
      <MyButton onClick={() => setCount(count - 1)} info={{name: 'Decrease'}} />
      </div>
    </>
  );
}
