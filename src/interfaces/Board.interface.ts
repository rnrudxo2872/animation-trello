export interface IBoard {
  toDos: string[];
  title: string;
}

export interface IArea {
  isDraggingOver?: boolean;
  draggingOverWith?: object;
  draggingFromThisWith?: string;
  isUsingPlaceholder?: boolean;
}
