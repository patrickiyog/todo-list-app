import React, { FC, useState, ChangeEvent } from 'react';
import './App.css';
import TodoTask from './components/TodoTask';
import { Task } from './Interfaces';

const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);

  }

  const addTask = (): void => {
    const newTask = { taskName: task, completed: false };
    setTodoList([...todoList, newTask]);
    setTask("");
  }

  return (
    <div className="App">
      <div className="header">
        <div className="input-container">
          <input
            type="text"
            name="task"
            placeholder="What do you need to do?"
            value={task}
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        <div className="button-container">
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="todo-list">
        {todoList.map((task: Task, key: number) =>
          <TodoTask
            key={key}
            task={task}
          />
        )}
      </div>
    </div>
  );
}

export default App;
