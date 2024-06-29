import { IItem, IToDoModel } from '../types/types';

export class ToDoModel implements IToDoModel {
  protected _items: IItem[];

  constructor() {
    this._items = [];
  }

  set items(data: IItem[]) {
    this._items = data;
  }

  get items() {
    return this._items;
  }

  additem(data: string) {
    const uniqedId: number = Math.max(...this._items.map((item) => Number(item.id))) + 1;
    const newItem: IItem = { id: String(uniqedId), name: data };
    this._items.push(newItem);
    return newItem;
  }

  removeItem(id: string) {
    this._items = this._items.filter(item => item.id !== id);
  }
}
