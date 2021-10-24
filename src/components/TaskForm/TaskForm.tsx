import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskForm.css';
import { useTaskListsContext } from '../../context/TaskListsContext';
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { Task } from '../../interfaces/Task';
import { TaskList } from '../../interfaces/TaskList';

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
            const newTask: Task = {
                taskId: uuidv4(),
                taskName: taskName,
                completed: false,
                subTasks: [],
                selected: false,
            };
            const newTaskLists: TaskList[] = [...taskLists];
            for (const taskList of newTaskLists) {
                if (taskList.taskListId === taskListId) {
                    taskList.tasks = [...taskList.tasks, newTask];
                    setTaskLists(newTaskLists);
                }
            }
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