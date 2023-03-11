'use-strict';

const inputEls = document.querySelectorAll('.controls input');
console.log(inputEls);

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    console.log(suffix);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputEls.forEach((inputEl) => {
    console.log(inputEl);
    inputEl.addEventListener('change', handleUpdate);
    inputEl.addEventListener('mousemove', handleUpdate);
});