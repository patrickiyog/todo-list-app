import React from 'react';
import './TaskLabel.css';

interface Props {
    labelName: string;
}

const TaskLabel = ({ labelName }: Props) => {
    return (
        <div className="task-label">{labelName}</div>
    )
}

export default TaskLabel;