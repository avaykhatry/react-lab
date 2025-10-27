import About from "./pages/About";
import NavBar from "./layout/NavBar";
import ProfessionalSummary from "./pages/ProfessionalSummary";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Cv from "./pages/Cv";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return <div className="main-content">
    {/* <Header /> */}
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
    {/* <Footer /> */}
  </div>
}

export default App;