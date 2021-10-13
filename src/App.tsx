import React, { FC } from 'react';
import './App.css';
import TaskForm from './components/TaskForm/TaskForm';

const App: FC = () => {
  return (
    <div className="App">
      <TaskForm />
    </div>
  );
}

export default App;
