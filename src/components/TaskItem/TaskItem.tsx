import React, { useState, useEffect, ChangeEvent, SyntheticEvent } from 'react';
import './TaskItem.css';
import { useAppContext } from '../../context/AppContext';
import { ListItem } from '../../interfaces/ListItem';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { IconButton, Tooltip, ClickAwayListener } from '@mui/material';
import { HiOutlineDotsVertical } from "react-icons/hi";
import TaskPanel from '../TaskPanel/TaskPanel';

interface Props {
    task: ListItem | null;
}

const TaskItem = ({ task }: Props) => {

    const [taskName, setTaskName] = useState('');
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [taskLabelColor, setTaskLabelColor] = useState('');
    const [open, setOpen] = useState(false);

    const {
        taskLists,
        selectedTaskList,
        setTaskLists,
        setSelectedTaskList,
        setSelectedTask,
    } = useAppContext();

    useEffect(() => {
        if (task !== null) {
            setTaskName(task.listItemName);
            setTaskCompleted(task.completed);
            for (const label in task.labels) {
                if (task.labels[label] === true) {
                    if (label === 'HIGH') {
                        setTaskLabelColor('#c62828');
                        break;
                    }
                    if (label === 'MEDIUM') {
                        setTaskLabelColor('#ff6f00');
                        break;
                    }
                    if (label === 'LOW') {
                        setTaskLabelColor('#43a047');
                        break;
                    }
                } else {
                    setTaskLabelColor('#212121');
                }
            }
        }
    }, [task, taskLists]);

    const completeTask = (event: SyntheticEvent) => {
        event.stopPropagation();
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
            const newTaskName = event.target.value;
            for (const newTask of newTasks) {
                if (newTask.listItemId === task.listItemId) {
                    setTaskName(newTaskName)
                    newTask.listItemName = (newTaskName);
                    break;
                }
            }
            const newTaskLists = { ...taskLists };
            newTaskLists[listId] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(newSelectedTaskList.listId);
            setSelectedTask(task.listItemId);
        }
    }

    const onInputClick = (event: SyntheticEvent) => {
        event.stopPropagation();
        if (task) {
            setSelectedTask(task.listItemId);
            return;
        }
    }

    const selectTask = () => {
        if (task) {
            setSelectedTask(task.listItemId);
            return;
        }
    }

    const onBlurChange = () => {
        if (taskName === '') {
            if (task && taskLists !== null && selectedTaskList !== '') {
                const newSelectedTaskList = taskLists[selectedTaskList];
                const { listId, listItems } = newSelectedTaskList;
                const newTasks = [...listItems].filter(newTask => newTask.listItemId !== task.listItemId);
                const newTaskLists = { ...taskLists };
                newTaskLists[listId] = newSelectedTaskList;
                newSelectedTaskList.listItems = newTasks;
                setTaskLists(newTaskLists);
                setSelectedTaskList(newSelectedTaskList.listId);
                setSelectedTask(task.listItemId);
            }
        }
    }

    const handleTooltipOpen = () => {
        setOpen(true);
    }

    const handleTooltipClose = () => {
        setOpen(false);
    }

    return (
        <div
            className="task"
            onClick={selectTask}
            style={{
                borderLeft: `5px solid ${taskLabelColor}`,
            }}
        >
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
                        onClick={onInputClick}
                        onChange={onInputChange}
                        onBlur={onBlurChange}
                        style={{
                            color: taskCompleted ? '#a4a4a4' : '#ffffff',
                            fontStyle: taskCompleted ? 'italic' : 'normal',
                            textDecoration: taskCompleted ? 'line-through' : 'none',
                        }}
                    />
                </div>
                <ClickAwayListener onClickAway={handleTooltipClose}>
                    <div className="three-dot-menu" >
                        <div>
                            <Tooltip
                                title={<TaskPanel clickAway={handleTooltipClose} />}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                arrow
                                placement="right"
                            >
                                <IconButton onClick={handleTooltipOpen}>
                                    <HiOutlineDotsVertical />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </ClickAwayListener>
            </div>
        </div >
    );
}

export default TaskItem;