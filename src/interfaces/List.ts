import { ListItem } from "./ListItem";

export interface List {
    listId: string;
    listName: string;
    listItems: ListItem[];
}