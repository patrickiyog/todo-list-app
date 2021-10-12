import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className="header">
        <div>
          <div className="input-container">
            <input type="text" placeholder="Task" />
            <input type="number" placeholder="Deadline" />
          </div>
          <div className="button-container">
            <div>
              <button>Add Task</button>
            </div>
          </div>
        </div>
      </div>
      <div className="todo-list"></div>
    </div>
  );
}

export default App;
