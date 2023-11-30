"use strict"

const date = document.getElementById('date');
const button = document.getElementById('button');
const result = document.querySelector('.result');

button.addEventListener('click', function(){
    const dateOfbirth = date.value;
    const currentDate = new Date();
    console.log(dateOfbirth);
});