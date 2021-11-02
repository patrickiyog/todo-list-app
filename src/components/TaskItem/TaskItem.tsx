import React from 'react';
import { Task } from '../../interfaces/Task';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdMoreHoriz } from "react-icons/md";
import { useAppContext } from '../../context/AppContext';
import './TaskItem.css';

interface Props {
    task: Task | null;
}

const TaskItem = ({ task }: Props) => {

    const { taskLists, selectedTaskList, setTaskLists, setSelectedTaskList } = useAppContext();

    const handleOnClick = (type: string): void => {
        if (type === 'complete') {
            completeTask();
        }
    }

    const completeTask = (): void => {
        if (task && selectedTaskList) {
            const newSelectedTaskList = selectedTaskList;
            const newTasks = newSelectedTaskList.tasks;
            for (const newTask of newTasks) {
                if (newTask.taskId === task.taskId) {
                    newTask.completed = !task.completed;
                }
            }
            const newTaskLists = { ...taskLists };
            newTaskLists[selectedTaskList.taskListId] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(newSelectedTaskList);
        }
    }

    return (
        <div className="task">
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