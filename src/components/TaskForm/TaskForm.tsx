import React, { useState, ChangeEvent } from 'react';
import './TaskForm.css';
import { useTaskContext } from '../../context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {

    const [task, setTask] = useState<string>("");

    const { tasks, setTasks } = useTaskContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value);
    }

    const addTask = (): void => {
        const id = uuidv4();
        const newTask = {
            id: id,
            taskName: task,
            completed: false
        };
        setTasks([...tasks, newTask]);
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