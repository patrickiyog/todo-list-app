import { createContext, useContext } from "react";
import { Task } from "../interfaces/Task";
import { TaskList } from "../interfaces/TaskList";
import { TaskLists } from "../interfaces/TaskLists";

export type AppType = {
    taskLists: TaskLists | null;
    selectedTaskList: TaskList | null;
    selectedTask: Task | null;
    setTaskLists: (taskLists: TaskLists) => void;
    setSelectedTaskList: (taskList: TaskList) => void;
    setSelectedTask: (task: Task) => void;
};

export const AppContext = createContext<AppType>({
    taskLists: null,
    selectedTaskList: null,
    selectedTask: null,
    setTaskLists: () => { },
    setSelectedTaskList: () => { },
    setSelectedTask: () => { }
});

export const useAppContext = () => useContext(AppContext);