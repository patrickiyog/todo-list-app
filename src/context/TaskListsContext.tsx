import { createContext, useContext } from "react";
import { TaskList } from "../interfaces/TaskList";

export type TaskLists = {
    taskLists: TaskList[];
    setTaskLists: (taskList: TaskList[]) => void;
};

export const TaskListsContext = createContext<TaskLists>({
    taskLists: [],
    setTaskLists: () => { },
});

export const useTaskListsContext = () => useContext(TaskListsContext);