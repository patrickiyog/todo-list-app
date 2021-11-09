import React, { useState } from 'react';
import TaskLabel from '../TaskLabel/TaskLabel';
import './TaskLabelForm.css';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";

const TaskLabelForm = () => {
    const [selectedLabel, setSelectedLabel] = useState('');
    return (
        <div>
            <div className="label-title">Labels</div>
            <div className="task-labels">
                <div className="task-label-container">
                    <div className="task-label-radio">
                        <MdRadioButtonUnchecked />
                    </div>
                    <TaskLabel labelName={"High Priority"} type={"HP"} />
                </div>
                <div className="task-label-container">
                    <div className="task-label-radio">
                        <MdRadioButtonUnchecked />
                    </div>
                    <TaskLabel labelName={"Medium Priority"} type={"MP"} />
                </div>
                <div className="task-label-container">
                    <div className="task-label-radio">
                        <MdRadioButtonUnchecked />
                    </div>
                    <TaskLabel labelName={"Low Priority"} type={"LP"} />
                </div>
            </div>

        </div>
    );
}

export default TaskLabelForm;