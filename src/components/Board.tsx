import { useEffect, useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import { useSetRecoilState } from "recoil";
import { ToDoAtom } from "../atoms";
import { BoardStorageMapper } from "../data/browser-storage/BroswerMapper";
import { BrowserStorage } from "../data/browser-storage/BrowserStorage";
import { IBoard } from "../interfaces/Board.interface";
import { IFormState } from "../interfaces/InsertBox.interface";
import { BoardTitle, BoardWrapper, DropArea } from "../styleds/Boards.styled";
import DragabbleCard from "./DragabbleCard";
import InsertBox from "./InsertBox";

function Board({ toDos, title }: IBoard) {
  const isInitialMount = useRef(true);
  const setToDoList = useSetRecoilState(ToDoAtom);
  const BASE_NAME = `${title}_insert`;

  const onSubmit = (data: IFormState) =>
    setToDoList((allToDoList) => {
      const CopyList = [...allToDoList[title]];
      CopyList.push(data[BASE_NAME]);

      return {
        ...allToDoList,
        [title]: CopyList,
      };
    });

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      new BrowserStorage<IBoard>(title, new BoardStorageMapper()).set({
        title,
        toDos,
      });
    }
  }, [title, toDos]);

  return (
    <BoardWrapper>
      <BoardTitle>{title}</BoardTitle>
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <DropArea
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={snapshot.draggingFromThisWith}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {toDos.map((value, index) => (
              <DragabbleCard key={index} index={index} value={value} />
            ))}
            {provided.placeholder}
          </DropArea>
        )}
      </Droppable>
      <InsertBox onSubmit={onSubmit} sectionName={title} />
    </BoardWrapper>
  );
}

export default Board;
