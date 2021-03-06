import { Labels } from "./Labels";

export interface ListItem {
    listItemId: string;
    listItemName: string;
    completed: boolean;
    selected: boolean;
    labels: Labels;
}