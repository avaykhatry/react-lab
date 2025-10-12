import { CvContext } from "./CvContext";
import { cvObject } from "../services/data";
import { useState } from "react";

export function CvProvider({ children }) {
    const [cvDetails, setCvDetails] = useState(cvObject);

    return (
        <CvContext.Provider value={{ cvDetails, setCvDetails}}>
            {children} 
        </CvContext.Provider>
    );
}

