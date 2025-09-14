import { useState } from "react"
import { Button } from "./App"



export default function ColorPick() {
    const [color, setColor] = useState(null);

    
    const colors = {
        red: 'bg-red-500',
        blue: 'bg-blue-500',
        pink: 'bg-pink-500',
        green: 'bg-green-500',
        amber: 'bg-amber-500',
    }
    
    function handleClick(clr) {
        setColor((color) => color === colors[clr] ? null : colors[clr]);
    }

    return(
        <div className={`${color} flex justify-center gap-8 items-center`}>
            <Button onClick={() => handleClick('red')}>Red</Button>
            <Button onClick={() => handleClick('blue')}>Blue</Button>
            <Button onClick={() => handleClick('green')}>Green</Button>
            <Button onClick={() => handleClick('pink')}>Pink</Button>
            <Button onClick={() => handleClick('amber')}>Amber</Button>
            {console.log(color)}
        </div>
    )
}