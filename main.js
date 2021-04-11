

const display = document.getElementById('data-display');
// const miniDisplay = document.getElementById('mini-display');
const keyPad = document.getElementById('keypad');

let numberInput;
let numVal = 0;
let numValA = 0;
let numValB = 0;
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

// What does EQUALS do?
    // Displays result of calculation
    // Stores result as numValA
        // If user clicks a number
            // The current numValA is wiped
            // New number becomes numValA
    // Sets i = 0 ??;


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// function displayData(input) {
//     display.innerHTML = `<div id="display">${input}</div>`;
// };

// function getNumber() {
//     if (i == 0) {
//         numValA = numValA + numberInput;
//         displayData(numValA);
//     } else {
//         numValB = numValB + numberInput;
//         displayData(numValB);
//     }
// };

// function prepareToOperate() {
//     displayData(operation);
//     if (i == 1) {
//         operationA = operation;
//     } else {
//         operationB = operation;
//         letsOperate(operationA);
//     }
// };

// function letsOperate() {
//     if (operationA == "divide") {
//         numValA /= numValB;
//     } else if (operationA == "multiply") {
//         numValA *= numValB;
//     } else if (operationA == "minus") {
//         numValA -= numValB;
//     } else if (operationA == "add") {
//         numValA += numValB;
//     };
//     displayData(numValA);
// };

// keyPad.addEventListener('click', e => {
//     if (e.target.className == "operator") {
//         operation = e.target.dataset.operation;
//         i++;
//         prepareToOperate(operation);
//     } else {
//         numberInput = e.target.textContent;
//         getNumber(numberInput);
//     }
// });

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

keyPad.addEventListener('click', e => {
    if (e.target.className == "operator") {
        operation = e.target.dataset.operation;
        i++;
        assignVariable();
    } else if (e.target.className != "thing") {
        numberInput = e.target.textContent;
        buildNumberString(numberInput);
    }
});

// Adds clicks on number buttons to a number string
function buildNumberString() {
    numVal = numVal + numberInput;
    numVal = +numVal; // Converts string to a number
    displayData(numVal);
};

// Saves a number to a variable
function assignVariable() {
    if (i == 0) {
        numValB = numVal;
    } else if (i == 1) {
        numValB = numVal;
        numVal = '';
    } else if (i == 2) {
        numValA = numValB;
        numValB = numVal;
    }
};

function performCalculation() {
    if (operation == "add") {
        result = numValA + numValB;
    } else if (operation  == "minus") {
        result = numValA - numValB;
    } else if (operation == "multiply") {
        result = numValA * numValB;
    } else if (operation == "divide") {
        result = numValA / numValB;
    };
    displayData(result);
    i = 0;
    numVal = result;
};

function displayData(input) {
    display.innerHTML = `<div id="display">${input}</div>`;
};

function clearData() {
    numVal = 0;
    numValA = 0;
    numValB = 0;
    i = 0;
    displayData(numVal);
}