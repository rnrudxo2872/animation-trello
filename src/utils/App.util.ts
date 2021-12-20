import { DropResult } from "react-beautiful-dnd";
import { SetterOrUpdater } from "recoil";
import { IToDoState } from "../atoms";

export function onDragEnd(
  this: SetterOrUpdater<IToDoState>,
  result: DropResult
) {
  const {
    destination,
    source: { index, droppableId },
  } = result;

  if (!destination) return;

  // If same board
  if (destination.droppableId === droppableId) {
    this((todos) => {
      const CopyToDo = [...todos[droppableId]];

      CopyToDo.splice(index, 1);
      CopyToDo.splice(destination.index, 0, todos[droppableId][index]);

      return {
        ...todos,
        [droppableId]: CopyToDo,
      };
    });
    return;
  }

  this((todos) => {
    const OriginToDo = [...todos[droppableId]];
    const TargetToDo = [...todos[destination.droppableId]];

    OriginToDo.splice(index, 1);
    TargetToDo.splice(destination.index, 0, todos[droppableId][index]);

    return {
      ...todos,
      [droppableId]: OriginToDo,
      [destination.droppableId]: TargetToDo,
    };
  });
}
