import React, { useEffect, useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const TaskPanel = () => {

    const { taskLists, selectedTaskList, selectedTask } = useAppContext();

    const [taskName, setTaskName] = useState<string>('');
    const [taskLabels, setTaskLabels] = useState<string[]>([]);

    useEffect(() => {
        if (taskLists && selectedTask !== '') {
            const { listItems } = taskLists[selectedTaskList];
            for (const listItem of listItems) {
                if (listItem.listItemId === selectedTask) {
                    setTaskName(listItem.listItemName);
                    setTaskLabels(listItem.labels);
                }
            }
            return;
        }
        if (selectedTask === '') {
            setTaskName('');
            setTaskLabels([]);
            return;
        }
    }, [taskLists, selectedTask, selectedTaskList]);

    return (
        <div>
            <div>{taskName}</div>
            <div>{taskLabels}</div>
        </div>
    );

}

export default TaskPanel;