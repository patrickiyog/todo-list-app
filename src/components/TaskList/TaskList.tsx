import React, { useState, useEffect, ChangeEvent, KeyboardEvent, SyntheticEvent } from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { useAppContext } from '../../context/AppContext';
import { ListItem } from '../../interfaces/ListItem';

const TaskList = () => {

    const { taskLists, setTaskLists, selectedTaskList } = useAppContext();

    const [input, setInput] = useState('');
    const [listName, setListName] = useState('');
    const [numberOfTasks, setNumberOfTasks] = useState(0);
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0);
    const [taskItems, setTaskItems] = useState<ListItem[]>([]);

    useEffect(() => {
        if (taskLists !== null && selectedTaskList !== '') {
            const { listName, listItems } = taskLists[selectedTaskList];
            setInput(listName);
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

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    }

    const changeTasklistName = () => {
        if (taskLists) {
            const newTasklists = { ...taskLists };
            newTasklists[selectedTaskList].listName = input;
            setTaskLists(newTasklists);
        }
    }

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            input !== '' ? changeTasklistName() : setInput(listName);
        }
    }

    const onBlurChange = (event: SyntheticEvent) => {
        input !== '' ? changeTasklistName() : setInput(listName);
    }

    const displayTaskList = () => {
        if (listName) {
            const numCompletedTask = numberOfTasks
                ? `${numberOfTasks} tasks, ${numberOfCompletedTasks} completed`
                : `No tasks`;
            return (
                <>
                    <div className="task-list-name-details">
                        <input
                            className="task-list-name"
                            value={input}
                            onChange={onInputChange}
                            onKeyDown={onKeyDown}
                            onBlur={onBlurChange}
                        />
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
        }
    }

    return (<div className="task-list">{displayTaskList()}</div>);

}

export default TaskList;