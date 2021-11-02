import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskForm.css';
import { useAppContext } from '../../context/AppContext';
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../interfaces/Task';

const TaskForm = () => {

    const [taskName, setTaskName] = useState<string>("");

    const { taskLists, setTaskLists, selectedTaskList, setSelectedTaskList } = useAppContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskName(event.target.value);
    }

    const addTask = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && /\S/.test(taskName) && selectedTaskList && taskLists) {
            const newTask: Task = {
                taskId: uuidv4(),
                taskName: taskName,
                completed: false,
                selected: false,
            };
            const newTaskList = selectedTaskList;
            const { tasks } = newTaskList;
            newTaskList.tasks = [...tasks, newTask];
            const newTaskLists = taskLists;
            setSelectedTaskList(newTaskList);
            newTaskLists[selectedTaskList.taskListId] = newTaskList;
            setTaskLists(newTaskLists);
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