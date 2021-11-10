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

    const handleClick = (event: MouseEvent<SVGAElement>) => {
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
            <div className="label-title">Add a label</div>
            <div className="task-labels">
                <TaskLabelFormItem
                    id="high"
                    selected={labels.high}
                    handleClick={handleClick}
                    labelName="High Priority"
                    type="HP"
                />
                <TaskLabelFormItem
                    id="medium"
                    selected={labels.medium}
                    handleClick={handleClick}
                    labelName="Medium Priority"
                    type="MP"
                />
                <TaskLabelFormItem
                    id="low"
                    selected={labels.low}
                    handleClick={handleClick}
                    labelName="Low Priority"
                    type="LP"
                />
            </div>
        </div>
    );

}

export default TaskLabelForm;