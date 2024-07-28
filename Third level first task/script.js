const element = document.querySelector("#myButton");
element.style.backgroundColor = "blue";
element.addEventListener("click", function(){
    element.textContent = "Кнопка нажата!";
    element.style.backgroundColor = "orange";
});