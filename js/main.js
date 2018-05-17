const cata = document.querySelector(".cata");
const catb = document.querySelector(".catb");
const count1 = document.querySelector(".count1");
const count2 = document.querySelector(".count2");
const span1 = document.querySelector(".cat1")
const span2 = document.querySelector(".cat2")


span1.textContent = "small cat";
span2.textContent = "another one small cat";

cata.addEventListener('click', function () {
    count1.textContent++;
    return changeImg();
})

function changeImg() {
    if (count1.textContent == 10) {
        return cata.src = "./img/625069434_bf6e0d6ea4_o.jpg"
    }
}

catb.addEventListener('click', function () {
    count2.textContent++;
})