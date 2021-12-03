import React from 'react';
import './TaskPanel.css';
import TaskLabelForm from '../TaskLabelForm/TaskLabelForm';
import DeleteTaskButton from '../DeleteTaskButton/DeleteTaskButton';

interface Props {
    clickAway: () => void;
}

const TaskPanel = ({ clickAway }: Props) => {
    return (
        <div className="task-panel-component">
            <TaskLabelForm />
            <div className="horizontal-line-container">
                <hr />
            </div>
            <DeleteTaskButton clickAway={clickAway} />
        </div>
    );
}

export default TaskPanel;