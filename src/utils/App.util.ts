import { DropResult } from "react-beautiful-dnd";
import { IOnDragEnd } from "../interfaces/App.interface";

export function onDragEnd(this: IOnDragEnd, result: DropResult) {
  const {
    destination,
    source: { index, droppableId },
  } = result;
  const { setToDos, setIsDragging } = this;

  setIsDragging(false);
  if (!destination) return;

  console.log(destination);
  // If same board
  if (destination.droppableId === droppableId) {
    setToDos((todos) => {
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

  setToDos((todos) => {
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
