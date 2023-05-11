class Interactive {
  static checkboxevent() {
    const checkboxes = document.querySelectorAll('input[type=checkbox][name=checking]');
    let enabledSettings = [];
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        enabledSettings = Array.from(checkboxes).filter((i) => i.checked).map((i) => i.value);
        const hidden = document.querySelector('.hidden');
        hidden.value = enabledSettings;
      });
    });
  }

  static clearcomplt() {
    let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    if (mylocaldata === null) { mylocaldata = []; }
    const completearry = [];
    mylocaldata.forEach((element, i) => {
      if (mylocaldata[i].complete === true) {
        completearry.push(mylocaldata[i]);
        mylocaldata.splice(i, 1);
      }
    });
    // const nearry = mylocaldata.filter(completearry);
    const newarry = [];
    mylocaldata.forEach((element, x) => {
      newarry.push({ indexe: x + 1, discribtion: element.discribtion, complete: false });
    });
    localStorage.setItem('toDoList', JSON.stringify(newarry));
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