import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { IFormState } from "../interfaces/InsertBox.interface";
import { AddListWrapper } from "../styleds/AddList.styled";
import AddButton from "./AddButton";
import InsertBox from "./InsertBox";

function AddList() {
  const BASE_NAME = "addBoard";
  const [isActive, setIsActive] = useState(false);

  const OnClickAddList = () => setIsActive(true);
  const onSubmit = (data: IFormState) => {};

  return (
    <AddListWrapper>
      {isActive ? (
        <InsertBox onSubmit={onSubmit} sectionName={BASE_NAME} />
      ) : (
        <AddButton onClick={OnClickAddList} />
      )}
    </AddListWrapper>
  );
}

export default AddList;
