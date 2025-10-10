import About from "./feature/components/About";
import NavBar from "./feature/components/NavBar";
import ProfessionalSummary from "./feature/components/ProfessionalSummary";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Education from "./feature/components/Education";
import Experience from "./feature/components/Experience";
import Skills from "./feature/components/Skills";
import Cv from "./feature/components/Cv";

function App() {
  return <div className="main-content">
    <NavBar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/professionalsummary" element={<ProfessionalSummary />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/result" element={<Cv />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
}

export default App;