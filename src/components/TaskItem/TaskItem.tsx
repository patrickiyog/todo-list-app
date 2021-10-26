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

    const handleOnClick = (type: string): void => {
        const newTaskLists = [...taskLists]
        for (const newTaskList of newTaskLists) {
            if (newTaskList.taskListId === taskListId) {
                if (type === 'complete') {
                    if (newTaskList.taskListId === taskListId) {
                        const newTasks = [...newTaskList.tasks];
                        for (const newTask of newTasks) {
                            if (newTask.taskId === task?.taskId) {
                                task.completed = !task.completed;
                                setTaskLists(newTaskLists);
                            }
                        }
                        return;
                    }
                }
                if (type === 'edit') {
                    if (newTaskList.taskListId === taskListId) {
                        for (const newTask of newTaskList.tasks) {
                            newTask.selected = newTask.taskId === task?.taskId ? !task?.selected : false;
                        }
                    }
                    setSelectedTask(task);
                    setTaskLists(newTaskLists);
                    return;
                }
            }
        }
    }

    return (
        <div className="task" style={{ backgroundColor: task?.selected ? '#e0e0e0' : '#ebebeb' }}>
            <div className="task-content">
                <div
                    className="task-completed"
                    onClick={() => handleOnClick('complete')}
                >
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
                    <button onClick={() => handleOnClick('edit')}>
                        <MdMoreHoriz />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TaskItem;