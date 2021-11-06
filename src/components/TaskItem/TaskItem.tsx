import React from 'react';
import { ListItem } from '../../interfaces/ListItem';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { useAppContext } from '../../context/AppContext';
import './TaskItem.css';

interface Props {
    task: ListItem | null;
}

const TaskItem = ({ task }: Props) => {

    const {
        taskLists,
        selectedTaskList,
        selectedTask,
        setTaskLists,
        setSelectedTaskList,
        setSelectedTask,
    } = useAppContext();

    const completeTask = () => {
        if (task && taskLists !== null && selectedTaskList !== '') {
            const newSelectedTaskList = taskLists[selectedTaskList];
            const { listId, listItems } = newSelectedTaskList;
            const newTasks = [...listItems];
            for (const newTask of newTasks) {
                if (newTask.listItemId === task.listItemId) {
                    newTask.completed = !task.completed;
                }
            }
            const newTaskLists = { ...taskLists };
            newTaskLists[listId] = newSelectedTaskList;
            setTaskLists(newTaskLists);
            setSelectedTaskList(newSelectedTaskList.listId);
        }
    }

    const editTask = () => {
        if (task) {
            setSelectedTask(task.listItemId);
        }
    }

    return (
        <div
            className="task"
            style={{
                backgroundColor:
                    selectedTask === task?.listItemId
                        ? '#e0e0e0'
                        : '#ffffff'
            }}
        >
            <div>
                <div>Label</div>
            </div>
            <div className="task-content-container">
                <div className="task-content">
                    <div className="task-completed" onClick={completeTask}>
                        {
                            task?.completed ?
                                <MdOutlineCheckBox className="completed-true" /> :
                                <MdOutlineCheckBoxOutlineBlank className="completed-false" />
                        }
                    </div>
                    <span className="task-name">{task?.listItemName}</span>
                </div>
                <div className="task-edit">
                    <BiDotsHorizontalRounded onClick={editTask} />
                </div>
            </div>
        </div>
    );
}

export default TaskItem;