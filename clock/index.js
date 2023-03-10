'use strict';

setInterval(updateTime, 1000);

const secondHandEl = document.querySelector(".second-hand");
const minuteHandel = document.querySelector(".min-hand");
const hourHandEl = document.querySelector(".hour-hand");
const handEl = document.querySelectorAll(".hand");

function updateTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    if (seconds === 60) {
        secondHandEl.style.transition = 'none';
    } else {
        secondHandEl.style.transition = 'all 0.005s';
    }

    if (minutes === 60) {
        minuteHandel.style.transition = 'none';   
    } else {
        minuteHandel.style.transition = 'all 0.005s';
    }

    if (hourHandEl === 12) {
        hourHandEl.style.transition = 'none';   
    } else {
        hourHandEl.style.transition = 'all 0.005s';
    }

    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHandEl.style.transform = `rotate(${secondDegrees}deg)`;

    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHandel.style.transform =  `rotate(${minuteDegrees}deg)`;

    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHandEl.style.transform =  `rotate(${hourDegrees}deg)`;

}