import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

interface IBoard {
    toDos:string[];
    title:string;
}

const Board = styled.div`
    min-height: 200px;
    background-color: #9090da;
`

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