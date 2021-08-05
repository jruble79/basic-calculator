
const display = document.getElementById('data-display');
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
        }
    } else if (e.target === clearKey) {
        clearData();
        displayData(0);
    } else if (e.target === toggleKey) {
        if ( number == '0' || number == '') {
            number = '-';
            displayData('-');
        } else {
            toggleNumber();
        };
    } else if (e.target === equalsKey) {
        calculateThis();
    } else {
        createNumber(e.target.textContent);
    };
});

function createNumber(numberInput) { // CREATES NUMBER STRING
    number = number + numberInput;
    displayData(number);
};

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
    display.innerHTML = `<div class="text-color" id="main-display">${input}</div>`;
};

function clearData() { // RESETS ALL VARIABLES TO INITIAL STATE
    number = '';
    firstNumber = '';
    secondNumber = '';
    operation = '';
    result = '';
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
        '--background': 'linear-gradient(hsl(205, 100%, 25%), hsl(268, 100%, 25%))',
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
    theme = themes[themeSelect.selectedIndex];
    for ( const prop in theme ) { document.documentElement.style.setProperty( `${prop}`, `${theme[prop]}` ) }
};