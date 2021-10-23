import React, { useState, ChangeEvent, KeyboardEvent} from 'react';
import './TaskListForm.css';
import { MdAdd } from "react-icons/md";

const TaskListForm = () => {

    const [taskList, setTaskList] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskList(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
        if(event.key === 'Enter') {
            console.log('task list created');
            setTaskList('');
        }
    }

    return (
        <div className="task-lists">
            <div className="task-list-item-container">
                <MdAdd className="icon" />
                <input
                    placeholder="Create a task list"
                    value={taskList}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    maxLength={26}
                />
            </div>
        </div>
    );

}

export default TaskListForm;