import React, { useState, ChangeEvent, KeyboardEvent, Dispatch, SetStateAction } from 'react';
import './TaskListForm.css';
import { useTaskListsContext } from '../../context/TaskListsContext';
import { TaskList } from '../../interfaces/TaskList';
import { MdAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setSelectedTaskList: Dispatch<SetStateAction<TaskList | null>>;
}

const TaskListForm = ({ setSelectedTaskList }: Props) => {

    const [taskListName, setTaskListName] = useState<string>('');

    const { taskLists, setTaskLists } = useTaskListsContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskListName(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && /\S/.test(taskListName)) {
            const newTaskList: TaskList = {
                taskListId: uuidv4(),
                taskListName: taskListName,
                tasks: [],
            };
            setTaskLists([newTaskList, ...taskLists]);
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