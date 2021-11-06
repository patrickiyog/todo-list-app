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
          <div className="tasklist-form-and-items">
            <TaskListForm />
            <hr />
            <TaskListItems />
          </div>
          <div className="display-tasklist">
            <TaskList />
          </div>
          <div className="task-panel">
            {selectedTask}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );

}

export default App;