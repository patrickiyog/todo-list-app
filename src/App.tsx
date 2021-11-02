import React, { FC, useState } from 'react';
import { AppContext } from './context/AppContext';
import './App.css';
import { Lists } from './interfaces/Lists';
import { List } from './interfaces/List';
import TaskListForm from './components/TaskListForm/TaskListForm';
import TaskListItem from './components/TaskListItem/TaskListItem';
import TaskList from './components/TaskList/TaskList';

const App: FC = () => {

  const [taskLists, setTaskLists] = useState<Lists | null>(null);
  const [selectedTaskList, setSelectedTaskList] = useState<List | null>(null);

  const mapTaskListItem = (): JSX.Element | null => {
    if (taskLists !== null && Object.keys(taskLists).length) {
      const taskListsArray = Object.values(taskLists).reverse();
      return (
        <>
          {taskListsArray.map((taskList, index) => <TaskListItem key={index} taskList={taskList} />)}
        </>
      );
    }
    return null;
  }

  return (
    <AppContext.Provider
      value={{
        taskLists,
        setTaskLists,
        selectedTaskList,
        setSelectedTaskList,
      }}
    >
      <div className="app">
        <div className="app-container">
          <div className="left-side">
            <div className="left-side-content">
              <TaskListForm />
              <hr />
              <div>
                {mapTaskListItem()}
              </div>
            </div>
          </div>
          <div className="center">
            <TaskList />
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );

}

export default App;