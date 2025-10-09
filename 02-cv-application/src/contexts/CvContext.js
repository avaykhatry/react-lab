import { createContext, useContext } from "react";

export const CvContext = createContext();

export function useCv() {
    return useContext(CvContext);
}