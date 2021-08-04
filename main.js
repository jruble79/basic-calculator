
const display = document.getElementById('data-display');
const keyPad = document.getElementById('keypad');
const toggleKey = document.getElementById('toggle');
const clearKey = document.getElementById('clear');
const equalsKey = document.getElementById('return');

let number = 0;
let firstNumber = '';
let secondNumber = '';
let operation = '';
let result = '';

keyPad.addEventListener('click', e => {
    if (e.target.className === 'operator') {
        if (operation == '') {
            operation = e.target.dataset.action;
            firstNumber = number;
            number = '';    
        } else {
            calculateThis();
            operation = e.target.dataset.action;
            firstNumber = result;
            number = '';
        }
    } else if (e.target === clearKey) {
        clearData();
        displayData(0);
    } else if (e.target === toggleKey) {
        toggleNumber();
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
    displayData(number);
}

function calculateThis() { // PERFORMS CALCULATION
    secondNumber = number;

    if (operation === 'divide') {
        result = parseFloat(firstNumber) / parseFloat(secondNumber);
    } else if (operation === 'multiply') {
        result = parseFloat(firstNumber) * parseFloat(secondNumber);
    } else if (operation === 'minus') {
        result = parseFloat(firstNumber) - parseFloat(secondNumber);
    } else if (operation === 'add') {
        result = parseFloat(firstNumber) + parseFloat(secondNumber);
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