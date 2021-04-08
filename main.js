

const display = document.getElementById('data-display');
const keyPad = document.getElementById('keypad');

let numberInput;
let numValA = '';
let numValB = '';
let result;
let operation;
let operationA;
let operationB;
let i = 0;


// Click to create an initial number value
    // Display numbers as they are clicked
    // Assign value to an initial-variable when operator is clicked

// Click to choose an operation to perform
    // Display operation symbol
    // Assign operation to variable when clicked

// Click to create a second number value
    // Display numbers as they are clicked
    // Assign value to a second-variable when operator is clicked

// Click an operator to get result
    // Create operation
        // Get initial-variable
        // Get operation variable
        // Get second-variable
    // Perform calculation
    // Display result value
    // Assign result value to the initial-variable


function displayData(input) {
    display.innerHTML = `<div id="display">${input}</div>`;
};

function getNumber() {
    if (i == 0) {
        numValA = numValA + numberInput;
        displayData(numValA);
    } else {
        numValB = numValB + numberInput;
        displayData(numValB);
    }
};

function prepareToOperate() {
    displayData(operation);
    if (i == 1) {
        operationA = operation;
    } else {
        operationB = operation;
        letsOperate(operationA);
    }
};

function letsOperate() {
    if (operationA == "divide") {
        numValA /= numValB;
    } else if (operationA == "multiply") {
        numValA *= numValB;
    } else if (operationA == "minus") {
        numValA -= numValB;
    } else if (operationA == "add") {
        numValA += numValB;
    };
    displayData(numValA);
    i = 1;
};

keyPad.addEventListener('click', e => {
    if (e.target.className == "operator") {
        operation = e.target.dataset.operation;
        i++;
        prepareToOperate(operation);
    } else {
        numberInput = e.target.textContent;
        getNumber(numberInput);
    }
});