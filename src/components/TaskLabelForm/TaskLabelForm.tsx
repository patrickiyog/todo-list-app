import React, { MouseEvent, useState, useEffect } from 'react';
import './TaskLabelForm.css';
import { useAppContext } from '../../context/AppContext';
import TaskLabelFormItem from '../TaskLabelFormItem/TaskLabelFormItem';
import { Labels } from '../../interfaces/Labels';

const TaskLabelForm = () => {

    const {
        taskLists,
        selectedTaskList,
        selectedTask,
        setTaskLists,
    } = useAppContext();

    const [labels, setLabels] = useState<Labels>({
        high: false,
        medium: false,
        low: false
    });

    useEffect(() => {
        if (taskLists && selectedTask !== '') {
            const { listItems } = taskLists[selectedTaskList];
            for (const listItem of listItems) {
                if (listItem.listItemId === selectedTask) {
                    setLabels(listItem.labels);
                }
            }
            return;
        }
    }, [taskLists, selectedTask, selectedTaskList]);

    const handleClick = (event: MouseEvent<HTMLDivElement>) => {
        if (taskLists !== null && selectedTaskList !== '' && selectedTask !== '') {
            const newSelectedTaskList = taskLists[selectedTaskList];
            const { listId, listItems } = newSelectedTaskList;
            for (const newTask of [...listItems]) {
                if (newTask.listItemId === selectedTask) {
                    const clickedLabel = event.currentTarget.id;
                    const newLabels = { ...labels };
                    for (const label in newLabels) {
                        if (label === clickedLabel) {
                            newLabels[clickedLabel] = !newLabels[clickedLabel];
                        } else {
                            newLabels[label] = false;
                        }
                    }
                    newTask.labels = newLabels;
                    setLabels(newLabels);
                    break;
                }
            }
            const newTaskLists = { ...taskLists };
            newTaskLists[listId] = newSelectedTaskList;
            setTaskLists(newTaskLists);
        }
    }

    return (
        <div>
            <div>
                <TaskLabelFormItem
                    id="HIGH"
                    selected={labels.HIGH}
                    handleClick={handleClick}
                    labelName="High"
                />
            </div>
            <div className="task-label-form-item-center">
                <TaskLabelFormItem
                    id="MEDIUM"
                    selected={labels.MEDIUM}
                    handleClick={handleClick}
                    labelName="Medium"
                />
            </div>
            <div>
                <TaskLabelFormItem
                    id="LOW"
                    selected={labels.LOW}
                    handleClick={handleClick}
                    labelName="Low"
                />
            </div>
        </div>
    );

}

export default TaskLabelForm;