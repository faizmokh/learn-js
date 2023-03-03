let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

const sumEl = document.getElementById("sum-el");

function add() {
    const total = num1 + num2;
    sumEl.innerText = `${num1} + ${num2} = ${total}`
}

function substract() {
    const total = num1 - num2;
    sumEl.innerText = `${num1} - ${num2} = ${total}`
}

function divide() {
    const total = num1 / num2;
    sumEl.innerText = `${num1} / ${num2} = ${total}`
}

function multiply() {
    const total = num1 * num2;
    sumEl.innerText = `${num1} x ${num2} = ${total}`
}
