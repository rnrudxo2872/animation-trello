import { Droppable } from "react-beautiful-dnd";
import { IBoard } from "../interfaces/Board.interface";
import { BoardTitle, BoardWrapper, DropArea } from "../styleds/Boards.styled";
import DragabbleCard from "./DragabbleCard";

function Board({toDos, title}:IBoard) {
    return (
        <BoardWrapper>
            <BoardTitle>{title}</BoardTitle>
            <Droppable droppableId={title}>
                {(provided, snapshot) => 
                <DropArea isDraggingOver={snapshot.isDraggingOver} draggingFromThisWith={snapshot.draggingFromThisWith} ref={provided.innerRef} {...provided.droppableProps}>
                    {toDos.map((value, index) => (
                        <DragabbleCard key={index} index={index} value={value} />
                    )
                    )}
                    {provided.placeholder}
                </DropArea>
                }
            </Droppable>
        </BoardWrapper>
    )
}

export default Board;