import React from 'react';
import './TaskLists.css';
import { MdAdd } from "react-icons/md";
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskLists = () => {

    return (
        <div className="task-lists">
            <div className="task-list-item-container">
                <div>
                    <div>
                        <MdAdd />
                    </div>
                    <div>
                        Create a task list
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TaskLists;