import About from "../feature/components/About";
import Education from "../feature/components/Education";
import Experience from "../feature/components/Experience";
import ProfessionalSummary from "../feature/components/ProfessionalSummary";
import Skills from "../feature/components/Skills";
import Cv from "../feature/components/Cv";
import { cvDetails } from "../services/data";
import { useState } from "react";

function Home() {
    const [value, setValue] = useState("");
    const [cv, setCv] = useState(cvDetails);

    return(
        <>
            <About setCvDetails={setCv} value={value} setValue={setValue}/>
            <ProfessionalSummary setCvDetails={setCv} value={value} setValue={setValue}/>
            <Experience setCvDetails={setCv} value={value} setValue={setValue}/>
            {/* <About />
            <Education />
            <Experience /> */}
            <Skills cvDetails={cv} setCvDetails={setCv} value={value} setValue={setValue} />
            <Cv cvDetails={cv} />
        </>
    )
}

export default Home;