import { Button } from "./App";

export default function ColorPick() {
  function handleClick(clr) {
    const currentClr =
      document.documentElement.style.getPropertyValue("--bg-color");
    currentClr === clr
      ? document.documentElement.style.setProperty("--bg-color", "#242424")
      : document.documentElement.style.setProperty("--bg-color", clr);
  }

  return (
    <div className={`flex justify-center gap-8 items-center`}>
      <Button onClick={() => handleClick("red")}>Red</Button>
      <Button onClick={() => handleClick("blue")}>Blue</Button>
      <Button onClick={() => handleClick("green")}>Green</Button>
    </div>
  );
}
