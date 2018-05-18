const cat1 = document.querySelector('.cat1');
const cat2 = document.querySelector('.cat2');
const cat3 = document.querySelector('.cat3');
const cat4 = document.querySelector('.cat4');
const cat5 = document.querySelector('.cat5');
const cat6 = document.querySelector('.cat6');
const mainCat = document.querySelector('.cat');
const catName = document.querySelector('h2');
const number = document.querySelector('.number');
const totalNumber = document.querySelector('.totalNumber');
const cats = [cat1, cat2, cat3, cat4, cat5, cat6];
const catCounts = [0, 0, 0, 0, 0, 0];
let currentCat = 0;

cats.forEach(function (cat, index) {
    cat.addEventListener('click', function (e) {
        mainCat.src = e.target.src
        catName.textContent = e.target.alt
        currentCat = index;
        number.textContent = catCounts[currentCat];
    })
})

mainCat.addEventListener('click', function () {
    catCounts[currentCat]++;
    number.textContent = catCounts[currentCat];
    totalNumber.textContent = catCounts.reduce((a, b) => a + b, 0);
})