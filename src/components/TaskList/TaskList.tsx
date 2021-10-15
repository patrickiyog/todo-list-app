import React from 'react';
import { useTaskContext } from '../../context/TaskContext';
import TaskItem from '../Task/TaskItem';

const TaskList = () => {

    const { tasks } = useTaskContext();

    return (
        <div>
            {
                tasks.map((task, index) => <TaskItem task={task} />)
            }
        </div>
    );

}

export default TaskList;