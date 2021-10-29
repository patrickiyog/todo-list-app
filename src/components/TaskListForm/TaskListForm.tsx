import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskListForm.css';
import { useAppContext } from '../../context/AppContext';
import { TaskList } from '../../interfaces/TaskList';
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const TaskListForm = () => {

    const [taskListName, setTaskListName] = useState('');

    const {
        taskLists,
        setTaskLists,
        setSelectedTaskList
    } = useAppContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskListName(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && /\S/.test(taskListName)) {
            const id = uuidv4();
            const newTaskList: TaskList = {
                taskListId: id,
                taskListName: taskListName,
                tasks: [],
            };
            const newTaskLists = { ...taskLists };
            const newTaskListId = id;
            newTaskLists[newTaskListId] = newTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(newTaskList);
            setTaskListName('');
        }
    }

    return (
        <div className="task-lists">
            <div className="task-list-item-container">
                <div className="icon-container">
                    <MdAdd />
                </div>
                <input
                    placeholder="Create a task list"
                    value={taskListName}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    maxLength={20}
                />
            </div>
        </div>
    );

}

export default TaskListForm;