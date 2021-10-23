import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskForm.css';
import { useTaskListsContext } from '../../context/TaskListsContext';
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    taskListId: string;
}

const TaskForm = ({ taskListId }: Props) => {

    const [taskName, setTaskName] = useState<string>("");

    const { taskLists, setTaskLists } = useTaskListsContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskName(event.target.value);
    }

    const addTask = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && /\S/.test(taskName)) {
            const id = uuidv4();
            const newTask = {
                taskId: id,
                taskName: taskName,
                completed: false
            };
            const newTaskList = [...taskLists];
            for (const taskList of newTaskList) {
                if (taskList.taskListId === taskListId) {
                    taskList.tasks.push(newTask);
                    setTaskLists(newTaskList);
                }
            }
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