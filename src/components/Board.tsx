import { Droppable } from "react-beautiful-dnd";
import { IBoard } from "../interfaces/Board.interface";
import { BoardWrapper } from "../styleds/Boards.styled";
import DragabbleCard from "./DragabbleCard";

function Board({toDos, title}:IBoard) {
    function getCharCode(str:string):number {
        let ret = 0;
        for(let i = 0; i < str.length; i++) {
            ret += str.charCodeAt(i);
        }
        return ret;
    } 

    return (
        <Droppable droppableId={title}>
            {(prov) => 
            <BoardWrapper ref={prov.innerRef} {...prov.droppableProps}>
                {toDos.map((value, index) => (
                    <DragabbleCard key={value} index={index+getCharCode(title)} value={value} />
                )
                )}
                {prov.placeholder}
            </BoardWrapper>
            }
        </Droppable>
    )
}

export default Board;