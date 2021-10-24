import React from 'react';
import './TaskPanel.css';
import SubTaskForm from '../SubTaskForm/SubTaskForm';

interface Props {
    taskListId: string;
    taskId: string;
}

const TaskPanel = ({ taskListId, taskId }: Props) => {
    return (
        <div className="task-panel">
            {/* <SubTaskForm
                taskListId={taskListId}
                taskId={taskId}
            /> */}
        </div>
    );
}

export default TaskPanel;