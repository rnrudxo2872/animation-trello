import { atom } from "recoil";

export interface IToDoState {
  [key: string]: string[];
}

export const ToDoAtom = atom<IToDoState>({
  key: "todoAtom",
  default: {
    "To Do": [],
    Doing: [],
    Done: [],
  },
});
