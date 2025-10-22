import { createContext, useContext } from "react"

export const ScoreContext = createContext();

export function useScore() {
    return useContext(ScoreContext);
}