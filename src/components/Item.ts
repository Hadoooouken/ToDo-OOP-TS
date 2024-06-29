import { IItem } from '../types/types';

export class Item {
  protected itemElement: HTMLElement;
  protected title: HTMLTemplateElement;
  protected _id: string;

  constructor(template: HTMLTemplateElement) {
    this.itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement;
    this.title = this.itemElement.querySelector('.todo-item__text');
  }

  set id(value: string) {
    this._id = value;
  }

  get id(): string {
    return this._id || '';
  }

  set name(value: string) {
    this.title.textContent = value;
  }

  get name() {
    return this.title.textContent || '';
  }

  render(item: IItem) {
    this.name = item.name;
    this.id = item.id;
    return this.itemElement;
  }
}

// export function createItem(template: HTMLTemplateElement, name: string) {
//     const itemElement = template.content.querySelector('.todo-item').cloneNode(true) as HTMLElement
//     const title = itemElement.querySelector('.todo-item__text')
//     title.textContent = name
//     return itemElement
// }
