import React from 'react';
import './SubTaskForm.css';
import { MdAdd } from "react-icons/md";

interface Props {
    taskListId: string;
    taskId: string;
}

const SubTaskForm = ({ taskListId, taskId }: Props) => {

    return (
        <div className="subtask-form">
            <MdAdd className="icon" />
            <div className="input-container">
                <input
                    placeholder="Add a sub task"
                    maxLength={20}
                />
            </div>
        </div>
    );
}

export default SubTaskForm;