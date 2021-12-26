import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { DragDropContext, DragStart, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { ToDoAtom } from "./atoms";
import AddList from "./components/AddList";
import Board from "./components/Board";
import DeleteItem from "./components/DeleteItem";
import {
  BoardStorageMapper,
  LocalStorageMapper,
} from "./data/browser-storage/BroswerMapper";
import { BrowserStorage } from "./data/browser-storage/BrowserStorage";
import { IBoard } from "./interfaces/Board.interface";
import { AppWrapper, Boards, DeleteZone } from "./styleds/App.styled";
import { onDragEnd } from "./utils/App.util";

function App() {
  const [toDos, setToDos] = useRecoilState(ToDoAtom);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const BoardsData = new BrowserStorage<string[]>(
      "Boards",
      new LocalStorageMapper<string[]>()
    );

    const InitList = BoardsData.get().reduce((prev, curKey) => {
      const Storage = new BrowserStorage<IBoard>(
        curKey,
        new BoardStorageMapper()
      );

      return {
        ...prev,
        [curKey]: Storage.get().toDos,
      };
    }, {});

    setToDos(InitList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onDragStart(dragging: DragStart) {
    setIsDragging(true);
  }
  console.log(toDos);
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
        <AddList></AddList>
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
      </AppWrapper>
    </DragDropContext>
  );
}

export default App;
