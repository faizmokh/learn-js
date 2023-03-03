let count = 0;
let countEl = document.getElementById("count-el");
let savedEl = document.getElementById("saved-el");

const savedCounts = [];

console.log(countEl);

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    savedEl.innerText = "Previous entries: ";
    savedCounts.push(count);
    savedCounts.forEach((count, index) => {
        const isLast = index === savedCounts.length - 1;
        console.log(savedEl.innerText);
        savedEl.innerText += isLast ? ` ${count}` : `${count} -`;
    });
    resetCount();
}

function resetCount() {
    count = 0;
    countEl.innerText = 0;
}