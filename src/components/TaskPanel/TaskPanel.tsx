import React from 'react';
import './TaskPanel.css';
import TaskLabelForm from '../TaskLabelForm/TaskLabelForm';
import DeleteTaskButton from '../DeleteTaskButton/DeleteTaskButton';

const TaskPanel = () => {
    return (
        <div className="task-panel-component">
            <div className="task-panel-item-task-label-form">
                <TaskLabelForm />
            </div>
            <div className="task-panel-item-delete-button">
                <DeleteTaskButton />
            </div>
        </div>
    );
}

export default TaskPanel;