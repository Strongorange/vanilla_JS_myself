const IMGCOUNT = 4;
const BODY = document.querySelector("body");

function loadImage(number) {
    const image = document.createElement("img");
    image.src = `images/${number}.jpg`;
    image.classList.add("bgImg");
    BODY.appendChild(image);
}

function genNumber() {
    const randomNumber = Math.floor(Math.random() * IMGCOUNT + 1);
    return randomNumber;
}

//만약 const bgNumber 없이 loadImage부터 실행시킨다면? -> loadImage에서 src의 number가 지정된 상태가 아니기때문에 사용불가능!
function init() {
  const bgNumber = genNumber();
  loadImage(bgNumber);
}


init();