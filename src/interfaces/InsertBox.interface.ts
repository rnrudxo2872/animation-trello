export interface IInsertBox {
  sectionName: string;
  onSubmit: (data: IFormState) => void;
}

export interface IFormState {
  [dataName: string]: string;
}
