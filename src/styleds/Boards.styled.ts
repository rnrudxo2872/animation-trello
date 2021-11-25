import styled from "styled-components";
import { IArea } from "../interfaces/Board.interface";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  min-height: 200px;
  min-width: 360px;
  background-color: #9090da;
  border-radius: 12px;
  box-shadow: 1px 1px 2px rgba(1, 1, 1, 0.3);
  overflow: hidden;
`;

export const BoardTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const DropArea = styled.div<IArea>`
  flex-grow: 1;
  padding: 30px;
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#AFAFE9"
      : props.draggingFromThisWith == null
      ? "transparent"
      : "#8686CB"};
  transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
