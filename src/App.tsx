import React, { FC, useState } from 'react';
import { AppContext } from './context/AppContext';
import './App.css';
import { TaskLists } from './interfaces/TaskLists';
import { TaskList } from './interfaces/TaskList';
import { Task } from './interfaces/Task';
import TaskListForm from './components/TaskListForm/TaskListForm';
import TaskListItem from './components/TaskListItem/TaskListItem';
import DisplayTaskList from './components/DisplayTaskList/DisplayTaskList';
import TaskPanel from './components/TaskPanel/TaskPanel';

const App: FC = () => {

  const [taskLists, setTaskLists] = useState<TaskLists | null>(null);
  const [selectedTaskList, setSelectedTaskList] = useState<TaskList | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const mapTaskListItem = (): JSX.Element | null => {
    if (taskLists !== null && Object.keys(taskLists).length) {
      for (const key in taskLists) {
        const taskList = taskLists[key];
        return <TaskListItem key={taskList.taskListId} taskList={taskList} />;
      }
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
        selectedTask,
        setSelectedTask
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
            <DisplayTaskList />
          </div>
          <div className="right-side">
            <div className="right-side-content">
              {/* <TaskPanel
                taskList={selectedTaskList}
                task={selectedTask}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );

}

export default App;