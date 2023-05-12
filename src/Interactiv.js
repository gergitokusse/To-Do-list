class Interactive {
  static clearcomplt() {
    let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    if (mylocaldata === null) { mylocaldata = []; }
    const todoTask = mylocaldata.filter((item) => !item.complete);
    const newarray = [];
    todoTask.forEach((element, i) => {
      newarray.push({ indexe: i + 1, complete: false, discribtion: element.discribtion });
    });
    localStorage.setItem('toDoList', JSON.stringify(newarray));
    window.location.reload();
  }

  static CheckedList(item, checkboxer) {
    if (checkboxer.checked) {
      const span2 = document.getElementById(`span2${item}`);
      span2.style.textDecoration = 'line-through';

      // get local strorage
      const localdata = JSON.parse(localStorage.getItem('toDoList'));
      localdata[item].complete = true;
      localStorage.setItem('toDoList', JSON.stringify(localdata));
    } else {
      const span2 = document.getElementById(`span2${item}`);
      span2.style.textDecoration = 'none';

      // get local strorage
      const localdata = JSON.parse(localStorage.getItem('toDoList'));
      localdata[item].complete = false;
      localStorage.setItem('toDoList', JSON.stringify(localdata));
    }
  }
}
export default Interactive;