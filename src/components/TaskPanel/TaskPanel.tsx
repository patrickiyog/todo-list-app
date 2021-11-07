import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import TaskLabelForm from '../TaskLabelForm/TaskLabelForm';

const TaskPanel = () => {

    const { taskLists, selectedTaskList, selectedTask } = useAppContext();

    const [taskName, setTaskName] = useState<string>('');
    const [taskLabel, setTaskLabel] = useState<string>('');

    useEffect(() => {
        if (taskLists && selectedTask !== '') {
            const { listItems } = taskLists[selectedTaskList];
            for (const listItem of listItems) {
                if (listItem.listItemId === selectedTask) {
                    setTaskName(listItem.listItemName);
                    setTaskLabel(listItem.label);
                }
            }
            return;
        }
        if (selectedTask === '') {
            setTaskName('');
            setTaskLabel('');
            return;
        }
    }, [taskLists, selectedTask, selectedTaskList]);

    return (
        <div>
            <TaskLabelForm />
            <div>Delete Task</div>
        </div>
    );

}

export default TaskPanel;