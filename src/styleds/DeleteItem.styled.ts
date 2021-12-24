import { motion } from "framer-motion";
import styled from "styled-components";
import { IDeleteWrapper } from "../interfaces/DeleteItem.interface";

export const DeleteItemWrapper = styled(motion.div)<IDeleteWrapper>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: ${(props) => (props.isDraggingOver ? "#A4A09D" : "white")};
  color: ${(props) => (props.isDraggingOver ? "white" : "black")};
  transition: background-color 0.5s ease-in-out, color 0.5s ease-in-out;
  padding: 20px;
`;
