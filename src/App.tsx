import * as React from 'react';
import { TaskListsContext } from './context/TaskListsContext';
import './App.css';
import { TaskList } from './interfaces/TaskList';
import TaskListForm from './components/TaskListForm/TaskListForm';
import TaskListItem from './components/TaskListItem/TaskListItem';

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
              <div>
                {
                  taskLists.map(taskList =>
                    <TaskListItem
                      key={taskList.taskListId}
                      taskListName={taskList.taskListName}
                    />
                  )
                }
              </div>
            </div>
          </div>
          <div className="center">
            No tasks
          </div>
          <div className="right-side"></div>
        </div>
      </div>
    </TaskListsContext.Provider>
  );

}

export default App;