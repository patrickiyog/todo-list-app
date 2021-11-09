import React, { MouseEvent } from 'react';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import TaskLabel from '../TaskLabel/TaskLabel';

interface Props {
    id: string;
    selected: boolean;
    handleClick: (event: MouseEvent<SVGAElement>) => void;
    labelName: string;
    type: string;
}

const TaskLabelFormItem = ({ id, selected, handleClick, labelName, type }: Props) => {
    return (
        <div className="task-label-container">
            <div className="task-label-radio" >
                {
                    selected
                        ? <MdRadioButtonChecked id={id} onClick={handleClick} />
                        : <MdRadioButtonUnchecked id={id} onClick={handleClick} />
                }
            </div>
            <TaskLabel labelName={labelName} type={type} />
        </div>
    )
}

export default TaskLabelFormItem;