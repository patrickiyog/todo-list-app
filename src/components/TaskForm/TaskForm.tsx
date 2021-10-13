import React, { useState, ChangeEvent } from 'react';
import './TaskForm.css';

const TaskForm = () => {

    const [task, setTask] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value);
    }

    const addTask = (): void => {
        // const newTask = { taskName: task, completed: false };
        // Add newTask to a todo list state
        setTask("");
    }

    return (
        <div className="header">
            <div className="input-container">
                <input
                    type="text"
                    name="task"
                    placeholder="What do you need to do?"
                    value={task}
                    onChange={handleChange}
                    autoComplete="off"
                />
            </div>
            <div className="button-container">
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    );
}

export default TaskForm;