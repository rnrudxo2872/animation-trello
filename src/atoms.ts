import { atom } from "recoil";

interface IToDoState {
  [key: string]: string[];
}

export const ToDoAtom = atom<IToDoState>({
  key: "todoAtom",
  default: {
    todo: ["one", "two", "three"],
    doing: ["one", "two"],
    done: ["one"],
  },
});
