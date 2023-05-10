class Storage {
  static loadlocaldata() {
    let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    if (mylocaldata === null) {
      mylocaldata = ['empty'];
    }
  }

  static displaytodo() {
    const todo = document.querySelector('.todo-list');
    let mylocaldata = [{ discribtion: 'My Task-1', complete: false, index: 1 }, { discribtion: 'My Task-2', complete: false, index: 2 }, { discribtion: 'My Task-3', complete: false, index: 3 }, { discribtion: 'My Task-4', complete: false, index: 4 }];
    if (mylocaldata == null) {
      mylocaldata = [];
    } else {
      mylocaldata.forEach((tododata, i) => {
        const div = document.createElement('div');

        const span1 = document.createElement('span');
        span1.className = 'desc';
        div.appendChild(span1);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = i;
        checkbox.value = i;
        checkbox.name = 'checking';
        span1.appendChild(checkbox);

        const span2 = document.createElement('span');
        span2.className = 'span2';
        span2.innerHTML = mylocaldata[i].discribtion;
        span1.appendChild(span2);

        const span3 = document.createElement('span');
        span3.innerHTML = 'M';
        span3.className = 'more';
        div.appendChild(span3);

        todo.appendChild(div);
      });
    }
  }

  static checkboxevent() {
    const checkboxes = document.querySelectorAll('input[type=checkbox][name=checking]');
    let enabledSettings = [];
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        // eslint-disable-next-line
        enabledSettings = Array.from(checkboxes).filter((i) => i.checked).map((i) => i.value);
        // eslint-disable-next-line
        console.log(enabledSettings);
      });
    });
  }
}
export default Storage;