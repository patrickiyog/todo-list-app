import React, { useState, useEffect } from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { useAppContext } from '../../context/AppContext';
import { ListItem } from '../../interfaces/ListItem';

const TaskList = () => {

    const { taskLists, selectedTaskList } = useAppContext();

    const [listName, setListName] = useState('');
    const [numberOfTasks, setNumberOfTasks] = useState(0);
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
    const [taskItems, setTaskItems] = useState<ListItem[]>([]);

    useEffect(() => {
        if (taskLists !== null && selectedTaskList !== '') {
            const { listName, listItems } = taskLists[selectedTaskList];
            setListName(listName);
            setNumberOfTasks(listItems.length);
            setNumberOfCompletedTasks(countCompletedTasks(listItems));
            setTaskItems(listItems);
        }
    }, [taskLists, selectedTaskList]);

    const countCompletedTasks = (listItems: ListItem[]) => {
        let count = 0;
        for (const task of listItems) {
            if (task.completed) {
                count++;
            }
        }
        return count;
    }

    const displayTaskList = () => {
        const numCompletedTask = numberOfTasks ? `${numberOfTasks} tasks, ${numberOfCompletedTasks} completed` : `No tasks`;
        if (listName) {
            return (
                <>
                    <div className="task-list-name-details">
                        <div className="task-list-name">{listName}</div>
                        <div className="task-list-details">{numCompletedTask}</div>
                    </div>
                    <div className="task-list-list">
                        <div className="task-list-list-content">
                            {taskItems.map((task, index) => <TaskItem key={index} task={task} />)}
                        </div>
                    </div>
                    <div>
                        <TaskForm />
                    </div>
                </>
            );
        } else {
            return (
                <div className="tasklists-empty">
                    <div className="text">There are no task lists to show...</div>
                </div>
            )
        }

    }

    return (<div className="task-list">{displayTaskList()}</div>);

}

export default TaskList;