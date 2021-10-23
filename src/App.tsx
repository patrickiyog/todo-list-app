import * as React from 'react';
import { TaskContext } from './context/TaskContext';
import './App.css';
import { Task } from './interfaces/Task';
import TaskListForm from './components/TaskListForm/TaskListForm';
import TaskList from './components/TaskList/TaskList';

const App: React.FC = () => {

  const [tasks, setTasks] = React.useState<Task[]>([]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      <div className="App">
        <div className="left-side">
          <div className="left-side-content">
            <TaskListForm />
            <hr />
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