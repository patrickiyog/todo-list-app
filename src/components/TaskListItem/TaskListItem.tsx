import React from 'react';
import { List } from '../../interfaces/List';
import { useAppContext } from '../../context/AppContext';
import './TaskListItem.css';

interface Props {
    taskList: List;
}

const TaskListItem = ({ taskList }: Props) => {

    const { listId, listName, listItems } = taskList;

    const { taskLists, setSelectedTaskList } = useAppContext();

    const handleOnClick = (): void => {
        if (taskLists) {
            setSelectedTaskList(taskLists[listId]);
        }
    }

    return (
        <div className="task-list-item" onClick={handleOnClick}>
            <div>
                {listName}
            </div>
            <div className="task-list-size">
                <div>{listItems.length}</div>
            </div>
        </div>
    );

}

export default TaskListItem;