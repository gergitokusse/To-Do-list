class MymockFunctions {
  static Edittodo(editval, i, mylocaldata) {
    const mylocaldata2 = JSON.parse(localStorage.getItem('toDoList'));
    mylocaldata[i].discribtion = editval;
    localStorage.setItem('toDoList', JSON.stringify(mylocaldata2));
  }

  static CheckedList(item, checkboxer, array) {
    const span2 = document.getElementById(`span2${item}`);
    span2.style.textDecoration = 'line-through';
    // get local strorage
    array[item].complete = true;
  }

  static clearcompleted(taskArray) {
    const newarray = taskArray.filter((item) => !item.complete);
    return newarray;
  }
}
module.exports = MymockFunctions;