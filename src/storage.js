import Interactive from './Interactiv.js';

class Storage {
  static update() {
    let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    if (mylocaldata == null) {
      mylocaldata = [];
    }
    localStorage.setItem('toDoList', JSON.stringify(mylocaldata));
  }

  static displaytodo() {
    const todo = document.querySelector('.todo-list');
    let mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    if (mylocaldata == null) {
      mylocaldata = [];
    } else {
      mylocaldata.forEach((tododata, i) => {
        const div = document.createElement('div');
        div.id = `div${i}`;
        div.classList.add('mydiv');
        div.style.draggable = true;

        const span1 = document.createElement('span');
        span1.className = 'desc';
        div.appendChild(span1);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `check${i}`;
        checkbox.value = i;
        checkbox.name = 'checking';
        if (mylocaldata[i].complete === true) {
          checkbox.checked = true;
        }
        span1.appendChild(checkbox);

        const span2 = document.createElement('span');
        span2.className = 'show';
        span2.id = `span2${i}`;
        span2.innerHTML = mylocaldata[i].discribtion;
        if (mylocaldata[i].complete === true) {
          span2.style.textDecoration = 'line-through';
        }
        span1.appendChild(span2);

        // form for editing description
        const form = document.createElement('form');
        form.className = 'hide';
        form.id = `form${i}`;
        const txt = document.createElement('input');
        txt.type = 'text';
        txt.id = `text${i}`;
        txt.value = mylocaldata[i].discribtion;
        form.appendChild(txt);
        span1.appendChild(form);

        const span3 = document.createElement('span');
        span3.className = 'more';
        const btn1 = document.createElement('span');
        btn1.id = `btn-trash${i}`;
        btn1.className = 'hide';
        btn1.innerHTML = `
        <i class="bi-trash" />
        `;
        span3.appendChild(btn1);

        const btn2 = document.createElement('span');
        btn2.id = `btn-more${i}`;
        btn2.className = 'show';
        btn2.innerHTML = `
        <i class="bi-three-dots-vertical" />        
        `;
        span3.appendChild(btn2);
        div.appendChild(span3);
        todo.appendChild(div);
        // add event listner for more btn
        const btnmore = document.getElementById(`btn-more${i}`);
        btnmore.addEventListener('click', () => Storage.ClickMorebtn(i));

        // add event listner for trash btn
        const btntrash = document.getElementById(`btn-trash${i}`);
        btntrash.addEventListener('click', () => Storage.RemoveTask(`btn-trash${i}`, `${i}`));

        // event listner for form
        const myarry = [];
        const txtform = document.getElementById(`form${i}`);
        txtform.addEventListener('submit', (event) => {
          Storage.Edittodo(`${txt.value}`, i, myarry);
          event.preventDefault();
        });
        // event listner for checkbor
        const checkb = document.getElementById(`check${i}`);
        checkb.addEventListener('change', () => {
          Interactive.CheckedList(i, checkb);
        });
      });
    }
  }

  static Edittodo(editval, i, mylocaldata) {
    mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    mylocaldata[i].discribtion = editval;
    localStorage.setItem('toDoList', JSON.stringify(mylocaldata));
    Storage.ClickMorebtn(i);
  }

  static ClickMorebtn(removeitem) {
    const btntrash = document.getElementById(`btn-trash${removeitem}`);
    btntrash.classList.replace('hide', 'show');

    const btnmore = document.getElementById(`btn-more${removeitem}`);
    btnmore.classList.replace('show', 'hide');

    const form = document.getElementById(`form${removeitem}`);
    form.classList.replace('hide', 'show');
    const span2 = document.getElementById(`span2${removeitem}`);
    span2.classList.replace('show', 'hide');

    // const more = document.getElementById(`div${removeitem}`);
    // more.style.backgroundColor = 'antiquewhite';
  }

