import React from 'react';
import './TaskLists.css';
import Logo from '../Logo/Logo';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskLists = () => {

    return (
        <div className="task-lists">
            <div className="logo-container"> 
                <Logo />
            </div>
            <div className="task-list-item-container">
                <TaskListItem />
            </div>
        </div>
    );

}

export default TaskLists;