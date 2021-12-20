import { Dispatch, SetStateAction } from "react";
import { SetterOrUpdater } from "recoil";
import { IToDoState } from "../atoms";

export interface IOnDragEnd {
  setToDos: SetterOrUpdater<IToDoState>;
  setIsDragging: Dispatch<SetStateAction<boolean>>;
}
