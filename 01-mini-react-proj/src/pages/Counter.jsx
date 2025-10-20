import { useState, useEffect } from "react";
// import reactLogo from './assets/react.svg'
// import randomLogo from '../public/random-svgrepo-com.svg'
import "../styles/App.css";

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
    return stored
      ? JSON.parse(stored)
      : typeof firstValue === "function"
      ? firstValue()
      : firstValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default function Counter() {
  const [count, setCount] = useLocalStorage("count", 0);

  return (
    <>
      <MyButton onClick={() => setCount(0)} info={{ name: "Reset" }} />
      <div className="text-9xl p-12">{count}</div>
      <div className="flex gap-36 justify-center items-center">
        <MyButton
          onClick={() => setCount(count - 1)}
          info={{ name: "Decrease" }}
        />
        <MyButton
          onClick={() => setCount(count + 1)}
          info={{ name: "Increase" }}
        />
      </div>
    </>
  );
}
