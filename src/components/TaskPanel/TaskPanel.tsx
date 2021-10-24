import React, { useState, useEffect } from 'react';
import './TaskPanel.css';
import SubTaskForm from '../SubTaskForm/SubTaskForm';

interface Props {
    taskListId: string;
    taskId: string;
}

const TaskPanel = ({ taskListId, taskId }: Props) => {

    const [taskEditable, setTaskEditable] = useState(false);

    useEffect(() => {
        setTaskEditable(taskId !== '');
    }, [taskId])

    return (
        <div className="task-panel">
            {
                taskEditable &&
                <SubTaskForm
                    taskListId={taskListId}
                    taskId={taskId}
                />
            }
        </div>
    );
}

export default TaskPanel;