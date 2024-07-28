const btn = document.querySelector("#changeColor");
const paragraphs = document.querySelectorAll('p');


btn.addEventListener("click", function() {
    paragraphs.forEach(paragraph => paragraph.style.color = 'orange');
});