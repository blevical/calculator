const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b
};

const divide = function(a,b) {
    if (b === 0){
        return "Error";
    }
    return a / b
};

const displayElement = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector(".clear");

let firstOperand = null;
let secondOperand = null;
let currentOperator = null;

function userDisplay(value) {
    displayElement.textContent = value;
}

function operate(operator, a , b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return null;
    }
}