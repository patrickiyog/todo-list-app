import * as React from 'react';
import { TaskContext } from './context/TaskContext';
import './App.css';
import { Task } from './interfaces/Task';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

const App: React.FC = () => {

  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <div className="left-side">Left</div>
        <div className="center">
          <TaskList />
          <TaskForm />
        </div>
        <div className="right-side">Right</div>
      </div>
    </TaskContext.Provider>
  );

}

export default App;