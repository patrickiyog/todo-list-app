import React, { useState, useEffect } from 'react';
import './TaskPanel.css';
import SubTaskForm from '../SubTaskForm/SubTaskForm';
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

    return (
        <div className="task-panel">
            {
                taskEditable &&
                <SubTaskForm
                    taskList={taskList}
                    task={task}
                />
            }
        </div>
    );
}

export default TaskPanel;