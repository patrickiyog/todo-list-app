import React, { FC } from 'react';
import { Task } from '../Interfaces';
import './TodoTask.css';

interface Props {
    task: Task;
}

const TodoTask = ({ task }: Props) => {
    return (
        <div className="task">
            <div className="task-content">
                <span>{task.taskName}</span>
                <span>due in {task.deadline} days</span>
            </div>
            <button>X</button>
        </div>
    );
}

export default TodoTask;