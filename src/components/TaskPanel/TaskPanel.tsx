import React, { FC, useState, useEffect } from 'react';
import './TaskPanel.css';
import SubTaskForm from '../SubTaskForm/SubTaskForm';
import DisplaySubTaskList from '../DisplaySubTaskList/DisplaySubTaskList';
import { TaskList } from '../../interfaces/TaskList';
import { Task } from '../../interfaces/Task';

interface Props {
    taskList: TaskList | null;
    task: Task | null;
}

const TaskPanel = ({ taskList, task }: Props) => {

    const [taskEditable, setTaskEditable] = useState(false);

    useEffect(() => {
        setTaskEditable(task !== null);
    }, [task]);

    const taskPanel: JSX.Element = (
        <div className="task-panel">
            <DisplaySubTaskList task={task} />
            <SubTaskForm
                taskList={taskList}
                task={task}
            />
        </div>
    );

    return <>{taskEditable && taskPanel}</>;

}

export default TaskPanel;