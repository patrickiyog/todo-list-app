import { createContext, useContext } from "react";
import { Lists } from "../interfaces/Lists";

export type AppType = {
    taskLists: Lists | null;
    selectedTaskList: string;
    selectedTask: string;
    setTaskLists: (taskLists: Lists) => void;
    setSelectedTaskList: (taskListId: string) => void;
    setSelectedTask: (taskId: string) => void;
};

export const AppContext = createContext<AppType>({
    taskLists: null,
    selectedTaskList: '',
    selectedTask: '',
    setTaskLists: () => { },
    setSelectedTaskList: () => { },
    setSelectedTask: () => { },
});

export const useAppContext = () => useContext(AppContext);