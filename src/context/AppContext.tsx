import { createContext, useContext } from "react";
import { List } from "../interfaces/List";
import { Lists } from "../interfaces/Lists";

export type AppType = {
    taskLists: Lists | null;
    selectedTaskList: List | null;
    setTaskLists: (taskLists: Lists) => void;
    setSelectedTaskList: (taskList: List) => void;
};

export const AppContext = createContext<AppType>({
    taskLists: null,
    selectedTaskList: null,
    setTaskLists: () => { },
    setSelectedTaskList: () => { },
});

export const useAppContext = () => useContext(AppContext);