import React from 'react';
import './DisplayTaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { TaskList } from '../../interfaces/TaskList';

interface Props {
    taskList: TaskList | null;
}

const DisplayTaskList = ({ taskList }: Props) => {

    const countCompletedTasks = (): number => {
        let count: number = 0;
        if (taskList !== null) {
            const { tasks } = taskList;
            for (const task of tasks) {
                if (task.completed) {
                    count++;
                }
            }
        }
        return count;
    }

    return (
        <>
            {
                taskList &&
                <div className="task-list">
                    <div>
                        <div className="task-list-name">{taskList.taskListName}</div>
                        <div className="task-list-details">
                            {!taskList.tasks.length ? 'No tasks' : `${taskList.tasks.length} tasks, ${countCompletedTasks()} completed`}
                        </div>
                    </div>
                    <div>
                        <TaskForm taskListId={taskList.taskListId} />
                    </div>
                    <div className="task-list-list">
                        <div className="task-list-list-content">
                            {taskList.tasks.map((task, index) =>
                                <TaskItem key={index} taskListId={taskList.taskListId} task={task} />
                            )}
                        </div>
                    </div>
                </div>
            }
        </>
    );

}

export default DisplayTaskList;