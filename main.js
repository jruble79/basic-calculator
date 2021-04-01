
// const calculator = document.getElementById('calculator');
const dataDisplay = document.getElementById('data-display');
const keyPad = document.getElementById('keypad');
const button = document.getElementsByTagName('button');
const display = document.getElementById('data-display');
let keyPress = '';
let numValA = '';
let numValB = '';
let methodCount = 0;
let calculatedValue;


const divide = (numValA, numValB) => numValA / numValB;
const multiply = (numValA, numValB) => numValA * numValB;
const subtract = (numValA, numValB) => numValA - numValB;
const add = (numValA, numValB) => numValA + numValB;


/////////////////////////////////////////////////////////////////
// FUNCTIONS
/////////////////////////////////////////////////////////////////

// Displays keyPress data to data-display
function displayData(input) {

    if (input == "divide") {input = "÷"};
    if (input == "multiply") {input = "&times;"};
    if (input == "minus") {input = "-"};
    if (input == "add") {input = "+"};
    if (input == "toggle") {input = "&MinusPlus;"};
    if (input == "clear") {input = ""};
    if (input == "calculate") {input = ""};

    display.innerHTML = `<div id="display">${input}</div>`;
}


/////////////////////////////////////////////////////////////////
// PROCESSES
/////////////////////////////////////////////////////////////////

// Capture button presses

keyPad.addEventListener('click', e => {

    // Sort into numbers and operators

    if (e.target.className == "operator") {
        keyPress = e.target.dataset.operation;
        methodCount ++;
    } else {
        keyPress = e.target.textContent;
        number = keyPress;
    }

    // Display button press value to data-display

    displayData(keyPress);

    // Get first numVal

    if (methodCount == 0 && e.target.className != "operator") {
        numValA = numValA + number;
        displayData(numValA);
        number = '';
    } 
    
    // Get second numVal
    
      else if (methodCount == 1 && e.target.className != "operator") {
        numValB = numValB + number;
        displayData(numValB);
        number = '';
    }

    // Perform calculation

      else if (methodCount == 2) {

    }
    
});
