let todoarr = [];
if (localStorage.getItem("to-do") !== null) {
  let list = localStorage.getItem("to-do");
  list = JSON.parse(list);
  todoarr = todoarr.concat(list);
}
const todoUl = document.querySelector(".todos");
const todoForm = document.querySelector(".add-todo-form");

function addTodo () {
  const todoInput = document.getElementsByName("add-todo")[0];
  const toDo = {
      "add-todo": todoInput.value,
      "done": false 
  };
  todoarr.push(toDo);
  localStorage.setItem("to-do",JSON.stringify(todoarr));
  todoInput.value = "";
  addNewTodo(toDo); 
}

function addNewTodo(item) {
    const ul = document.querySelector(".todos"); 
        const newTodo = document.createElement("li");
        const todoCheckbox = document.createElement("input");
        todoCheckbox.type = "checkbox";
        todoCheckbox.checked = false;
        const todoLabel = document.createElement("label");
        todoLabel.innerHTML = item["add-todo"];
        newTodo.appendChild(todoCheckbox);
        newTodo.appendChild(todoLabel);
        ul.appendChild(newTodo);
}



function populateList(){
//   debugger
    let list = localStorage.getItem("to-do");
    list = JSON.parse(list);
    const ul = document.querySelector(".todos");
    //`<input type=checkbox ${checked}></input> <label>${item['add-todo']}</label>`
    ul.innerHTML = list.map((item, i) =>{
      // debugger
      let checked = item["done"] ? "checked" : "";
      return `<li ><input type=checkbox ${checked} data-idx="${i}"></input> <label>${item['add-todo']}</label></li>`;
        // const newTodo = document.createElement("li");
        // const todoCheckbox = document.createElement("input");
        // // todoCheckbox.innerHTML = "<input type="" >"
        // todoCheckbox.type = "checkbox";
        // todoCheckbox.checked = false;
        // todoCheckbox.setAttribute("data-checked", false);
        // const todoLabel = document.createElement("label");
        // todoLabel.innerHTML = item["add-todo"];
        // newTodo.appendChild(todoCheckbox);
        // newTodo.appendChild(todoLabel);
        // ul.appendChild(newTodo);
    }).join('');
}
//find all the todo items (li) relog it into local storage (clear local storage)
// go through local storage, and find the one we're currently looking at and reset in local storage

//array from local storage objects, 
//find element to change, change to done
// reset under the same key to local storage
// e.target.checked == 'true'
function handleCheckbox(e) {
    // debugger
    const local = JSON.parse(localStorage.getItem("to-do"));
     let item = local[e.target.dataset({idx})];
     item.target.checked = !item.target.checked;
    
}

//function handleCheckbox => 
//when checked, get index of checkbox, key into todoarr and change done: opposite, 
//store into local storage

// do we need to set an id to access the li

function addListener(){
  const submitButton =  document.querySelector('input[type=submit]');
  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addTodo();
  });
}

addListener();
if (localStorage.getItem("to-do") !== null) populateList();
// localStorage.clear();
let checkboxUl = document.querySelector(".todos");
checkboxUl.addEventListener("click", handleCheckbox);