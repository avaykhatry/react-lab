import Counter from "./pages/Counter";
import ToDoList from "./pages/ToDoList";
import ColorPick from "./pages/ColorPicker";
import Quote from "./pages/QuoteGen";
import ToggleTheme from "./pages/ThemeToggle";
import { Route, Routes } from "react-router-dom";
import { NavBar } from "./layout/NavBar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

export default function App() {

  return (
      // <div className="container p-8 flex flex-col gap-8">
      //   {view === null && (
      //     <>
      //     <Button view={view} onClick={() => setView('counter')}>Click The Count</Button>
      //     <Button view={view} onClick={() => setView('todo')}>Track The Tasks</Button>
      //     <Button view={view} onClick={() => setView('colorpicker')}>Color Picker</Button>
      //     <Button view={view} onClick={() => setView('quotegen')}>Quote Generator</Button>
      //     <Button view={view} onClick={() => setView('theme')}>
      //       Toggle Theme
      //     </Button>
      //     </>

      //   )}
      //   {view !== null && (
      //     <>
      //     <Button view={view} onClick={() => setView(null)}>Home</Button>
      //     </>
      //   )}

      //   {
      //     view === 'counter' ? <Counter /> 
      //     : view === 'todo' ? <ToDoList /> 
      //     : view === 'colorpicker' ? <ColorPick /> 
      //     : view === 'quotegen' ? <Quote /> 
      //     : view === 'theme' ? <ToggleTheme />
      //     : null 
      //   }
      // </div>
      <div>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/counter' element={<Counter />} />
          <Route path="/colorpicker" element={<ColorPick />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/quotegen" element={<Quote />} />
        </Routes>
        <Footer />
      </div>
  );
}
