import React from 'react';
import './TaskList.css';
import { useTaskContext } from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = () => {

    const { tasks } = useTaskContext();

    return (
        <div className="task-list">
            <div className="task-list-name">Task List Name</div>
            <div className="task-list-list">
                {tasks.map((task, index) => <TaskItem key={index} task={task} />)}
            </div>
        </div>

    );

}

export default TaskList;