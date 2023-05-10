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
  return element;
}
document.body.appendChild(component());