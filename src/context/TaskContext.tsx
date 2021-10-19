import { createContext, useContext } from "react";
import { Task } from "../interfaces/Task";

export type Tasks = {
    tasks: Task[];
    setTasks: (tasks: Task[]) => void;
};

export type TaskLists = {
    taskLists: Tasks[],
    setTaskLists: (taskLists: Tasks[]) => void;
};

export const TaskContext = createContext<Tasks>({
    tasks: [],
    setTasks: () => { },
});

export const TaskListContext = createContext<TaskLists>({
    taskLists: [],
    setTaskLists: () => { },
});

export const useTaskContext = () => useContext(TaskContext);

export const useTaskListContext = () => useContext(TaskListContext);