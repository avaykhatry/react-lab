import { useState } from "react";
import Counter from "./Counter";
import ToDoList from "./ToDoList";
import ColorPick from "./ColorPicker";
import Quote from "./QuoteGen";
import ToggleTheme from "./ThemeToggle";

export function Button({ onClick, children, className }) {
  return (
    <div>
      <button onClick={onClick} className={`border px-2 rounded-xl cursor-pointer ${className}`}>{children}</button>
    </div>
  );
}
// alt to above function
// export function Button({ children, ...props }) {
//   return (
//       <button {...props} className={` border px-2 rounded-xl cursor-pointer`}>{children}</button>
//   );
// }

export default function App() {
  const [view, setView] = useState(null);

  return (
      <div className="container p-8 flex flex-col gap-8">
        {view === null && (
          <>
          <Button view={view} onClick={() => setView('counter')}>Click The Count</Button>
          <Button view={view} onClick={() => setView('todo')}>Track The Tasks</Button>
          <Button view={view} onClick={() => setView('colorpicker')}>Color Picker</Button>
          <Button view={view} onClick={() => setView('quotegen')}>Quote Generator</Button>
          <Button view={view} onClick={() => setView('theme')}>
            Toggle Theme
          </Button>
          </>

        )}
        {view !== null && (
          <>
          <Button view={view} onClick={() => setView(null)}>Home</Button>
          </>
        )}

        {
          view === 'counter' ? <Counter /> 
          : view === 'todo' ? <ToDoList /> 
          : view === 'colorpicker' ? <ColorPick /> 
          : view === 'quotegen' ? <Quote /> 
          : view === 'theme' ? <ToggleTheme />
          : null 
        }
      </div>
  );
}
