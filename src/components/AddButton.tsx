import React from "react";
import styled from "styled-components";
import { AddButtonProps } from "../interfaces/AddButton.interface";

const Button = styled.button``;

function AddButton(props: AddButtonProps) {
  return <Button {...props}>Add another list</Button>;
}

export default React.memo(AddButton);
