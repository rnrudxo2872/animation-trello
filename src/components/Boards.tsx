import { Droppable } from "react-beautiful-dnd";
import { IBoard } from "../interfaces/Board.interface";
import { Board } from "../styleds/Boards.styled";
import DragabbleCard from "./DragabbleCard";

function Boards({toDos, title}:IBoard) {
    return (
        <Droppable droppableId={title}>
            {(prov) => 
            <Board ref={prov.innerRef} {...prov.droppableProps}>
                {toDos.map((value, index) => (
                    <DragabbleCard key={value+index} index={index} value={value} />
                )
                )}
                {prov.placeholder}
            </Board>
            }
        </Droppable>
    )
}

export default Boards;