import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { ICard } from "../interfaces/Card.interface";
import { Card } from "../styleds/Card.styled";

function DragabbleCard({ index, value }: ICard) {
  return (
    <Draggable index={index} draggableId={value + Date.now()}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {value}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DragabbleCard);
