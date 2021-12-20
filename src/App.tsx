import { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { ToDoAtom } from "./atoms";
import Board from "./components/Board";
import { BoardStorageMapper } from "./data/browser-storage/BroswerMapper";
import { BrowserStorage } from "./data/browser-storage/BrowserStorage";
import { IBoard } from "./interfaces/Board.interface";
import { AppWrapper, Boards } from "./styleds/App.styled";
import { onDragEnd } from "./utils/App.util";

function App() {
  const [toDos, setToDos] = useRecoilState(ToDoAtom);

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

  return (
    <DragDropContext onDragEnd={onDragEnd.bind(setToDos)}>
      <AppWrapper>
        <Boards>
          {Object.keys(toDos).map((toDo) => (
            <Board key={toDo} title={toDo} toDos={toDos[toDo]}></Board>
          ))}
        </Boards>
      </AppWrapper>
    </DragDropContext>
  );
}

export default App;
