import { createContext, useContext } from "react";
import { Lists } from "../interfaces/Lists";

export type AppType = {
    taskLists: Lists | null;
    selectedTaskList: string;
    setTaskLists: (taskLists: Lists) => void;
    setSelectedTaskList: (taskListId: string) => void;
};

export const AppContext = createContext<AppType>({
    taskLists: null,
    selectedTaskList: '',
    setTaskLists: () => { },
    setSelectedTaskList: () => { },
});

export const useAppContext = () => useContext(AppContext);