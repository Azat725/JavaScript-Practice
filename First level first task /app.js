const newText = prompt();
const element = document.querySelector("#p1");

function changeText() {
    element.innerHTML = newText;
}

changeText()