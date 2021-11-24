import { Draggable } from "react-beautiful-dnd";

interface ICard {
    index: number;
    value: string;
}

function Card({index, value}:ICard) {
    return(
        <Draggable index={index} draggableId={value}>
              {(provided) => (
              <li ref={provided.innerRef} {...provided.draggableProps}>
                <span {...provided.dragHandleProps}>👌</span>
                {value}
              </li>
              )
              }
        </Draggable>
    )
}

export default Card;