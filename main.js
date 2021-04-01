
// const calculator = document.getElementById('calculator');
const dataDisplay = document.getElementById('data-display');
const keyPad = document.getElementById('keypad');
const button = document.getElementsByTagName('button');
const display = document.getElementById('data-display');
let keyPress;

/////////////////////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////
// PROCESSES
/////////////////////////////////////////////////////////////////

// Capture button presses
// Sort into numbers and operators
// Display button press value to data-display

keyPad.addEventListener('click', e => {
    if (e.target.className == "operator") {
        keyPress = e.target.dataset.operation;
    } else {
        keyPress = e.target.textContent;
    }
    display.innerHTML = `<div id="display">${keyPress}</div>`;
    return keyPress;
});
