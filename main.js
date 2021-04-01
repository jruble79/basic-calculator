
// const calculator = document.getElementById('calculator');
const dataDisplay = document.getElementById('data-display');
const keyPad = document.getElementById('keypad');
const button = document.getElementsByTagName('button');

keyPad.addEventListener('click', e => {
    if (e.target.className == "operator") {
        console.log("I'm an operator!");
    } else {
        console.log("I'm a number-thing!");
    }

});