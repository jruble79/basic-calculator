
const keyPad = document.getElementById('keypad');
const toggleKey = document.getElementById('toggle');
const clearKey = document.getElementById('clear');
const equalsKey = document.getElementById('return');

let number = '';
let firstNumber = '';
let secondNumber = '';
let operation = '';
let result = '';

keyPad.addEventListener('click', e => {
    if (e.target.className === 'operator') {
        evaluateOperation(e);
    } else if (e.target === clearKey) {
        clearData();
        displayData(0);
    } else if (e.target === toggleKey) {
        evaluateToggle();
    } else if (e.target === equalsKey) {
        calculateThis();
    } else {
        createNumber(e.target.textContent);
    };
});

function evaluateOperation(e) {
    if (operation == '') { // STARTS INITIAL CALCULATION
        operation = e.target.dataset.action;
        checkForZero();
        firstNumber = number;
        number = '';    
    } else { // CONTINUES CALCULATION CHAIN
        calculateThis(); // CALCULATES USING PREEXISTING OPERATION
        firstNumber = result; // ASSIGNS RESULT OF CALCULATION AS NEW FIRST NUMBER
        operation = e.target.dataset.action; // ASSIGNS NEW OPERATION FOR ANY NEXT CALCULATION
        number = '';
    };
}

function createNumber(numberInput) { // CREATES NUMBER STRING
    number = number + numberInput;
    displayData(number);
};

function evaluateToggle() {
    if ( number == '0' || number == '') {
        number = '-';
        displayData('-');
    } else {
        toggleNumber();
        displayData(number);
    };
}

function toggleNumber() { // ALTERNATES NUMBER FROM POSITIVE TO NEGATIVE
    number = number * (-1);
}

function checkForZero() {
    if ( operation == 'divide' && number == '' ) {
        clearData();
        displayData('error');
    } else if ( operation == 'divide' && number == '0' ) {
        clearData();
        displayData('error');
    } else if ( number == '' ) {
        number = 0;
    }
}

function calculateThis() { // PERFORMS CALCULATION
    firstNumber = parseFloat(firstNumber)
    secondNumber = parseFloat(number);

    if (operation === 'divide') {
        result = firstNumber / secondNumber;
    } else if (operation === 'multiply') {
        result = firstNumber * secondNumber;
    } else if (operation === 'minus') {
        result = firstNumber - secondNumber;
    } else if (operation === 'add') {
        result = firstNumber + secondNumber;
    };
    
    displayData(result);
    number = result;
    secondNumber = '';
    operation = '';
};

function displayData(input) { // DISPLAYS INPUT VALUE
    const display = document.getElementById('data-display');
    display.innerHTML = `<div class="text-color" id="main-display">${input}</div>`;
};

function clearData() { // RESETS ALL VARIABLES TO INITIAL STATE
    number = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
    result = '';
};