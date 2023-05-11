// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import Storage from './storage.js';

function component() {
  const element = document.createElement('div');
  // Lodash, now imported by this script
  element.innerHTML = _.join([], ' ');
  element.classList.add('hello');
  Storage.displaytodo();
  Storage.checkboxevent();

  const describ = document.querySelector('.enter-todo');
  const form = document.querySelector('.form');
  form.addEventListener('submit', () => Storage.Addtodo(describ.value));
  return element;
}
document.body.appendChild(component());