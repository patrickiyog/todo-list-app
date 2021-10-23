import React from 'react';
import './TaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { TaskList } from '../../interfaces/TaskList';

interface Props {
    taskList: TaskList;
}

const DisplayTaskList = ({ taskList }: Props) => {

    const { taskListId, taskListName, tasks } = taskList;

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
                <div className="task-list-name">{taskListName}</div>
                <div className="task-list-details">
                    {!tasks.length ? 'No tasks' : `${tasks.length} tasks, ${countCompletedTasks()} completed`}
                </div>
            </div>
            <div>
                <TaskForm taskListId={taskListId} />
            </div>
            <div className="task-list-list">
                <div className="task-list-list-content">
                    {tasks.map((task, index) =>
                        <TaskItem key={index} taskListId={taskListId} task={task} />
                    )}
                </div>
            </div>
        </div>

    );

}

export default DisplayTaskList;