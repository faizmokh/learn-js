'use strict';

const welcomeEl = document.getElementById("welcome-el");

const name = "Faiz Mokhtar";
const greeting = `Welcome back ${name}`;

welcomeEl.innerText = greeting;

welcomeEl.innerText += " 👋";