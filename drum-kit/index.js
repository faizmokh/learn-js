'use strict';

document.addEventListener("keydown", function(event) {
    const key = event.keyCode;
    updateKeyboardElementState(key, true);
    playSound(key);
})

document.addEventListener("keyup", function(event) {
    const key = event.keyCode;
    updateKeyboardElementState(key, false);
});

function updateKeyboardElementState(key, isPressed) {
    const divEl = document.querySelector(`div[data-key="${key}"]`);
    if (!divEl) return;
    isPressed ? divEl.classList.add("playing") : divEl.classList.remove("playing");
}

function playSound(key) {
    const audioEl = document.querySelector(`audio[data-key="${key}"]`);
    if (!audioEl) return;
    audioEl.currentTime = 0;
    audioEl.play();
}