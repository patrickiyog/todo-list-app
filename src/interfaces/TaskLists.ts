import { TaskList } from "./TaskList";

export interface TaskLists {
    [id: string]: TaskList | null;
};