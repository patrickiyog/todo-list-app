import { TaskList } from "../interfaces/TaskList";

const getTaskList = (taskListId: string, taskLists: TaskList[]): TaskList | null => {
    for (const taskList of taskLists) {
        if (taskList.taskListId === taskListId) {
            return taskList;
        }
    }
    return null;
}

export default getTaskList;