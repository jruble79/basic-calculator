
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
    i++;
    if (i === 2) {
        i--;
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

    // console.log(`
    // i=${i}
    // firstNumber=${firstNumber}
    // operation=${operation}
    // displayedNumber=${displayedNumber}
    // result=${result}`);
    
    displayData(result);
    displayedNumber = result;
    operation = '';
    i = 0;
};

function displayData(input) { // DISPLAYS INPUT VALUE
    display.innerHTML = `<div id="main-display">${input}</div>`;
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
        theme: 'Dusk',
        background: 'linear-gradient(#044b7e, #1e0140)',
        buttonBackground: 'rgba(255, 255, 255, 0.1)',
        buttonText: 'rgba(255, 255, 255, .5)',
        displayText: 'rgba(255, 255, 255, 0.5)',
        outline: '1px solid rgba(255, 255, 255, 0.25)',
        header: 'rgba(255, 255, 255, 0.35)',
    },
    {
        theme: 'Midnight',
        background: 'linear-gradient(#000000, #172433)',
        buttonBackground: 'rgba(255, 255, 255, 0.1)',
        buttonText: 'rgba(255, 255, 255, .5)',
        displayText: 'rgba(255, 255, 255, 0.5)',
        outline: '1px solid rgba(255, 255, 255, 0.25)',
        header: 'rgba(255, 255, 255, 0.35)',
    },
    {
        theme: 'Daybreak',
        background: 'linear-gradient(#0d212e, #b3ae7f)',
        buttonBackground: 'rgba(255, 255, 255, 0.1)',
        buttonText: 'rgba(255, 255, 255, .5)',
        displayText: 'rgba(255, 255, 255, 0.5)',
        outline: '1px solid rgba(255, 255, 255, 0.25)',
        header: 'rgba(255, 255, 255, 0.35)',
    },
    {
        theme: 'Midday',
        background: 'linear-gradient(#fff185, #f5efc6)',
        buttonBackground: 'rgba(255, 254, 206, 1)',
        buttonText: 'rgba(0, 0, 0, .5)',
        displayText: 'rgba(0, 0, 0, .5)',
        outline: '1px solid rgba(255, 254, 206, 1)',
        header: 'rgba(0, 0, 0, .35)',
    },
];

function themeChange() {
    const indexedValue = themes[themeSelect.selectedIndex];
    let myStyleSheet = document.styleSheets[0];

    background.style.backgroundImage = indexedValue.background;
    calculator.style.outline = indexedValue.outline;
    myStyleSheet.deleteRule(0); //Removes anything added to the first line of the CSS Rules list
    myStyleSheet.insertRule(`#main-display {color: ${indexedValue.displayText} !important;}`); //Adds this to the top of the CSS list

    headerChange();
    buttonChange();
};

function buttonChange() {
    for (i=0; i<button.length; i++) {
        button[i].style.backgroundColor = themes[themeSelect.selectedIndex].buttonBackground;
        button[i].style.color = themes[themeSelect.selectedIndex].buttonText;
    };
};

function headerChange() {
    for (i=0; i<header.length; i++) {
        header[i].style.color = themes[themeSelect.selectedIndex].header;
    };
};