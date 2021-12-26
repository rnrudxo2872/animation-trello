import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Boards = styled.div`
  display: flex;
  max-height: 100%;
  gap: 10px;
`;

export const DeleteZone = styled.div`
  position: fixed;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 35px;
  height: 35px;
`;
