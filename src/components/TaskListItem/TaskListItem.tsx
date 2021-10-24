import React, { Dispatch, SetStateAction, MouseEvent } from 'react';
import { TaskList } from '../../interfaces/TaskList';
import { useTaskListsContext } from '../../context/TaskListsContext';
import './TaskListItem.css';

interface Props {
    taskList: TaskList;
    setSelectedTaskList: Dispatch<SetStateAction<string>>;
}

const TaskListItem = ({ taskList, setSelectedTaskList }: Props) => {

    const { taskListId, taskListName, tasks } = taskList;

    const { taskLists } = useTaskListsContext();

    const handleOnClick = (event: MouseEvent): void => {
        event.preventDefault();
        for (const element of taskLists) {
            if (element.taskListId === taskListId) {
                setSelectedTaskList(taskListId);
            }
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