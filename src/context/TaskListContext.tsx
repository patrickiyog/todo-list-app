import { createContext, useContext } from "react";
import { TaskList } from "../interfaces/TaskList";

export type TaskLists = {
    taskLists: TaskList[];
    setTaskLists: (taskList: TaskList[]) => void;
};

export const TaskListContext = createContext<TaskLists>({
    taskLists: [],
    setTaskLists: () => { },
});

export const useTaskContext = () => useContext(TaskListContext);