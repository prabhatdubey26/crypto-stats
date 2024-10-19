const basket1Count = document.querySelector('.basket-1 span');
const basket2Count = document.querySelector('.basket-2 span');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let totalApples = 10;
let firstBasketCount =totalApples;
let secondBasketCount = 0;

basket1Count.innerText = firstBasketCount;
basket2Count.innerText = secondBasketCount;

// Imperative programming 

leftArrow.addEventListener('click', ()=> {
    if(secondBasketCount >0){
        secondBasketCount--;
        firstBasketCount++;
        basket1Count.innerText = firstBasketCount;
        basket2Count.innerText = secondBasketCount;

    }

})

rightArrow.addEventListener('click', ()=> {
    if(firstBasketCount >0){
        firstBasketCount--;
        secondBasketCount++;
        basket1Count.innerText = firstBasketCount;
        basket2Count.innerText = secondBasketCount;

    }
})


