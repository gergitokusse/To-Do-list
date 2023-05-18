/**
 * @jest-environment jsdom
*/
import Mock from './__mock__/mockFunction.js';

describe('Test for for updating an items completed', () => {
  test('Testing task status', () => {
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
    const myArray = [{
      inadex: 1,
      complete: false,
      discribtion: 'Describtion-1',
    },
    {
      inadex: 2,
      complete: false,
      discribtion: 'Describtion-2',
    }];
    const i = 1;
    const checkBox = document.getElementById(`check${i}`);
    Mock.CheckedList(i, checkBox, myArray);
    expect(myArray[i].complete).toBe(true);
  });
});

describe('Test for removeing completed task', () => {
  test('Testing clear completed tasks', () => {
    const myArray = [{
      inadex: 1,
      complete: true,
      discribtion: 'Describtion-1',
    },
    {
      inadex: 2,
      complete: false,
      discribtion: 'Describtion-2',
    },
    {
      inadex: 3,
      complete: true,
      discribtion: 'Describtion-3',
    },
    {
      inadex: 4,
      complete: true,
      discribtion: 'Describtion-4',
    }];
    expect(Mock.clearcompleted(myArray)).toHaveLength(1);
  });
});