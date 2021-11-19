import React from 'react';
import TaskLabelForm from '../TaskLabelForm/TaskLabelForm';
import DeleteTaskButton from '../DeleteTaskButton/DeleteTaskButton';

const TaskPanel = () => {
    return (
        <div>
            <TaskLabelForm />
            <DeleteTaskButton />
        </div>
    );
}

export default TaskPanel;