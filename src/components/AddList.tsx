import { useState } from "react";
import { useRecoilState } from "recoil";
import { ToDoAtom } from "../atoms";
import {
  BoardStorageMapper,
  LocalStorageMapper,
} from "../data/browser-storage/BroswerMapper";
import { BrowserStorage } from "../data/browser-storage/BrowserStorage";
import { IBoard } from "../interfaces/Board.interface";
import { IFormState } from "../interfaces/InsertBox.interface";
import { AddListWrapper } from "../styleds/AddList.styled";
import AddButton from "./AddButton";
import InsertBox from "./InsertBox";

function AddList() {
  const BASE_NAME = "addBoard";
  const [isActive, setIsActive] = useState(false);
  const [todos, setTodos] = useRecoilState(ToDoAtom);

  const OnClickAddList = () => setIsActive(true);
  const onSubmit = (data: IFormState) => {
    const { addBoard_insert } = data;

    const boardListStorage = new BrowserStorage<string[]>(
      "Boards",
      new LocalStorageMapper<string[]>()
    );

    boardListStorage.set([
      ...(boardListStorage.get() ? boardListStorage.get() : []),
      addBoard_insert,
    ]);

    const boardItemStorage = new BrowserStorage<IBoard>(
      addBoard_insert,
      new BoardStorageMapper()
    );
    boardItemStorage.set({ title: addBoard_insert, toDos: [] });

    setTodos((prev) => ({
      ...prev,
      [addBoard_insert]: boardItemStorage.get().toDos,
    }));
  };

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
