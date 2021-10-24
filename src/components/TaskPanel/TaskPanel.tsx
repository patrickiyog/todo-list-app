import React from 'react';
import './TaskPanel.css';
import SubTaskForm from '../SubTaskForm/SubTaskForm';
import { Task } from '../../interfaces/Task';

interface Props {
    task: Task | null;
}

const TaskPanel = ({ task }: Props) => {
    return (
        <div className="task-panel">
            <SubTaskForm />
        </div>
    );
}

export default TaskPanel;