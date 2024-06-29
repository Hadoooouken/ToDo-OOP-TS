export interface IItem {
  id: string;
  name: string;
}

export interface IToDoModel {
  items: IItem[];
  additem: (data: string) => IItem;
  removeItem: (id: string) => void;
}