  static RemoveTask(removeitem, index) {
    const mylocaldata = JSON.parse(localStorage.getItem('toDoList'));
    const btntrash = document.getElementById(`btn-trash${index}`);
    const newarry = [];
    mylocaldata.splice(index, 1);
    btntrash.parentElement.parentElement.remove();
    mylocaldata.forEach((element, i) => {
      newarry.push({ indexe: i + 1, discribtion: element.discribtion, complete: false });
    });
    localStorage.setItem('toDoList', JSON.stringify(newarry));
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

  static Addtodo(newtask) {
    let indexed;
    if (newtask !== '') {
      let localdata = JSON.parse(localStorage.getItem('toDoList'));
      if (localdata === null) {
        localdata = [];
      }
      indexed = localdata.length + 1;
      const todo = { indexe: indexed, complete: false, discribtion: newtask };
      localdata.push(todo);
      // then store to local data
      localStorage.setItem('toDoList', JSON.stringify(localdata));
    } else {
      // alert('empty');
    }
    // new task to todo list
    const todo = document.querySelector('.todo-list');
    const localdata = JSON.parse(localStorage.getItem('toDoList'));
    const i = localdata.length;
    const div = document.createElement('div');
    div.id = `div${i}`;
    div.classList.add('mydiv');
    div.style.draggable = true;

    const span1 = document.createElement('span');
    span1.className = 'desc';
    div.appendChild(span1);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `check${i}`;
    checkbox.value = i;
    checkbox.name = 'checking';
    span1.appendChild(checkbox);

    const span2 = document.createElement('span');
    span2.className = 'show';
    span2.id = `span2${i}`;
    span2.innerHTML = newtask;
    span1.appendChild(span2);

    // form for editing description
    const form = document.createElement('form');
    form.className = 'hide';
    form.id = `form${i}`;
    const txt = document.createElement('input');
    txt.type = 'text';
    txt.id = `text${i}`;
    txt.value = newtask;
    form.appendChild(txt);
    span1.appendChild(form);

    const span3 = document.createElement('span');
    span3.className = 'more';
    const btn1 = document.createElement('span');
    btn1.id = `btn-trash${i}`;
    btn1.className = 'hide';
    btn1.innerHTML = `
    <i class="bi-trash" />
    `;
    span3.appendChild(btn1);

    const btn2 = document.createElement('span');
    btn2.id = `btn-more${i}`;
    btn2.className = 'show';
    btn2.innerHTML = `
    <i class="bi-three-dots-vertical" />        
    `;
    span3.appendChild(btn2);
    div.appendChild(span3);
    todo.appendChild(div);

    // Event listner
    // add event listner for more btn
    const btnmore = document.getElementById(`btn-more${i}`);
    btnmore.addEventListener('click', () => Storage.ClickMorebtn(i));

    // add event listner for trash btn
    const btntrash = document.getElementById(`btn-trash${i}`);
    btntrash.addEventListener('click', () => Storage.RemoveTask(`btn-trash${i}`, i));

    // event listner for form
    const myarry = [];
    const txtform = document.getElementById(`form${i}`);
    txtform.addEventListener('submit', (event) => {
      Storage.Edittodo(`${txt.value}`, i, myarry);
      event.preventDefault();
    });
    // event listner for checkbor
    const checkb = document.getElementById(`check${i}`);
    checkb.addEventListener('change', () => {
      // alert(i-1);
      Storage.CheckedList(i - 1, checkb);
    });
  }

  static CheckedList(item, checkboxer) {
    if (checkboxer.checked) {
      const span2 = document.getElementById(`span2${item + 1}`);
      span2.style.textDecoration = 'line-through';

      // get local strorage
      const localdata = JSON.parse(localStorage.getItem('toDoList'));
      localdata[item].complete = true;
      localStorage.setItem('toDoList', JSON.stringify(localdata));
    } else {
      const span2 = document.getElementById(`span2${item + 1}`);
      span2.style.textDecoration = 'none';

      // get local strorage
      const localdata = JSON.parse(localStorage.getItem('toDoList'));
      localdata[item].complete = false;
      localStorage.setItem('toDoList', JSON.stringify(localdata));
    }
  }
}
export default Storage;