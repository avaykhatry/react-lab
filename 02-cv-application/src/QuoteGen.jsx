import { useEffect, useState } from "react";
import { Button } from "./App";

export default function Quote() {
  const [quote, setQuote] = useState(null);
  const [newq, setNewq] = useState(null);

  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await fetch("https://dummyjson.com/quotes");
        const data = await response.json();
        setQuote(data);
      } catch {
        const error = console.error(error);
      }
    }
    fetchApi();
  }, []);

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function handleClick(num) {
    let position = getRandomInt(num);
    let myQuote = quote.quotes[position].quote;
    setNewq(myQuote);
  }

  
  return (
      <>
      <Button onClick={() => handleClick(quote.quotes.length)}>Get a quote</Button>
    {newq === null && 'loading...'}      
<h1>{newq}</h1>
    </>
  );
}
