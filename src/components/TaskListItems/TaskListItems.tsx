import React from 'react';
import { useAppContext } from '../../context/AppContext';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskListItems = () => {

    const { taskLists } = useAppContext();

    const mapTaskListItem = (): JSX.Element | null => {
        if (taskLists !== null && Object.keys(taskLists).length) {
            const taskListsArray = Object.values(taskLists).reverse();
            return (
                <>
                    {taskListsArray.map((taskList, index) => <TaskListItem key={index} taskList={taskList} />)}
                </>
            );
        }
        return null;
    }

    return (<div>{mapTaskListItem()}</div>);

}

export default TaskListItems;