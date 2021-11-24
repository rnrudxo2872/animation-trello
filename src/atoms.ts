import { atom } from "recoil";

export const ToDoAtom = atom({
  key: "todoAtom",
  default: ["one", "two", "three"],
});
