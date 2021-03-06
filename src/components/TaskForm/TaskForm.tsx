import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskForm.css';
import { useAppContext } from '../../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import { ListItem } from '../../interfaces/ListItem';

const TaskForm = () => {

    const [taskName, setTaskName] = useState<string>("");

    const { taskLists, setTaskLists, selectedTaskList } = useAppContext();

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
                labels: {
                    HIGH: false,
                    MEDIUM: false,
                    LOW: false
                },
            };
            const newSelectedTaskList = taskLists[selectedTaskList];
            const newTasks = [...newSelectedTaskList.listItems, newTask];
            newSelectedTaskList.listItems = newTasks;
            const newTaskLists = { ...taskLists };
            newTaskLists[selectedTaskList] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            setTaskName('');
        }
    }

    return (
        <div className="task-form">
            <div className="task-form-container">
                <div className="input-container">
                    <input
                        type="text"
                        name="task"
                        placeholder="Add a new task"
                        value={taskName}
                        onChange={handleChange}
                        onKeyDown={addTask}
                        autoComplete="off"
                    />
                </div>
            </div>
        </div>
    );
}

export default TaskForm;