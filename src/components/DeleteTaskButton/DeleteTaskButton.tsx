import React from 'react';
import './DeleteTaskButton.css';
import { MdDelete } from "react-icons/md";

const DeleteTaskButton = () => {
    return (
        <div className="delete-task">
            <div className="delete-task-text">
                Remove Task
            </div>
            <div className="delete-task-icon">
                <MdDelete />
            </div>
        </div>
    )
}

export default DeleteTaskButton;