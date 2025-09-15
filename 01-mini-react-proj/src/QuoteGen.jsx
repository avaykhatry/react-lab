import { useEffect, useState } from "react";
import { Button } from "./App";

export default function Quote() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((json) => (
        setData(json)
    ))
      .catch((error) => console.error(error));
  }, []);

  function handleClick() {
    return console.log(data);
  }

  return (
    <div className="box-border">
      <h1 className="text-6xl">Quote Generator</h1>
      <Button onClick={() => handleClick} className={`my-8`}>
        Get me quote
      </Button>
      {data}
    </div>
  );
}
