import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import './DisplayTaskList.css';
import TaskItem from '../TaskItem/TaskItem';
import TaskForm from '../TaskForm/TaskForm';
import { MdOutlineFormatListBulleted } from "react-icons/md";
import { useTaskListsContext } from '../../context/TaskListsContext';
import getTaskList from '../../util/getTaskList';
import { TaskList } from '../../interfaces/TaskList';

interface Props {
    taskListId: string;
    setSelectedTask: Dispatch<SetStateAction<string>>;
}

const DisplayTaskList = ({ taskListId, setSelectedTask }: Props) => {

    const { taskLists } = useTaskListsContext();

    const [taskList, setTaskList] = useState<TaskList | null>();

    useEffect(() => {
        setTaskList(getTaskList(taskListId, taskLists));
    }, [taskListId, taskLists]);

    const countCompletedTasks = (): number => {
        let count: number = 0;
        if (taskListId !== '') {
            const taskList = getTaskList(taskListId, taskLists);
            if (taskList !== null) {
                const { tasks } = taskList;
                for (const task of tasks) {
                    if (task.completed) {
                        count++;
                    }
                }
            }
        }
        return count;
    }

    const displayTaskList = (): JSX.Element => {
        if (taskList !== null && taskList !== undefined) {
            return (
                <>
                    <div>
                        <div className="task-list-name">{taskList.taskListName}</div>
                        <div className="task-list-details">
                            {
                                !taskList.tasks.length
                                    ? 'No tasks'
                                    : `${taskList.tasks.length} tasks, ${countCompletedTasks()} completed`
                            }
                        </div>
                    </div>
                    <div className="task-list-list">
                        <div className="task-list-list-content">
                            {taskList.tasks.map((task, index) =>
                                <TaskItem
                                    key={index}
                                    taskListId={taskList.taskListId}
                                    task={task}
                                    setSelectedTask={setSelectedTask}
                                />
                            )}
                        </div>
                    </div>
                    <div>
                        <TaskForm taskListId={taskList.taskListId} />
                    </div>
                </>
            );
        } else {
            return (
                <div className="tasklists-empty">
                    <MdOutlineFormatListBulleted className="icon" />
                </div>
            );
        }
    }

    return (<div className="task-list">{displayTaskList()}</div>);

}

export default DisplayTaskList;