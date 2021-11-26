import { useEffect, useRef } from "react";
import { Droppable } from "react-beautiful-dnd";
import { BoardStorageMapper } from "../data/browser-storage/BroswerMapper";
import { BrowserStorage } from "../data/browser-storage/BrowserStorage";
import { IBoard } from "../interfaces/Board.interface";
import { BoardTitle, BoardWrapper, DropArea } from "../styleds/Boards.styled";
import DragabbleCard from "./DragabbleCard";
import InsertBox from "./InsertBox";

function Board({toDos, title}:IBoard) {
    const isInitialMount = useRef(true);

    useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false;
        } else{
            new BrowserStorage<IBoard>(title, new BoardStorageMapper()).set({title, toDos});
        }
    },[title, toDos])

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
            <InsertBox sectionName={title} />
        </BoardWrapper>
    )
}

export default Board;