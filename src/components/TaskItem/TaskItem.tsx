import React, { Dispatch, SetStateAction } from 'react';
import { Task } from '../../interfaces/Task';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdMoreHoriz, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { useTaskListsContext } from '../../context/TaskListsContext';
import './TaskItem.css';

interface Props {
    taskListId: string;
    task: Task;
    setSelectedTask: Dispatch<SetStateAction<string>>;
}

const TaskItem = ({ taskListId, task, setSelectedTask }: Props) => {

    const { taskId, completed, selected } = task;

    const { taskLists, setTaskLists } = useTaskListsContext();

    const completeTask = (): void => {
        const newTaskList = [...taskLists]
        for (const taskList of newTaskList) {
            if (taskList.taskListId === taskListId) {
                const newTasks = [...taskList.tasks];
                for (const task of newTasks) {
                    if (task.taskId === taskId) {
                        task.completed = !completed;
                        setTaskLists(newTaskList);
                    }
                }
                return;
            }
        }
    }

    const handleOnClick = (): void => {
        const newTaskList = [...taskLists];
        for (const taskList of newTaskList) {
            if (taskList.taskListId === taskListId) {
                for (const task of taskList.tasks) {
                    task.selected = task.taskId === taskId ? !selected : false;
                }
            }
        }
        setSelectedTask(task.taskId);
        setTaskLists(newTaskList);
    }

    return (
        <div
            className="task"
            style={{ backgroundColor: task.selected ? '#e0e0e0' : '#ebebeb' }}
        >
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
                <div className="task-edit" >
                    <MdMoreHoriz onClick={handleOnClick} />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;