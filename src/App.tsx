import * as React from 'react';
import { TaskContext } from './context/TaskContext';
import './App.css';
import { Task } from './interfaces/Task';
import Logo from './components/Logo/Logo';
import TaskLists from './components/TaskLists/TaskLists';
import TaskList from './components/TaskList/TaskList';

const App: React.FC = () => {

  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <div className="left-side">
          <div className="left-side-content">
            <div id="logo">
              <Logo />
            </div>
            <TaskLists />
          </div>
        </div>
        <div className="center">
          <TaskList />
        </div>
        <div className="right-side">Right</div>
      </div>
    </TaskContext.Provider>
  );

}

export default App;