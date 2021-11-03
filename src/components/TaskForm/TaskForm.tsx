import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskForm.css';
import { useAppContext } from '../../context/AppContext';
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { ListItem } from '../../interfaces/ListItem';

const TaskForm = () => {

    const [taskName, setTaskName] = useState<string>("");

    const { taskLists, setTaskLists, selectedTaskList, setSelectedTaskList } = useAppContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskName(event.target.value);
    }

    const addTask = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && /\S/.test(taskName) && selectedTaskList && taskLists) {
            const newTask: ListItem = {
                listItemId: uuidv4(),
                listItemName: taskName,
                completed: false,
                selected: false,
            };
            setTaskName('');
        }
    }

    return (
        <div className="task-form">
            <div className="task-form-container">
                <div className="icon-container">
                    <MdAdd />
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        name="task"
                        placeholder="Add a new task"
                        value={taskName}
                        onChange={handleChange}
                        onKeyDown={addTask}
                        autoComplete="off"
                        maxLength={60}
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskForm;