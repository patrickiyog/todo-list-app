import React from 'react';
import './TaskLabel.css';

interface Props {
    labelName: string;
}

const TaskLabel = ({ labelName }: Props) => {

    const getLabelColour = () => {
        if (labelName === 'High') {
            return '#c62828';
        }
        if (labelName === 'Medium') {
            return '#ff6f00';
        }
        if (labelName === 'Low') {
            return '#43a047';
        }
    }

    return (
        <div
            className="task-label"
            style={{
                backgroundColor: getLabelColour()
            }}
        >
            {labelName} Priority
        </div>
    );

}

export default TaskLabel;