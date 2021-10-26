import React, { Dispatch, SetStateAction } from 'react';
import { Task } from '../../interfaces/Task';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdMoreHoriz } from "react-icons/md";
import { useTaskListsContext } from '../../context/TaskListsContext';
import './TaskItem.css';

interface Props {
    taskListId: string;
    task: Task | null;
    setSelectedTask: Dispatch<SetStateAction<Task | null>>;
}

const TaskItem = ({ taskListId, task, setSelectedTask }: Props) => {

    const { taskLists, setTaskLists } = useTaskListsContext();

    const completeTask = (): void => {
        const newTaskList = [...taskLists]
        for (const taskList of newTaskList) {
            if (taskList.taskListId === taskListId) {
                const newTasks = [...taskList.tasks];
                for (const newTask of newTasks) {
                    if (newTask.taskId === task?.taskId) {
                        task.completed = !task.completed;
                        setTaskLists(newTaskList);
                    }
                }
                return;
            }
        }
    }

    const handleOnClick = (): void => {
        const newTaskLists = [...taskLists];
        for (const newTaskList of newTaskLists) {
            if (newTaskList.taskListId === taskListId) {
                for (const newTask of newTaskList.tasks) {
                    newTask.selected = newTask.taskId === task?.taskId ? !task?.selected : false;
                }
            }
        }
        setSelectedTask(task);
        setTaskLists(newTaskLists);
    }

    return (
        <div className="task">
            <div className="task-content">
                <div className="task-completed" onClick={completeTask}>
                    {
                        task?.completed ?
                            <MdOutlineCheckBox className="completed-true" /> :
                            <MdOutlineCheckBoxOutlineBlank className="completed-false" />
                    }
                </div>
                <span className="task-name">
                    {task?.taskName}
                </span>
                <div className="task-edit" >
                    <MdMoreHoriz onClick={handleOnClick} />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;