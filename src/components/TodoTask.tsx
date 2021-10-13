import React from 'react';
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
            </div>
            <button>X</button>
        </div>
    );
}

export default TodoTask;