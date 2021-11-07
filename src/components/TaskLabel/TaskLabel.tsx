import React from 'react';
import './TaskLabel.css';

interface Props {
    labelName: string;
    type: string;
}

const TaskLabel = ({ labelName, type }: Props) => {

    const getLabelColour = () => {
        if (type === 'HP') {
            return '#c62828';
        }
        if (type === 'MP') {
            return '#ff6f00';
        }
        if (type === 'LP') {
            return '#43a047';
        }
    }

    return (
        <div
            className="task-label"
            style={{ backgroundColor: getLabelColour() }}
        >
            {labelName}
        </div>
    );

}

export default TaskLabel;