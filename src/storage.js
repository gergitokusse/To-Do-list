class Storage {
  static loadlocaldata() {
    let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    if (mylocaldata === null) {
      mylocaldata = ['empty'];
    }
  }

  static update() {
    let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    if (mylocaldata == null) {
      mylocaldata = [];
    }
    localStorage.setItem('toDoList', JSON.stringify(mylocaldata));
  }

  static displaytodo() {
    const todo = document.querySelector('.todo-list');
    let mylocaldata = [{ indexed: 1, discribtion: 'Task-1', complete: false }, { indexed: 1, discribtion: 'Task-1', complete: false }, { indexed: 1, discribtion: 'Task-1', complete: false }];
    // let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
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
        span3.innerHTML = `
        <i className="bi-three-dots-vertical" /> 
        `;
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

  static Addtodo(describ) {
    let indexed;
    if (describ !== '') {
      let localdata = JSON.parse(localStorage.getItem('toDoList'));
      if (localdata === null) {
        localdata = [];
        indexed = 1;
      }
      indexed = localdata.length;
      const todo = { indexe: indexed, complete: false, discribtion: describ };
      localdata.push(todo);
      // then store to local data
      localStorage.setItem('toDoList', JSON.stringify(localdata));
      window.location.reload();
    } else {
      // alert('empty');
    }
  }
}
export default Storage;