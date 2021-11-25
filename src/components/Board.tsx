import { Droppable } from "react-beautiful-dnd";
import { IBoard } from "../interfaces/Board.interface";
import { BoardWrapper } from "../styleds/Boards.styled";
import DragabbleCard from "./DragabbleCard";

function Board({toDos, title}:IBoard) {
    return (
        <Droppable droppableId={title}>
            {(prov) => 
            <BoardWrapper ref={prov.innerRef} {...prov.droppableProps}>
                {toDos.map((value, index) => (
                    <DragabbleCard key={index} index={index} value={value} />
                )
                )}
                {prov.placeholder}
            </BoardWrapper>
            }
        </Droppable>
    )
}

export default Board;