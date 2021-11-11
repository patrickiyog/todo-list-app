import React, { MouseEvent } from 'react';
import { MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import TaskLabel from '../TaskLabel/TaskLabel';

interface Props {
    id: string;
    selected: boolean;
    handleClick: (event: MouseEvent<SVGAElement>) => void;
    labelName: string;
}

const TaskLabelFormItem = ({ id, selected, handleClick, labelName }: Props) => {
    return (
        <div className="task-label-container">
            <div className="task-label-radio" >
                {
                    selected
                        ?
                        <MdRadioButtonChecked
                            id={id}
                            onClick={handleClick}
                        />
                        :
                        <MdRadioButtonUnchecked
                            id={id}
                            onClick={handleClick}
                        />
                }
            </div>
            <TaskLabel labelName={labelName} />
        </div>
    )
}

export default TaskLabelFormItem;