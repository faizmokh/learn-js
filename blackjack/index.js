'use strict';

const MAX_CARD_VALUE = 21;
const cards = [];

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const startBtnEl = document.getElementById("start-btn");
const newBtnEl = document.getElementById("new-btn");
const playerEl = document.getElementById("player-el");

let hasBlackJack = false;
let isAlive = true;
let message = "";

let player = {
    name: "Faiz",
    chips: 420,
}

playerEl.textContent = `${player.name} : $${player.chips}`;

renderInitialState();

function renderInitialState() {
    startBtnEl.disabled = false;
    newBtnEl.disabled = true;
}

function startGame() {
    const shouldReset = hasBlackJack || isAlive === false;
    if (shouldReset) {
        console.log("reset");
        resetCard();
        addCard();
        addCard();            
    } else {
        console.log("add new");
        addCard();
        addCard();            
    }
    updateGameState();
}

function updateGameState() {
    const sum = sumOfCards();
    console.log("Start game!");
    if (sum < MAX_CARD_VALUE) {
        isAlive = true;
        message = "Do you want to draw a new card?";
    } else if (sum === MAX_CARD_VALUE) {
        isAlive = false;
        hasBlackJack = true;
        message = "Blackjack!";
    } else {
        isAlive = false;
        message = "You lose! House win!";
    }
    startBtnEl.disabled = isAlive === true;
    newBtnEl.disabled = isAlive === false;
    cardsEl.textContent = `Cards: ${getDisplayTextForCards()}`;
    messageEl.textContent = message;
    sumEl.textContent = (sum > 0) ? `Sum: ${sum}` : "Sum:";
}

function newCard() {
    if (sumOfCards() >= 21) return;
    console.log("Draw a new card!");
    addCard();
    updateGameState();
}

function addCard() {
    cards.push(getRandomCard());
}

function resetCard() {
    cards.splice(0, cards.length);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomCard() {
    return randomNumber(2, 11);
}

function sumOfCards() {
    let sum = 0;
    cards.forEach((card) => {
        sum += card;
    });
    return sum;
}

function getDisplayTextForCards() {
    let text = "";
    cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        text += isLast ? card.toString() : `${card} / `;
    });
    return text;
}