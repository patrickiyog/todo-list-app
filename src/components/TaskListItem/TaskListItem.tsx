import React, { MouseEvent } from 'react';
import { TaskList } from '../../interfaces/TaskList';
import { useAppContext } from '../../context/AppContext';
import './TaskListItem.css';

interface Props {
    taskList: TaskList;
}

const TaskListItem = ({ taskList }: Props) => {

    const { taskListId, taskListName, tasks } = taskList;

    const { taskLists, setSelectedTaskList } = useAppContext();

    const handleOnClick = (event: MouseEvent): void => {
        if (taskLists) {
            setSelectedTaskList(taskLists[taskListId]);
        }
    }

    return (
        <div className="task-list-item" onClick={handleOnClick}>
            <div>
                {taskListName}
            </div>
            <div className="task-list-size">
                <div>{tasks.length}</div>
            </div>
        </div>
    );

}

export default TaskListItem;