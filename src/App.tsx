import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { Task } from './Interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    } else {
      setDeadline(+event.target.value);
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  }

  return (
    <div className="App">
      <div className="header">
        <div>
          <div className="input-container">
            <input
              type="text"
              name="task"
              placeholder="Task"
              value={task}
              onChange={handleChange}
            />
            <input
              type="number"
              name="deadline"
              placeholder="Deadline (in days)"
              value={deadline}
              onChange={handleChange}
            />
          </div>
          <div className="button-container">
            <div>
              <button onClick={addTask}>Add Task</button>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-list">
        {todoList.map((task: Task, key: number) => <TodoTask key={key} task={task} />)}
      </div>
    </div>
  );
}

export default App;
