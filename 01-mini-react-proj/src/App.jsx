import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import randomLogo from '../public/random-svgrepo-com.svg'
import "./App.css";

function MyButton({ info, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border-1 cursor-pointer px-2 rounded-md my-12"
    >
      {info.name}
    </button>
  );
}

  function useLocalStorage(key, firstValue) {
    const [value, setValue] = useState(() => {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : firstValue;
    });

    useEffect(() => {
      localStorage.setItem('count', JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
  }

export default function App() {
  const [count, setCount] = useLocalStorage('count', 0);

  return (
    <>
      <MyButton onClick={() => setCount(0)} info={{ name: "Reset" }} />
      <div className="text-9xl p-12">{count}</div>
      <div className="flex gap-36 justify-center items-center">
        <MyButton
          onClick={() => setCount(count + 1)}
          info={{ name: "Increase" }}
        />
        <MyButton
          onClick={() => setCount(count - 1)}
          info={{ name: "Decrease" }}
        />
      </div>
    </>
  );
}
