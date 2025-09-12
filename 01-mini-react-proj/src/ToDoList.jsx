import { useState, useEffect } from 'react';

let nextId = 0;

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initialValue;
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]);

  return [value, setValue];
}

export default function ToDoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useLocalStorage('tasks', []);

  return (
    <>
      <h1 className="text-6xl underline py-6 text-center">Task Tracker</h1>
      <div className="tasks">
        <ul className='p-4'>
            {tasks.map((t) => (
                <div className='flex gap-8 justify-center items-center'>
                    <input className='block' type="checkbox" />
                    <li key={t.id}>{t.task}</li>
                    <button className='cursor-pointer' onClick={() => {
                        setTasks(
                            tasks.filter(tsk => tsk.id !== t.id)
                        );
                    }}><img src="src/assets/remove-minus.svg" width="28px" alt="" /></button>
                </div>
            )) 
            }
        </ul>
        <ul>
          <li>
            <input
            onChange={e => setTask(e.target.value)}
              className="border px-2 rounded-l-xl"
              type="text"
              placeholder="Add a new task" autoFocus
              value={task}
            />
            <button onClick={() => {
                setTasks([...tasks, { id: nextId++, task: task}])
            }} className='cursor-pointer border px-1 rounded-r-xl'>Add Task</button>
          </li>
        </ul>
      </div>
    </>
  );
}
