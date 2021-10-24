import React from 'react';
import './SubTaskForm.css';
import { MdAdd } from "react-icons/md";

const SubTaskForm = () => {
    return (
        <div className="subtask-form">
            <MdAdd className="icon" />
            <div className="input-container">
                <input placeholder="Add a sub task" />
            </div>
        </div>
    );
}

export default SubTaskForm;