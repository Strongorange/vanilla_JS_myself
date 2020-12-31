const nameForm = document.querySelector(".js-name-form"),
      nameInput = nameForm.querySelector("input"),
      greeting = document.querySelector(".js-greeting");
const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function handleSubmit(event) {
    event.preventDefault();
    const userName = nameInput.value;
    nameInput.value = "";
    paintGreeting(userName);
}

function askForName() {
    nameForm.classList.add(SHOWING_CN);
    nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    greeting.classList.add(SHOWING_CN);
    nameForm.classList.remove(SHOWING_CN);
    greeting.innerText = `Have a Nice Day ${text}!`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();