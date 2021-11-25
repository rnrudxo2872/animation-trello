import { DragDropContext, DropResult } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import { ToDoAtom } from "./atoms";
import Board from "./components/Board";
import { AppWrapper, Boards } from "./styleds/App.styled";

function App() {
  const [toDos, setToDos] = useRecoilState(ToDoAtom);

  const onDragEnd = (result:DropResult) => {
    const {
      destination,
      source:{
        index,
        droppableId
      },
      draggableId
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