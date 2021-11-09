import React, { useState, useEffect, ChangeEvent } from 'react';
import { ListItem } from '../../interfaces/ListItem';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import TaskLabel from '../TaskLabel/TaskLabel';
import { useAppContext } from '../../context/AppContext';
import './TaskItem.css';

interface Props {
    task: ListItem | null;
}

const TaskItem = ({ task }: Props) => {

    const [taskName, setTaskName] = useState('');
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [taskLabel, setTaskLabel] = useState('');

    const {
        taskLists,
        selectedTaskList,
        selectedTask,
        setTaskLists,
        setSelectedTaskList,
        setSelectedTask,
    } = useAppContext();

    useEffect(() => {
        if (task !== null) {
            setTaskName(task.listItemName);
            setTaskCompleted(task.completed);
        }
    }, [task]);

    const completeTask = () => {
        if (task && taskLists !== null && selectedTaskList !== '') {
            const newSelectedTaskList = taskLists[selectedTaskList];
            const { listId, listItems } = newSelectedTaskList;
            const newTasks = [...listItems];
            for (const newTask of newTasks) {
                if (newTask.listItemId === task.listItemId) {
                    const isCompleted = !task.completed;
                    setTaskCompleted(isCompleted)
                    newTask.completed = isCompleted;
                }
            }
            const newTaskLists = { ...taskLists };
            newTaskLists[listId] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(newSelectedTaskList.listId);
        }
    }

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (task && taskLists !== null && selectedTaskList !== '') {
            const newSelectedTaskList = taskLists[selectedTaskList];
            const { listId, listItems } = newSelectedTaskList;
            const newTasks = [...listItems];
            for (const newTask of newTasks) {
                if (newTask.listItemId === task.listItemId) {
                    const newTaskName = event.target.value;
                    setTaskName(newTaskName)
                    newTask.listItemName = (newTaskName);
                }
            }
            const newTaskLists = { ...taskLists };
            newTaskLists[listId] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(newSelectedTaskList.listId);
            setSelectedTask(task.listItemId);
        }
    }

    const onFocus = () => {
        if (task) {
            setSelectedTask(task.listItemId);
        }
    }

    const editTask = () => {
        if (task) {
            setSelectedTask(task.listItemId);
        }
    }

    return (
        <div
            className="task"
            style={{
                backgroundColor:
                    selectedTask === task?.listItemId
                        ? '#e0e0e0'
                        : '#ffffff'
            }}
        >
            {/* <div className="task-labels-container">
            </div> */}
            <div className="task-content-container">
                <div className="task-content">
                    <div className="task-completed" onClick={completeTask}>
                        {
                            taskCompleted ?
                                <MdOutlineCheckBox className="completed-true" /> :
                                <MdOutlineCheckBoxOutlineBlank className="completed-false" />
                        }
                    </div>
                    <input
                        className="task-name"
                        value={taskName}
                        onFocus={onFocus}
                        onChange={onInputChange}
                    />
                </div>
                <div className="task-edit">
                    <BiDotsHorizontalRounded onClick={editTask} />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;