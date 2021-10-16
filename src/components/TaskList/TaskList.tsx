import React from 'react';
import './TaskList.css';
import { useTaskContext } from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {

    const { tasks } = useTaskContext();

    return (
        <div className="task-list-container">
            {tasks.map((task, index) => <TaskItem key={index} task={task} />)}
        </div>
    );

}

export default TaskList;