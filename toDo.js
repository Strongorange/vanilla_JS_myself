const toDoForm = document.querySelector(".js-todo-form"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".to-do-list");
const TODOS = "toDos";
const toDosArray = [];

//Array에 저장을 먼저하고 그 다음에 LS에 저장으로 수정해야할듯 수정함
function saveToDos(text) {
    localStorage.setItem(TODOS, text);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    toDoInput.value = "";
    paintToDos(toDoInputValue);
}

function askForToDo() {
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

function handleClick(event) {

}

function paintToDos(text) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDosArray.length + 1;
    span.innerText = text;
    btn.innerText = "✖";
    btn.addEventListener("click", handleClick);
    li.appendChild(span);
    li.appendChild(btn);
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDosArray.push(toDoObj);
    console.log(toDosArray);
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS);
    if (toDos === null) {
        askForToDo();
    } else {
        paintToDos();
    }
}

function init() {
    loadToDos();
}

init();