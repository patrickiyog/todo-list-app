import { SubTask } from "./SubTask";

export interface Task {
    taskId: string;
    taskName: string;
    completed: boolean;
    subTasks: SubTask[];
}