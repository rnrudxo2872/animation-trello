import styled from "styled-components";

export const Card = styled.div`
  padding: 10px 10px;
  background-color: #e7dede;
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px rgba(1, 1, 1, 0.3);
  color: ${(props) => props.theme.textColor};
  height: fit-content;
`;
