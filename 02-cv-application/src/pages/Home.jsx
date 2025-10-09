import About from "../feature/components/About";
import Education from "../feature/components/Education";
import Experience from "../feature/components/Experience";
import ProfessionalSummary from "../feature/components/ProfessionalSummary";
import Skills from "../feature/components/Skills";
import Cv from "../feature/components/Cv";
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