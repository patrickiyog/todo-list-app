import React from 'react';
import './TaskLabelFormItem.css';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import TaskLabel from '../TaskLabel/TaskLabel';

interface Props {
    labelName: string;
    type: string;
}

const TaskLabelFormItem = ({ labelName, type }: Props) => {

    return (
        <div className="task-label-form-item">
            <div className="radio-button">
                <MdRadioButtonUnchecked />
            </div>
            <div>
                <TaskLabel labelName={labelName} type={type} />
            </div>
        </div>
    )

}

export default TaskLabelFormItem;