import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropContext, DragStart, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ToDoAtom } from "./atoms";
import Board from "./components/Board";
import DeleteItem from "./components/DeleteItem";
import { BoardStorageMapper } from "./data/browser-storage/BroswerMapper";
import { BrowserStorage } from "./data/browser-storage/BrowserStorage";
import { IBoard } from "./interfaces/Board.interface";
import { AppWrapper, Boards } from "./styleds/App.styled";
import { onDragEnd } from "./utils/App.util";

const DeleteZone = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 35px;
  height: 35px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(ToDoAtom);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    Object.keys(toDos).forEach((key) => {
      const CurStorage = new BrowserStorage<IBoard>(
        key,
        new BoardStorageMapper()
      );

      if (CurStorage.isEmpty()) {
        CurStorage.set({ title: key, toDos: [] });
      }

      setToDos((init) => {
        return {
          ...init,
          [key]: CurStorage.get().toDos,
        };
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onDragStart(dragging: DragStart) {
    setIsDragging(true);
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd.bind({
        setToDos: setToDos,
        setIsDragging: setIsDragging,
      })}
    >
      <AppWrapper>
        <Boards>
          {Object.keys(toDos).map((toDo) => (
            <Board key={toDo} title={toDo} toDos={toDos[toDo]}></Board>
          ))}
        </Boards>
      </AppWrapper>

      <DeleteZone>
        <Droppable droppableId="DeleteBox">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <AnimatePresence>
                {isDragging ? (
                  <DeleteItem isDraggingOver={snapshot.isDraggingOver} />
                ) : null}
              </AnimatePresence>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DeleteZone>
    </DragDropContext>
  );
}

export default App;
