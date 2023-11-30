"use strict"

const date = document.getElementById('date');
const button = document.getElementById('button');
const resultDays = document.querySelector('.result');
const currentDate = new Date();

button.addEventListener('click', function(){
    const dateOfbirth = Date.parse(date.value);
    const parsedDate = Date.parse(currentDate);
    const diff = dateOfbirth - parsedDate;
    const diffDays = Math.ceil(diff / 1000 / 3600 / 24);
    console.log(diffDays);

    let nameDay = '';
    if (diffDays > 10 && [11, 12, 13, 14].includes(diffDays%100)) {
        nameDay = ' дней';
    }
    else if ((diffDays % 10) === 1){
        nameDay = ' день';
    }
    else if((diffDays % 10) === 2 && (diffDays % 10) === 3 && (diffDays % 10) === 4){
        nameDay = ' дня';
    }
    else{
        nameDay = ' дней';
    }

    if(diffDays < 0){
        resultDays.textContent = `Ваш день рождения в этом году уже прошел :)`; 
    }
    else if (diffDays === 0) {
        resultDays.textContent =`Ваш день рождения сегодня!`;
    } 
    else {
        resultDays.textContent = `До вашего дня рождения ${diffDays} ${nameDay}!`;
    }
    
});

