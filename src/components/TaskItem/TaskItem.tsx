import React from 'react';
import { ListItem } from '../../interfaces/ListItem';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox, MdRemoveCircleOutline } from "react-icons/md";
import { useAppContext } from '../../context/AppContext';
import './TaskItem.css';

interface Props {
    task: ListItem | null;
}

const TaskItem = ({ task }: Props) => {

    const { taskLists, selectedTaskList, setTaskLists, setSelectedTaskList } = useAppContext();

    const handleOnClick = (type: string): void => {
        if (type === 'complete') {
            completeTask();
        }
    }

    const completeTask = (): void => {
        if (task && taskLists !== null && selectedTaskList !== '') {
            const newSelectedTaskList = taskLists[selectedTaskList];
            const { listId, listItems } = newSelectedTaskList;
            const newTasks = [...listItems];
            for (const newTask of newTasks) {
                if (newTask.listItemId === task.listItemId) {
                    newTask.completed = !task.completed;
                }
            }
            const newTaskLists = { ...taskLists };
            newTaskLists[listId] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(newSelectedTaskList.listId);
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
                    {task?.listItemName}
                </span>
                <div className="task-remove">
                    <MdRemoveCircleOutline className="icon" />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;