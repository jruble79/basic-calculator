
// const calculator = document.getElementById('calculator');
const dataDisplay = document.getElementById('data-display');
const keyPad = document.getElementById('keypad');
const button = document.getElementsByTagName('button');

keyPad.addEventListener('click', e => {
    if (e.target.className == "operator") {
        console.log(e.target.dataset.operation);
    } else {
        console.log(e.target.textContent);
    }

});