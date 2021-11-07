import React from 'react';
import './TaskLabelForm.css';
// import { useAppContext } from '../../context/AppContext';
import TaskLabelFormItem from './TaskLabelFormItem';

const TaskLabelForm = () => {

    return (
        <div>
            <div>Labels</div>
            <TaskLabelFormItem labelName="High Priority" type={"HP"} />
            <TaskLabelFormItem labelName="Medium Priority" type={"MP"} />
            <TaskLabelFormItem labelName="Low Priority" type={"LP"} />
        </div>
    );
}

export default TaskLabelForm;