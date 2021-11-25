import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

export const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;
