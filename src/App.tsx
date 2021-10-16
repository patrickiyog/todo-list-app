import * as React from 'react';
import { TaskContext } from './context/TaskContext';
import './App.css';
import { Task } from './interfaces/Task';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

const App: React.FC = () => {

  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <div className="App">
      <TaskContext.Provider value={{ tasks, setTasks }}>
        <TaskList />
        <TaskForm />
      </TaskContext.Provider>
    </div>
  );

}

export default App;