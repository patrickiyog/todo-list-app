import React, { ReactNode, createContext } from "react";
import { Task } from "../interfaces/Task";

type TaskListContextProviderProps = {
    children: ReactNode;
}

const TaskListContext = createContext<Task[]>([]);

export const TaskListContextProvider = ({ children }: TaskListContextProviderProps) => (
    <TaskListContext.Provider value={[]}>{children}</TaskListContext.Provider>
);