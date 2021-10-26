import React, { useEffect, useState } from 'react';
import './SubTaskForm.css';
import { MdAdd } from "react-icons/md";
import { TaskList } from '../../interfaces/TaskList';
import { Task } from '../../interfaces/Task';

interface Props {
    taskList: TaskList | null;
    task: Task | null;
}

const SubTaskForm = ({ taskList, task }: Props) => {

    useEffect(() => {
        if (taskList !== null && task !== null) {
            console.log('task', task.taskId);
        }
    }, [taskList, task]);

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