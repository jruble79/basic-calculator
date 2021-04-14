
const display = document.getElementById('data-display');
const keyPad = document.getElementById('keypad');
const toggleKey = document.getElementById('toggle');
const clearKey = document.getElementById('clear');
const equalsKey = document.getElementById('return');

let displayedNumber = '';
let displayedOperation = '';
let numberInput = '';
let firstNumber = 0;
let result = '';
let operation = '';
let i = 0;

keyPad.addEventListener('click', e => {
    if (e.target.className === 'operator') {
        displayedOperation = e.target.dataset.action;
        canWeCalculate();
        getFirstOperation();
        getFirstNumber();
    } else if (e.target === clearKey) {
        clearData();
    } else if (e.target === toggleKey) {
        toggleNumber();
    } else if (e.target === equalsKey) {
        calculateThis();
    } else {
        numberInput = e.target.textContent;
        createNumber(numberInput);
    };
});

function createNumber() { // CREATES NUMBER STRING
    displayedNumber = displayedNumber + numberInput;
    displayData(displayedNumber);
};

function getFirstNumber() { // ASSIGNS NUMBER IN DISPLAY TO VARIABLE
    firstNumber = displayedNumber;
    displayData(displayedNumber);
    displayedNumber = '';
};

function getFirstOperation() { // ASSIGNS OPERATION IN DISPLAY TO VARIABLE
    operation = displayedOperation;
    displayedOperation = '';
}

function toggleNumber() {
    displayedNumber = -1 * displayedNumber;
    displayedNumber = parseFloat(displayedNumber);
    displayData(displayedNumber);
}

function canWeCalculate() {
    i++;
    if (i === 2) {
        i--;
        calculateThis();
    }
};

function calculateThis() {
    if (operation === 'divide') {
        result = parseFloat(firstNumber) / parseFloat(displayedNumber);
    } else if (operation === 'multiply') {
        result = parseFloat(firstNumber) * parseFloat(displayedNumber);
    } else if (operation === 'minus') {
        result = parseFloat(firstNumber) - parseFloat(displayedNumber);
    } else if (operation === 'add') {
        result = parseFloat(firstNumber) + parseFloat(displayedNumber);
    };

    console.log(`
    i=${i}
    firstNumber=${firstNumber}
    operation=${operation}
    displayedNumber=${displayedNumber}
    result=${result}`);
    
    displayData(result);
    displayedNumber = result;
    operation = '';

};

function displayData(input) { // DISPLAYS INPUT VALUE
    display.innerHTML = `<div id="display">${input}</div>`;
};

function clearData() {
    firstNumber = 0;
    displayedNumber = 0;
    operation = '';
    displayedOperation = '';
    i = 0;
    displayData(displayedNumber);
    displayedNumber = '';
};

