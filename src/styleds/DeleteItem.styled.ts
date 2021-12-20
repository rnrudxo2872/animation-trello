import { motion } from "framer-motion";
import styled from "styled-components";

export const DeleteItemWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: white;
  padding: 20px;
`;
