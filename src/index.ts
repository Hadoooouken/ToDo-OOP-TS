import './styles/styles.css';
import { todos } from './utils/constants';
import { Item } from './components/Item';
import { Form } from './components/Form'
import {ToDoModel} from './components/ToDoModel'

const contentElement = document.querySelector('.todos__list');

const template = document.querySelector('#todo-item-template') as HTMLTemplateElement;

const formElement = document.querySelector('.todos__form') as HTMLFormElement
const todoForm = new Form(formElement, handleSubmitForm)

function handleSubmitForm(data: string) {
    const todoItem = new Item(template);
    const itemElement = todoItem.render({id: '8', name: data});
    contentElement.prepend(itemElement);
    console.log(itemElement)
    todoForm.clearValue()


}


todos.forEach((item) => {
  const todoItem = new Item(template);
  const itemElement = todoItem.render(item);
  contentElement.prepend(itemElement);
});

 const todoArray = new ToDoModel()
 todoArray.items = todos
 console.log(todoArray.items)
 console.log(todoArray.additem('создать класс бля'))
 console.log(todoArray.additem('создать класс бля'))
 console.log(todoArray.additem('создать класс бля'))
 console.log(todoArray.additem('создать класс бля'))
 console.log(todoArray.additem('создать класс бля'))
 console.log(todoArray.items)
 todoArray.removeItem('6')
 console.log(todoArray.items)









// todos.forEach((item) => {
//     const itemElement = createItem(template, item)
//     contentElement.prepend(itemElement)
// })
