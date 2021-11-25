import { DragDropContext, DropResult, ResponderProvided } from "react-beautiful-dnd"
import { useRecoilState } from "recoil";
import { ToDoAtom } from "./atoms";
import Boards from "./components/Boards";
import { AppWrapper } from "./styleds/App.styled";

function App() {
  const [toDos, setToDos] = useRecoilState(ToDoAtom);

  const onDragEnd = (result:DropResult) => {
    const {
      destination,
      source:{
        index
      }
    } = result;

    if(destination) {
      setToDos(todos => {
        const tmpToDos = [...todos];
        tmpToDos.splice(index, 1);
        tmpToDos.splice(destination?.index, 0, toDos[index]);
        return tmpToDos;
      })
      console.log("drop")
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <AppWrapper>
        <Boards toDos={toDos} title="firstSection" />
      </AppWrapper>
    </DragDropContext>
  );
}

export default App;