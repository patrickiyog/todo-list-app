import { createContext, useContext } from "react";
import { Task } from "../interfaces/Task";
import { TaskList } from "../interfaces/TaskList";

export type AppType = {
    taskLists: {};
    selectedTaskList: TaskList | null;
    selectedTask: Task | null;
    setTaskLists: (taskList: TaskList[]) => void;
    setSelectedTaskList: (taskList: TaskList) => void;
    setSelectedTask: (task: Task) => void;
};

export const AppContext = createContext<AppType>({
    taskLists: {},
    selectedTaskList: null,
    selectedTask: null,
    setTaskLists: () => { },
    setSelectedTaskList: () => { },
    setSelectedTask: () => { }
});

export const useAppContext = () => useContext(AppContext);