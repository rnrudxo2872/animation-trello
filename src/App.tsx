import { useEffect } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import { ToDoAtom } from "./atoms";
import Board from "./components/Board";
import { BoardStorageMapper } from "./data/browser-storage/BroswerMapper";
import { BrowserStorage } from "./data/browser-storage/BrowserStorage";
import { IBoard } from "./interfaces/Board.interface";
import { AppWrapper, Boards } from "./styleds/App.styled";

function App() {
  const [toDos, setToDos] = useRecoilState(ToDoAtom);

  const onDragEnd = (result:DropResult) => {
    const {
      destination,
      source:{
        index,
        droppableId
      }
    } = result;

    if(!destination) return;

    // If same board
    if(destination.droppableId === droppableId){
      setToDos(todos => {
        const CopyToDo = [...todos[droppableId]];
        
        CopyToDo.splice(index, 1);
        CopyToDo.splice(destination.index, 0, todos[droppableId][index]);
      
        return {
          ...todos,
          [droppableId]:CopyToDo
        };
      })
      return;
    }

    setToDos(todos => {
      const OriginToDo = [...todos[droppableId]];
      const TargetToDo = [...todos[destination.droppableId]];

      OriginToDo.splice(index, 1);
      TargetToDo.splice(destination.index, 0, todos[droppableId][index]);

      return {
        ...todos,
        [droppableId]:OriginToDo,
        [destination.droppableId]:TargetToDo
      }
    })
  }

  useEffect(() => {
    Object.keys(toDos).forEach((key) => {
      const CurStorage = new BrowserStorage<IBoard>(key, new BoardStorageMapper());

      if(CurStorage.isEmpty()) {
        CurStorage.set({title:key, toDos:[]})
      }

      setToDos((init) => {
        return {
          ...init,
          [key]: CurStorage.get().toDos
        };
      })
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppWrapper>
        <Boards>
          {Object.keys(toDos).map(toDo => <Board key={toDo} title={toDo} toDos={toDos[toDo]}></Board>)}
        </Boards>
      </AppWrapper>
    </DragDropContext>
  );
}

export default App;