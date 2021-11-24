import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import { ToDoAtom } from "./atoms";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  const [toDos, setToDos] = useRecoilState(ToDoAtom);

  const onDragEnd = () => {
    console.log("drop")
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Board toDos={toDos} title="firstSection" />
      </DragDropContext>
    </div>
  );
}

export default App;