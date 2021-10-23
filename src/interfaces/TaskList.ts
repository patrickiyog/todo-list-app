import { Task } from "./Task";

export interface TaskList {
    id: string;
    taskListName: string;
    tasks: Task[];
}