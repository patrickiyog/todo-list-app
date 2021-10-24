import React, { useState } from 'react';
import { TaskListsContext } from './context/TaskListsContext';
import './App.css';
import { TaskList } from './interfaces/TaskList';
import TaskListForm from './components/TaskListForm/TaskListForm';
import TaskListItem from './components/TaskListItem/TaskListItem';
import DisplayTaskList from './components/DisplayTaskList/DisplayTaskList';

const App: React.FC = () => {

  const [taskLists, setTaskLists] = useState<TaskList[]>([]);
  const [selectedTaskList, setSelectedTaskList] = useState<TaskList | null>(null);

  return (
    <TaskListsContext.Provider value={{ taskLists, setTaskLists }}>
      <div className="app">
        <div className="app-container">
          <div className="left-side">
            <div className="left-side-content">
              <TaskListForm />
              <hr />
              <div>
                {
                  taskLists.map(taskList =>
                    <TaskListItem
                      key={taskList.taskListId}
                      taskList={taskList}
                      setSelectedTaskList={setSelectedTaskList}
                    />
                  )
                }
              </div>
            </div>
          </div>
          <div className="center">
            <DisplayTaskList taskList={selectedTaskList} />
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </TaskListsContext.Provider>
  );

}

export default App;