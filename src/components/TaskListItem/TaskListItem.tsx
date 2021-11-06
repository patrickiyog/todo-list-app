import React from 'react';
import { List } from '../../interfaces/List';
import { useAppContext } from '../../context/AppContext';
import './TaskListItem.css';

interface Props {
    taskList: List;
}

const TaskListItem = ({ taskList }: Props) => {

    const { listId, listName, listItems } = taskList;

    const {
        taskLists,
        selectedTaskList,
        setSelectedTaskList,
        setSelectedTask
    } = useAppContext();

    const handleOnClick = (): void => {
        if (taskLists) {
            setSelectedTaskList(listId);
            setSelectedTask('');
        }
    }

    return (
        <div
            className="task-list-item"
            onClick={handleOnClick}
            style={{
                color: selectedTaskList === listId ? '#FFFFFF' : '#b4b4b4',
            }}
        >
            <div>{listName}</div>
            <div className="task-list-size">
                <div>{listItems.length}</div>
            </div>
        </div>
    );

}

export default TaskListItem;