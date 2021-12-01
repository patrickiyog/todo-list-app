import React, { useState } from 'react';
import { AppContext } from './context/AppContext';
import './App.css';
import { Lists } from './interfaces/Lists';
import TaskListForm from './components/TaskListForm/TaskListForm';
import TaskListItems from './components/TaskListItems/TaskListItems';
import TaskList from './components/TaskList/TaskList';

const App = () => {

  const [taskLists, setTaskLists] = useState<Lists | null>(null);
  const [selectedTaskList, setSelectedTaskList] = useState('');
  const [selectedTask, setSelectedTask] = useState('');

  return (
    <AppContext.Provider
      value={{
        taskLists,
        setTaskLists,
        selectedTaskList,
        setSelectedTaskList,
        selectedTask,
        setSelectedTask
      }}
    >
      <div className="app">
        <div className="app-content">
          <div className="left">
            <TaskListForm />
            <TaskListItems />
          </div>
          <div className="centre">
            <TaskList />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );

}

export default App;