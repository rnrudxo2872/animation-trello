import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

function App() {
  const onDragEnd = () => {
    console.log("drop")
  }

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId={"firstSection"}>
          {(prov) => 
          <ul ref={prov.innerRef} {...prov.droppableProps}>
            <Draggable index={1} draggableId={"1"} >
              {(provided) => 
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                hello!
              </li>
              }
            </Draggable>
            <Draggable index={2} draggableId={"2"}>
              {(provided) => 
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                hello222!
              </li>
              }
            </Draggable>
            <Draggable index={3} draggableId={"3"}>
              {(provided) => 
              <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                hello333!
              </li>
              }
            </Draggable>
          </ul>
          }
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;