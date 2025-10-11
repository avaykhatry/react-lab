import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import ProfessionalSummary from "./ProfessionalSummary";
import Skills from "./Skills";
import Cv from "./Cv";
import { CvProvider } from "../contexts/CvProvider";

function Home() {

    return(
        <CvProvider>
            <About />
            <ProfessionalSummary />
            <Education />
            <Experience />
            <Skills />
            <Cv />
        </CvProvider>
    )
}

export default Home;