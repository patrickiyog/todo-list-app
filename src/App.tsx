import * as React from 'react';
import { TaskListsContext } from './context/TaskListsContext';
import './App.css';
import { TaskList } from './interfaces/TaskList';
import TaskListForm from './components/TaskListForm/TaskListForm';

const App: React.FC = () => {

  const [taskLists, setTaskLists] = React.useState<TaskList[]>([]);

  return (
    <TaskListsContext.Provider value={{ taskLists, setTaskLists }}>
      <div className="app">
        <div className="app-container">
          <div className="left-side">
            <div className="left-side-content">
              <TaskListForm />
              <hr />
            </div>
          </div>
          <div className="center">
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </TaskListsContext.Provider>
  );

}

export default App;