const img = document.querySelector("img");
const p = document.querySelector("p");

img.addEventListener('click', function () {
    p.textContent++;
    return changeImg();
})

function changeImg() {
    if (document.querySelector('p').textContent == 10) {
           return document.querySelector("img").src = "./img/625069434_bf6e0d6ea4_o.jpg"
    }
}