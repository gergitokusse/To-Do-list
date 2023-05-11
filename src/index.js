// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
// import Storage from './storage.js';

// document.addEventListener('DOMContentLoaded', () => Storage.displaytodo());
// document.addEventListener('DOMContentLoaded', () => Storage.checkboxevent());

const mylocaldata = [{ indexed: 1, discribtion: 'Task-1', complete: false }, { indexed: 2, discribtion: 'Task-2', complete: false },
  { indexed: 3, discribtion: 'Task-3', complete: false }];

const todo = document.querySelector('.todo-list');
mylocaldata.forEach((tododata, i) => {
  const div = document.createElement('div');
  div.id = `div${i}`;

  const span1 = document.createElement('span');
  span1.className = 'desc';
  div.appendChild(span1);

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  span1.appendChild(checkbox);

  const span2 = document.createElement('span');
  span2.className = 'show';
  span2.innerHTML = mylocaldata[i].discribtion;
  span1.appendChild(span2);

  const span3 = document.createElement('span');
  span3.className = 'more';

  const btn2 = document.createElement('span');
  btn2.innerHTML = `
  <i class="bi-three-dots-vertical" />        
  `;
  span3.appendChild(btn2);
  div.appendChild(span3);
  todo.appendChild(div);
});

// const describ = document.querySelector('.enter-todo');
// const form = document.querySelector('.form');
// form.addEventListener('submit', () => Storage.Addtodo(describ.value));
// describ.value = '';
