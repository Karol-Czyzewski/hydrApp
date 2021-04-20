import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import { registerSW } from './pwa.js';
// registerSW();

/* place your code below */

const counter = document.querySelector('.glass__counter-js');
const addButton = document.querySelector('.button-add-js');
const removeButton = document.querySelector('.button-remove-js');
let number = 0;
const key = new Date().toISOString().slice(0, 10)

const getItems = localStorage.getItem(key);
if (getItems) {
    number = getItems;
    counter.textContent = getItems;
}

addButton.addEventListener('click', () => {
    counter.textContent = ++number;
    localStorage.setItem(key, number)
});

removeButton.addEventListener('click', () => {
    if (number === 0) { return }
    else {
        counter.textContent = --number;
    }
    localStorage.setItem(key, number)
});
