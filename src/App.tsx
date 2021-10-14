import * as React from 'react';
import { TaskContext } from './context/TaskContext';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';
import { Task } from './interfaces/Task';

const App: React.FC = () => {

  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <div className="App">
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <TaskForm />
      </TaskContext.Provider>
    </div>
  );

}

export default App;