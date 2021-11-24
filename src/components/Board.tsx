import { Droppable } from "react-beautiful-dnd";
import Card from "./Card";

interface IBoard {
    toDos:string[];
    title:string;
}

function Board({toDos, title}:IBoard) {
    return (
        <Droppable droppableId={title}>
            {(prov) => 
            <ul ref={prov.innerRef} {...prov.droppableProps}>
            {toDos.map((value, index) => <Card key={index} index={index} value={value} />)}
            </ul>
            }
        </Droppable>
    )
}

export default Board;