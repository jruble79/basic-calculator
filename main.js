
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

keyPad.addEventListener('click', e => {
    if (e.target.className === 'operator') {
        displayedOperation = e.target.dataset.action;
        canWeCalculate(); // CHECKS IF THIS IS THE SECOND OPERATOR PUSH. CALCULATES IF TRUE
        getFirstOperation(); // SAVES FIRST OPERATION TO VARIABLE
        getFirstNumber(); // // ASSIGNS NUMBER IN DISPLAY TO VARIABLE
    } else if (e.target === clearKey) {
        clearData(); // RESETS ALL VARIABLES TO INITIAL STATE
    } else if (e.target === toggleKey) {
        toggleNumber(); // ALTERNATES NUMBER FROM POSITIVE TO NEGATIVE
    } else if (e.target === equalsKey) {
        calculateThis(); // PERFORMS CALCULATION
    } else {
        numberInput = e.target.textContent;
        createNumber(numberInput); // CREATES NUMBER STRING
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

function toggleNumber() { // ALTERNATES NUMBER FROM POSITIVE TO NEGATIVE
    displayedNumber = -1 * displayedNumber;
    displayedNumber = parseFloat(displayedNumber);
    displayData(displayedNumber);
}

function canWeCalculate() { // CHECKS IF THIS IS THE SECOND OPERATOR PUSH. CALCULATES IF TRUE
    if (operation != '') {
        calculateThis();
    }
};

function calculateThis() { // PERFORMS CALCULATION
    if (operation === 'divide') {
        result = parseFloat(firstNumber) / parseFloat(displayedNumber);
    } else if (operation === 'multiply') {
        result = parseFloat(firstNumber) * parseFloat(displayedNumber);
    } else if (operation === 'minus') {
        result = parseFloat(firstNumber) - parseFloat(displayedNumber);
    } else if (operation === 'add') {
        result = parseFloat(firstNumber) + parseFloat(displayedNumber);
    };
    
    displayData(result);
    displayedNumber = result;
    operation = '';
};

function displayData(input) { // DISPLAYS INPUT VALUE
    display.innerHTML = `<div class="text-color" id="main-display">${input}</div>`;
};

function clearData() { // RESETS ALL VARIABLES TO INITIAL STATE
    displayedNumber = '';
    displayedOperation = '';
    numberInput = '';
    firstNumber = 0;
    result = '';
    operation = '';
    i = 0;
    displayData(0);
};


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
// COLOR THEMES ///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const background = document.getElementById('background');
const calculator = document.getElementById('calculator');
const mainDisplay = document.getElementById('main-display');
const button = document.querySelectorAll('button');
const themeSelect = document.getElementById('color-themes');
const header = document.querySelectorAll('h1, select, label');
const dataDisplay = document.getElementById('data-display');

const themes = [
    {
        'theme': 'Dusk',
        '--background': 'linear-gradient(hsl(205, 100%, 25%), hsl(268, 100%, 25%)',
        '--button-background': 'hsl(var(--white), .1)',
        '--text': 'hsl(var(--white), .5)',
        '--outline': '1px solid hsl(var(--white), .25)'
    },
    {
        'theme': 'Midnight',
        '--background': 'linear-gradient(black, hsl(212, 38%, 15%))',
        '--button-background': 'hsl(var(--white), .1)',
        '--text': 'hsl(var(--white), .5)',
        '--outline': '1px solid hsl(var(--white), .25)'
    },
    {
        'theme': 'Daybreak',
        '--background': 'linear-gradient(hsl(204, 56%, 12%), hsl(54, 25%, 60%))',
        '--button-background': 'hsl(var(--white), .1)',
        '--text': 'hsl(var(--white), .5)',
        '--outline': '1px solid hsl(var(--white), .25)'
    },
    {
        'theme': 'Midday',
        '--background': 'linear-gradient(hsl(53, 100%, 76%), hsl(52, 70%, 87%))',
        '--button-background': 'hsl(var(--black), .1)',
        '--text': 'hsl(var(--black), .5)',
        '--outline': '1px solid hsl(var(--black), .1)'
    },
];

function themeChange() {
    let root = document.documentElement;
    i = themeSelect.selectedIndex;
    theme = themes[i];
    for ( const prop in theme) { root.style.setProperty( `${prop}`, `${theme[prop]}` ) }
};