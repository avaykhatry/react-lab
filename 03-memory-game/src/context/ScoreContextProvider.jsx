import { useState } from "react";
import { ScoreContext } from "./ScoreContext";

export function ScoreContextProvider({ children }){
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(!localStorage.getItem('bestScore') ? 0 : localStorage.getItem('bestScore'));
    const [selectedMode, setSelectedMode] = useState('easy');

    return (
        <ScoreContext.Provider value={{ score, setScore, bestScore, setBestScore, selectedMode, setSelectedMode }}>
            {children}
        </ScoreContext.Provider>
    )
}