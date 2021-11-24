import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

interface ICard {
    index: number;
    value: string;
}

const Card = styled.div`
    background-color: #e7dede;
`

function DragabbleCard({index, value}:ICard) {
    console.log("index : ", index)
    return(
        <Draggable index={index} draggableId={value}>
            {(provided) => (
                <Card ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {value}
                </Card>
            )}
        </Draggable>
    )
}

export default DragabbleCard;