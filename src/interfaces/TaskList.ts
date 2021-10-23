import { Task } from "./Task";

export interface TaskList {
    taskListId: string;
    taskListName: string;
    tasks: Task[];
}