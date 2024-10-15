const todoInput = document.querySelector("#input");
const todo = document.querySelector(".todo_list");
const submitBtn = document.querySelector(".add_btn");

function paintToDo(toDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerHTML = toDo;
  li.appendChild(span);
  todo.appendChild(li);
}

function createToDo(event) {
  event.preventDefault();
  const toDo = todoInput.value;
  paintToDo(toDo);
  todoInput.value = "";
}

function init() {
  submitBtn.addEventListener("click", createToDo);
}

init();
