const coolClassElements = document.querySelectorAll(".coolClass");

for(const element of coolClassElements) {
    element.textContent = "Этот тег принадлежит классу coolClass";
}
