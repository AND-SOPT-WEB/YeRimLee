// 요소 선택
const todoInput = document.querySelector("#input");
const todo = document.querySelector(".todo_list");
const submitBtn = document.querySelector(".add_btn");
const TODOS_KEY = "todos";
// 빈 투두 배열
let todos = [];

// 투두 항목을 로컬스토리지에 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

// 투두 항목을 생성
function createToDo() {
  const toDo = todoInput.value;
  paintToDo(toDo);
  saveToDos();
  // 입력창 초기화
  todoInput.value = "";
}

// 투두 항목을 화면에 출력
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

// 투두 항목을 삭제
function deleteTodo(event) {
  const removeTodoItem = event.target.parentElement;
  removeTodoItem.remove();
  todos = todos.filter((toDo) => toDo.id !== parseInt(removeTodoItem.id));
  saveToDos();
}

// 로컬 스토리지에 저장된 투두 항목 불러오기
function loadToDos() {
  const savedToDos = localStorage.getItem(TODOS_KEY);
  if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
}

// 페이지 로드 시 투두 항목 불러오기
function init() {
  loadToDos();
  submitBtn.addEventListener("click", createToDo);
}

init();
