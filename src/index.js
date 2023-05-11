// eslint-disable-next-line
import _ from 'lodash';
import './style.css';
import Storage from './storage.js';

document.addEventListener('DOMContentLoaded', () => Storage.displaytodo());
document.addEventListener('DOMContentLoaded', () => Storage.checkboxevent());

const describ = document.querySelector('.enter-todo');
const form = document.querySelector('.form');
form.addEventListener('submit', () => Storage.Addtodo(describ.value));
describ.value = '';