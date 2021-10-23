import React from 'react';
import './TaskListItem.css';

interface Props {
    taskListName: string;
}

const TaskListItem = ({ taskListName }: Props) => {

    return (
        <div className="task-list-item">
            <div>
                {taskListName}
            </div>
        </div>
    );

}

export default TaskListItem;