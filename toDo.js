const toDoForm = document.querySelector(".js-todo-form"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".to-do-list");
const TODOS = "toDos";
let toDosArray = [];

//Array에 저장을 먼저하고 그 다음에 LS에 저장으로 수정해야할듯 수정함
function saveToDos() {
    localStorage.setItem(TODOS, JSON.stringify(toDosArray));
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    toDoInput.value = "";
    paintToDos(toDoInputValue);
}

function removeToDo(event) {
    const btn = event.target;
    const btn_li = btn.parentNode;
    toDoList.removeChild(btn_li);
    const cleanToDosArray = toDosArray.filter(function(toDo) {
        return toDo.id !== parseInt(btn_li.id);
    });
    toDosArray = cleanToDosArray;
    saveToDos();
    console.log(toDosArray);
}

function paintToDos(text) {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDosArray.length + 1;
    span.innerText = text;
    btn.innerText = "✖";
    btn.addEventListener("click", removeToDo);
    li.appendChild(span);
    li.appendChild(btn);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDosArray.push(toDoObj);
    saveToDos();
}

function loadToDos() {
    const toDos = localStorage.getItem(TODOS);
    if(toDos !== null) {
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach(function(toDo) {
            paintToDos(toDo.text);
        });
    }
}


function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();