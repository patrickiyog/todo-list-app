import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import './TaskListForm.css';
import { useAppContext } from '../../context/AppContext';
import { List } from '../../interfaces/List';
import { v4 as uuidv4 } from 'uuid';

const TaskListForm = () => {

    const [taskListName, setTaskListName] = useState('');

    const {
        taskLists,
        setTaskLists,
        setSelectedTaskList,
        setSelectedTask
    } = useAppContext();

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskListName(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent): void => {
        if (event.key === 'Enter' && /\S/.test(taskListName)) {
            const id = uuidv4();
            const newTaskList: List = {
                listId: id,
                listName: taskListName,
                listItems: [],
            };
            const newTaskLists = { ...taskLists };
            newTaskLists[id] = newTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(id);
            setSelectedTask('');
            setTaskListName('');
        }
    }

    return (
        <div className="task-lists">
            <div className="task-list-item-container">
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