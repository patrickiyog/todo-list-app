import React, { Dispatch, SetStateAction } from 'react';
import { Task } from '../../interfaces/Task';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { useTaskListsContext } from '../../context/TaskListsContext';
import './TaskItem.css';

interface Props {
    taskListId: string;
    task: Task;
    setSelectedTask: Dispatch<SetStateAction<Task | null>>;
}

const TaskItem = ({ taskListId, task, setSelectedTask }: Props) => {

    const { taskId, completed } = task;

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
                break;
            }
        }
    }

    const removeTask = (): void => {
        const newTaskList = [...taskLists]
        for (const taskList of newTaskList) {
            if (taskList.taskListId === taskListId) {
                const newTasks = taskList.tasks.filter(task =>
                    task.taskId !== taskId
                );
                taskList.tasks = newTasks;
                setTaskLists(newTaskList);
                break;
            }
        }
    }

    const handleTaskOnClick = (): void => {
        setSelectedTask(task);
    }

    return (
        <div className="task" onClick={handleTaskOnClick}>
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
                <div className="task-remove" >
                    <MdOutlineRemoveCircleOutline onClick={removeTask} />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;