import React, { FC, useState } from 'react';
import { TaskListsContext } from './context/TaskListsContext';
import './App.css';
import { TaskList } from './interfaces/TaskList';
import { Task } from './interfaces/Task';
import TaskListForm from './components/TaskListForm/TaskListForm';
import TaskListItem from './components/TaskListItem/TaskListItem';
import DisplayTaskList from './components/DisplayTaskList/DisplayTaskList';
import TaskPanel from './components/TaskPanel/TaskPanel';

const App: FC = () => {

  const [taskLists, setTaskLists] = useState<TaskList[]>([]);

  const [selectedTaskList, setSelectedTaskList] = useState<TaskList | null>(null);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <TaskListsContext.Provider value={{ taskLists, setTaskLists }}>
      <div className="app">
        <div className="app-container">
          <div className="left-side">
            <div className="left-side-content">
              <TaskListForm setSelectedTaskList={setSelectedTaskList} />
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
            <DisplayTaskList
              taskList={selectedTaskList}
              setSelectedTask={setSelectedTask}
            />
          </div>
          <div className="right-side">
            <TaskPanel task={selectedTask} />
          </div>
        </div>
      </div>
    </TaskListsContext.Provider>
  );

}

export default App;