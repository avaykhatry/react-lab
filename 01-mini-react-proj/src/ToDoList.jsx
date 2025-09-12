import { useState, useEffect } from "react";


// localStorage Component
// start
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

// end

export default function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [nextId, setNextId] = useLocalStorage('nextId', 0);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function addItem() {
      setTasks([...tasks, { id: nextId, task }]); // here, task is shorthand for task:task, since for the matching key and variable name, we can use shorthand
      setNextId(nextId + 1);
  }
  
  function handleBtnClick() {
    addItem();
    setTask("");
  }

  return (
    <>
      <h1 className="text-6xl underline py-6 text-center">Task Tracker</h1>
      <div className="tasks">
        <ul className="p-4">
          {tasks.map((t) => (
            <li key={t.id} className="flex gap-8 justify-center items-center">
              <input type="checkbox" />
             {t.task}
              <button
                className="cursor-pointer"
                onClick={() => {
                  setTasks(tasks.filter((tsk) => tsk.id !== t.id));
                }}
              >
                <img src="src/assets/remove-minus.svg" width="28px" alt="" />
              </button>
            </li>
          ))}
        </ul>
        <ul>
          <li>
            <input
              onChange={handleChange}
              className="border px-2 rounded-l-xl"
              type="text"
              placeholder="Add a new task"
              autoFocus={true}
              value={task}
            />
            <button
              onClick={handleBtnClick}
              className="cursor-pointer border px-1 rounded-r-xl" disabled={task.length === 0}
            >
              Add Task
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
