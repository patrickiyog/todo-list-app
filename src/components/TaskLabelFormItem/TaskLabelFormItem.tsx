import React, { MouseEvent } from 'react';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import './TaskLabelFormItem.css';
import TaskLabel from '../TaskLabel/TaskLabel';

interface Props {
    id: string;
    selected: boolean;
    handleClick: (event: MouseEvent<HTMLDivElement>) => void;
    labelName: string;
}

const TaskLabelFormItem = ({ id, selected, handleClick, labelName }: Props) => {
    return (
        <div className="task-label-container" id={id} onClick={handleClick}>
            <div className="task-label-radio" >
                {
                    selected
                        ?
                        <MdRadioButtonChecked />
                        :
                        <MdRadioButtonUnchecked />
                }
            </div>
            <TaskLabel labelName={labelName} />
        </div>
    )
}

export default TaskLabelFormItem;