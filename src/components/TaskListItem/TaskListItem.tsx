import React, { Dispatch, SetStateAction, MouseEvent } from 'react';
import { TaskList } from '../../interfaces/TaskList';
import { useTaskListsContext } from '../../context/TaskListsContext';
import './TaskListItem.css';

interface Props {
    taskList: TaskList | null;
    setSelectedTaskList: Dispatch<SetStateAction<TaskList | null>>;
}

const TaskListItem = ({ taskList, setSelectedTaskList }: Props) => {

    const { taskLists } = useTaskListsContext();

    const handleOnClick = (event: MouseEvent): void => {
        event.preventDefault();
        for (const element of taskLists) {
            if (element.taskListId === taskList?.taskListId) {
                setSelectedTaskList(taskList);
            }
        }
    }

    return (
        <div className="task-list-item" onClick={handleOnClick}>
            <div>
                {taskList?.taskListName}
            </div>
            <div className="task-list-size">
                <div>{taskList?.tasks.length}</div>
            </div>
        </div>
    );

}

export default TaskListItem;