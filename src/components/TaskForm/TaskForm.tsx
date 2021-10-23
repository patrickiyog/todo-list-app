import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskForm.css';
import { useTaskContext } from '../../context/TaskContext';
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

const TaskForm = () => {

    const [task, setTask] = useState<string>("");

    const { tasks, setTasks } = useTaskContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value);
    }

    const addTask = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && /\S/.test(task)) {
            const id = uuidv4();
            const newTask = {
                id: id,
                taskName: task,
                completed: false
            };
            setTasks([newTask, ...tasks]);
            setTask("");
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
                        placeholder="Add New Task"
                        value={task}
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