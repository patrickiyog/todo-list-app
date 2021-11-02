import React from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { useAppContext } from '../../context/AppContext';
import { MdList } from 'react-icons/md/'

const TaskList = () => {

    const { selectedTaskList } = useAppContext();

    const countCompletedTasks = (): number => {
        let count = 0;
        if (selectedTaskList) {
            for (const task of selectedTaskList.listItems) {
                if (task.completed) {
                    count++;
                }
            }
        }
        return count;
    }

    const displayTaskList = (): JSX.Element => {
        const taskListName = selectedTaskList?.listName;
        const size = selectedTaskList?.listItems.length;
        const numCompletedTask = size ? 'No tasks' : `${size} tasks, ${countCompletedTasks()} completed`;
        if (taskListName) {
            return (
                <>
                    <div>
                        <div className="task-list-name">{taskListName}</div>
                        <div className="task-list-details">{numCompletedTask}</div>
                    </div>
                    <div className="task-list-list">
                        <div className="task-list-list-content">
                            {selectedTaskList?.listItems.map((task, index) => <TaskItem key={index} task={task} />)}
                        </div>
                    </div>
                    <div>
                        <TaskForm />
                    </div>
                </>
            );
        } else {
            return (
                <div className="tasklists-empty">
                    <MdList className="icon" />
                    <div className="text">Create a task list</div>
                </div>
            )
        }

    }

    return (<div className="task-list">{displayTaskList()}</div>);

}

export default TaskList;