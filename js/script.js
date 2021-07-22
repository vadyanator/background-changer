'use strict'

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('.color-btn');
const hexCode = document.querySelector('.color-code');

button.addEventListener('click', () => {
    let colorCode = getColorCode();
    document.body.style.backgroundColor = colorCode;
    hexCode.innerHTML = colorCode;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

function getColorCode() {
    let code = '#';

    for (let i = 0; i < 6; i++) {
        code += hex[getRandomNumber()];
    }

    return code;
}