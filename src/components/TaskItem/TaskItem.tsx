import React from 'react';
import { Task } from '../../interfaces/Task';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { useTaskContext } from '../../context/TaskContext';
import './TaskItem.css';

interface Props {
    task: Task;
}

const TaskItem = ({ task }: Props) => {

    const { tasks, setTasks } = useTaskContext();

    const { id, completed } = task;

    const completeTask = (): void => {
        const newTasks = [...tasks];
        for (const task of newTasks) {
            if (task.id === id) {
                task.completed = !completed;
            }
        }
        setTasks(newTasks);
    }

    const removeTask = (): void => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <div className="task">
            <div className="task-content">
                <div className="task-completed" onClick={completeTask}>
                    {completed ?
                        <MdOutlineCheckBox className="completed-true" /> :
                        <MdOutlineCheckBoxOutlineBlank className="completed-false" />
                    }
                </div>
                <span className="task-name">
                    {task.taskName}
                </span>
                <div className="task-remove" onClick={removeTask}>
                    <MdOutlineRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;