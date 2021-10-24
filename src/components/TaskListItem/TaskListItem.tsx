import React, { Dispatch, SetStateAction, MouseEvent } from 'react';
import { TaskList } from '../../interfaces/TaskList';
import { useTaskListsContext } from '../../context/TaskListsContext';
import './TaskListItem.css';

interface Props {
    taskList: TaskList;
    setSelectedTaskList: Dispatch<SetStateAction<TaskList | null>>;
}

const TaskListItem = ({ taskList, setSelectedTaskList }: Props) => {

    const { taskListId, taskListName } = taskList;

    const { taskLists } = useTaskListsContext();

    const handleOnClick = (event: MouseEvent): void => {
        event.preventDefault();
        for (const element of taskLists) {
            if (element.taskListId === taskListId) {
                setSelectedTaskList(element);
            }
        }
    }

    return (
        <div className="task-list-item" onClick={handleOnClick}>
            <div>
                {taskListName}
            </div>
        </div>
    );

}

export default TaskListItem;