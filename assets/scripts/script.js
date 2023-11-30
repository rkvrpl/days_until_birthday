"use strict"

const date = document.getElementById('date');
const button = document.getElementById('button');
const resultDays = document.querySelector('.result');

button.addEventListener('click', function(){
    const dateOfbirth = new Date(date.value);
    const currentDate = new Date();
    const diff = dateOfbirth - currentDate;
    const result = new Date(diff);
    const days = Math.round(result.getDate());

    let nameDay = '';
    if (days > 10 && [11, 12, 13, 14].includes(days%100)) {
        nameDay = ' дней';
    }
    else if ((days % 10) === 1){
        nameDay = ' день';
    }
    else if((days % 10) === 2 && (days % 10) === 3 && (days % 10) === 4){
        nameDay = ' дня';
    }
    else{
        nameDay = ' дней';
    }
    
    resultDays.textContent = 'До вашего дня рождения осталось ' + days + nameDay; 
});

