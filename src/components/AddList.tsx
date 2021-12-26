import { useState } from "react";
import styled from "styled-components";
import { AddListWrapper } from "../styleds/AddList.styled";
import AddButton from "./AddButton";

const InsertBoartTitleBox = styled.input``;

function AddList() {
  const [isActive, setIsActive] = useState(false);

  const OnClickAddList = () => setIsActive(true);
  const onSubmit = () => {};

  return (
    <AddListWrapper>
      {isActive ? (
        <InsertBoartTitleBox />
      ) : (
        <AddButton onClick={OnClickAddList} />
      )}
    </AddListWrapper>
  );
}

export default AddList;
