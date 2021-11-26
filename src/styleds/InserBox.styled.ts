import styled from "styled-components";

export const InsertForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Insert = styled.input`
  flex-grow: 1;
  margin: 5px 5px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
`;

export const ErrorMsg = styled.span`
  font-weight: 700;
  margin-bottom: 12px;
  text-align: center;
  color: ${(props) => props.theme.textHighlight};
  text-shadow: 1px 1px 1px ${(props) => props.theme.highlightShadow},
    -1px -1px 1px ${(props) => props.theme.highlightShadow};
`;
