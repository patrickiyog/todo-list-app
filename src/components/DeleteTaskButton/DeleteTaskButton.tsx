import React from 'react';
import './DeleteTaskButton.css';
import { useAppContext } from '../../context/AppContext';
import { MdDelete } from "react-icons/md";

interface Props {
    clickAway: () => void;
}

const DeleteTaskButton = ({ clickAway }: Props) => {

    const { taskLists, setTaskLists, selectedTaskList, selectedTask } = useAppContext();

    const handleOnClick = () => {
        if (selectedTaskList && taskLists) {
            const newSelectedTaskList = taskLists[selectedTaskList];
            const newTasks = newSelectedTaskList.listItems.filter(task => task.listItemId !== selectedTask);
            newSelectedTaskList.listItems = newTasks;
            const newTaskLists = { ...taskLists };
            newTaskLists[selectedTaskList] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            clickAway();
        }
    }

    return (
        <div
            className="delete-task"
            onClick={handleOnClick}
        >
            <div className="delete-task-text">
                Remove Task
            </div>
            <div className="delete-task-icon">
                <MdDelete />
            </div>
        </div>
    )
}

export default DeleteTaskButton;