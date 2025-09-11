import { useState } from 'react';

let nextId = 0;

export default function ToDoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

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
