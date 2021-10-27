import React from 'react';
import { Task } from '../../interfaces/Task';

interface Props {
    task: Task | null;
}

const DisplaySubTaskList = ({ task }: Props) => {
    return (<div>Sub Task List Component</div>);
}

export default DisplaySubTaskList;