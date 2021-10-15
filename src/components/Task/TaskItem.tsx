import React from 'react';
import { Task } from '../../interfaces/Task';
import './TaskItem.css';

interface Props {
    task: Task;
}

const TaskItem = ({ task }: Props) => {
    return (
        <div className="task">
            <div className="task-content">
                <span>{task.taskName}</span>
            </div>
            <button>X</button>
        </div>
    );
}

export default TaskItem;