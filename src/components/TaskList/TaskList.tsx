import React, { useState, useEffect } from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { useAppContext } from '../../context/AppContext';
import { MdList } from 'react-icons/md/'
import { ListItem } from '../../interfaces/ListItem';

const TaskList = () => {

    const { taskLists, selectedTaskList } = useAppContext();

    const [listName, setListName] = useState('');
    const [numberOfTasks, setNumberOfTasks] = useState(0);
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
    const [taskItems, setTaskItems] = useState<ListItem[]>([]);

    useEffect(() => {
        console.log(1);
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
        const numCompletedTask = numberOfTasks ? 'No tasks' : `${numberOfTasks} tasks, ${numberOfCompletedTasks} completed`;
        if (listName) {
            return (
                <>
                    <div>
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
                    <MdList className="icon" />
                    <div className="text">Create a task list</div>
                </div>
            )
        }

    }

    return (<div className="task-list">{displayTaskList()}</div>);

}

export default TaskList;