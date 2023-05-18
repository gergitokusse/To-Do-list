/**
* @jest-environment jsdom
*/
import Storage from './storage.js';

// const store = new Storage();
describe('Test Add and Delete task', () => {
  test('Tast added task', () => {
    document.body.innerHTML = '<div class = "todo-container" >'
      + '<div>'
        + '<div class = "todo-list">'
          + '<div id = 1 class = "mydiv">'
            + '<span class = "desc">'
              + '<input type = "checkbox" id = "check1" name = "checking" />'
              + '<span id = "span21" class = "show" > Task-1</span>'
              + '<form id = "form1" class = "hide">'
                + '<input type = "text" id = "text1" value = "Task-1" />'
              + '</form>'
            + '</span>'
            + '<span class = "more">'
              + '<button id = "btn-trash1" class = "hide" ></button>'
              + '<span id = "btn-more1" class = "show"></span>'
            + '</span>'
          + '</div>'
        + '</div>'
      + '</div>'
    + '</div>';
    const newTask = { index: 1, completed: false, describtion: 'Task-1' };
    Storage.Addtodo(newTask);
    const taskList = document.querySelectorAll('.mydiv');
    expect(taskList).toHaveLength(2);
  });
  test('Test delete one task form task list', () => {
    document.body.innerHTML = '<div class = "todo-container" >'
    + '<div>'
      + '<div class = "todo-list">'
        + '<div id = 1 class = "mydiv">'
          + '<span class = "desc1">'
            + '<input type = "checkbox" id = "check1" name = "checking" />'
            + '<span id = "span21" class = "show" > Task-1</span>'
            + '<form id = "form1" class = "hide">'
              + '<input type = "text" id = "text1" value = "Task-1" />'
            + '</form>'
          + '</span>'
          + '<span class = "more">'
            + '<button id = "btn-trash1" class = "hide" ></button>'
            + '<span id = "btn-more1" class = "show"></span>'
          + '</span>'
        + '</div>'
      + '</div>'
    + '</div>'
    + '</div>';
    const i = 1;
    const rmvitem = document.getElementById(`btn-trash${i}`).parentNode.parentNode;
    Storage.RemoveTask(rmvitem, i);
    const list = document.querySelectorAll('.mydiv');
    expect(list).toHaveLength(0);
  });
});
