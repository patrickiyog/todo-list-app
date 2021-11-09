import React, { MouseEvent, useState } from 'react';
import TaskLabel from '../TaskLabel/TaskLabel';
import './TaskLabelForm.css';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

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
            <div className="label-title">Labels</div>
            <div className="task-labels">
                <div className="task-label-container">
                    <div className="task-label-radio" >
                        {
                            labels.high
                                ? <MdRadioButtonChecked id="high" onClick={handleClick} />
                                : <MdRadioButtonUnchecked id="high" onClick={handleClick} />
                        }
                    </div>
                    <TaskLabel labelName={"High Priority"} type={"HP"} />
                </div>
                <div className="task-label-container">
                    <div className="task-label-radio">
                        {
                            labels.medium
                                ? <MdRadioButtonChecked id="medium" onClick={handleClick} />
                                : <MdRadioButtonUnchecked id="medium" onClick={handleClick} />
                        }
                    </div>
                    <TaskLabel labelName={"Medium Priority"} type={"MP"} />
                </div>
                <div className="task-label-container">
                    <div id="low" className="task-label-radio">
                        {
                            labels.low
                                ? <MdRadioButtonChecked id="low" onClick={handleClick} />
                                : <MdRadioButtonUnchecked id="low" onClick={handleClick} />
                        }
                    </div>
                    <TaskLabel labelName={"Low Priority"} type={"LP"} />
                </div>
            </div>

        </div>
    );

}

export default TaskLabelForm;