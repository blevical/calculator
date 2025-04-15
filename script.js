function add(a,b) {
    return a + b;
};

function subtract(a,b) {
    return a - b;
};

function multiply(a,b) {
    return a * b
};

function divide(a,b) {
    if (b === 0){
        return "Error";
    }
    return a / b
};

const clearButton = document.querySelector(".operators button:nth-child(1)");
const equalButton = document.querySelector(".operators button:nth-child(7)")
const numberButtons = (document.querySelectorAll(".numbers button"))
const operatorButtons = (document.querySelectorAll(".operators button"))
const display = document.getElementById("display")

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
};

function handleNumberClick(event) {
    const numberValue = event.target.textContent;
    if (display) {
        display.textContent += numberValue
    } else {
        console.error("Cannot display.")
    }
};

numberButtons.forEach(button => {
    button.addEventListener("click", handleNumberClick);
});

operatorButtons.forEach(button => {
    button.addEventListener("click", handleOperatorClick);
});

function handleOperatorClick(event) {
    const operator = event.target.textContent;
    if (firstOperand === null) {
        firstOperand = display.textContent;
        currentOperator = operator;
        display.textContent = '';
    } else {
        secondOperand = display.textContent;
        const result = operate(currentOperator, firstOperand, secondOperand);
        display.textContent = result;
        firstOperand = result;
        currentOperator = operator;
        display.textContent = '';
    }
};

function clearDisplay() {
    if (display) {
        display.textContent = "";
    } else {
        console.error("Cannot clear display.")
    }
};

function updateDisplay(value) {
    display.textContent = value;
};

if(clearButton) {
    clearButton.addEventListener("click", clearDisplay);
};

function handleEqualClick() {
    if (firstOperand !== null && currentOperator) {
        secondOperand = display.textContent;
        const result = operate(currentOperator, firstOperand, secondOperand);
        display.textContent = result;
        firstOperand = null;
        currentOperator = null;
        secondOperand = null;
    }
};

handleEqualClick(updateDisplay);

equalButton.addEventListener("click", handleEqualClick);




