import { createContext, useContext } from "react";
import { Task } from "../interfaces/Task";

export type Tasks = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
}

export const TaskContext = createContext<Tasks>({
    tasks: [],
    setTasks: () => { },
})

export const useTaskContext = () => useContext(TaskContext);