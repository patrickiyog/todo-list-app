import React from 'react';
import TaskLabelForm from '../TaskLabelForm/TaskLabelForm';

const TaskPanel = () => {
    return (
        <div>
            <TaskLabelForm />
            <div>Delete Task</div>
        </div>
    );
}

export default TaskPanel;