import React from 'react';
import './TaskList.css';
import { useTaskContext } from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';

const TaskList = () => {

    const { tasks } = useTaskContext();

    const countCompletedTasks = (): number => {
        let count: number = 0;
        for (const task of tasks) {
            if (task.completed) {
                count++;
            }
        }
        return count;
    }

    return (
        <div className="task-list">
            <div>
                <div className="task-list-name">Task List Name</div>
                <div className="task-list-details">
                    {!tasks.length ? 'No tasks' : `${tasks.length} tasks, ${countCompletedTasks()} completed`}
                </div>
            </div>
            <div>
                <TaskForm />
            </div>
            <div className="task-list-list">
                <div className="task-list-list-content">
                    {tasks.map((task, index) => <TaskItem key={index} task={task} />)}
                </div>
            </div>
        </div>

    );

}

export default TaskList;