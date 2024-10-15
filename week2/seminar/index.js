// 요소 선택
const todoInput = document.querySelector("#input");
const todo = document.querySelector(".todo_list");
const submitBtn = document.querySelector(".add_btn");

function createToDo(event) {
  event.preventDefault();
  const toDo = todoInput.value;
  paintToDo(toDo);
  todoInput.value = "";
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  span.innerHTML = newToDo;
  button.innerHTML = "X";
  button.addEventListener("click", deleteTodo);
  todo.appendChild(li);
}

function deleteTodo(event) {
  const removeTodoItem = event.target.parentElement;
  removeTodoItem.remove();
}

function init() {
  submitBtn.addEventListener("click", createToDo);
}

init();
