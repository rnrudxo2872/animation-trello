import { useEffect, useState } from "react";
import { DragDropContext, DragStart } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { ToDoAtom } from "./atoms";
import Board from "./components/Board";
import DeleteItem from "./components/DeleteItem";
import { BoardStorageMapper } from "./data/browser-storage/BroswerMapper";
import { BrowserStorage } from "./data/browser-storage/BrowserStorage";
import { IBoard } from "./interfaces/Board.interface";
import { AppWrapper, Boards } from "./styleds/App.styled";
import { onDragEnd } from "./utils/App.util";

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
    console.log(dragging);
  }

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragEnd={onDragEnd.bind(setToDos)}
    >
      <AppWrapper>
        <Boards>
          {Object.keys(toDos).map((toDo) => (
            <Board key={toDo} title={toDo} toDos={toDos[toDo]}></Board>
          ))}
        </Boards>
      </AppWrapper>
      <DeleteItem />
    </DragDropContext>
  );
}

export default App;
