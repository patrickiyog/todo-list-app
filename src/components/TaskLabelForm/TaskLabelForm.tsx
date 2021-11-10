import React, { MouseEvent, useState } from 'react';
import './TaskLabelForm.css';
import TaskLabelFormItem from '../TaskLabelFormItem/TaskLabelFormItem';

interface Labels {
    [label: string]: boolean;
}

const TaskLabelForm = () => {

    const [labels, setLabels] = useState<Labels>({
        high: false,
        medium: false,
        low: false
    });

    const handleClick = (event: MouseEvent<SVGAElement>) => {
        const clickedLabel = event.currentTarget.id;
        const newLabels = { ...labels };
        for (const label in newLabels) {
            if (label === clickedLabel) {
                newLabels[clickedLabel] = !newLabels[clickedLabel];
            } else {
                newLabels[label] = false;
            }
        }
        setLabels(newLabels);
    }

    return (
        <div>
            <div className="label-title">Add a label</div>
            <div className="task-labels">
                <TaskLabelFormItem
                    id="high"
                    selected={labels.high}
                    handleClick={handleClick}
                    labelName="High Priority"
                    type="HP"
                />
                <TaskLabelFormItem
                    id="medium"
                    selected={labels.medium}
                    handleClick={handleClick}
                    labelName="Medium Priority"
                    type="MP"
                />
                <TaskLabelFormItem
                    id="low"
                    selected={labels.low}
                    handleClick={handleClick}
                    labelName="Low Priority"
                    type="LP"
                />
            </div>
        </div>
    );

}

export default TaskLabelForm;