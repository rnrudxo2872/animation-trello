import { IBoard } from "../../interfaces/Board.interface";

export interface BroswerStorageMapper<E> {
  toJson(data: E): string;
  getFromJson(json: any): E;
}

export class BoardStorageMapper implements BroswerStorageMapper<IBoard> {
  toJson(data: IBoard) {
    return JSON.stringify(data);
  }

  getFromJson(json: any) {
    const retData = JSON.parse(json);

    return {
      toDos: retData.toDos,
      title: retData.title,
    };
  }
}
