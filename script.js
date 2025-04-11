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

const numbers = [];
for (let i = 0; i <= 9; i++) {
    numbers.push(i)
}

const button = document.getElementById("button")
const display = document.getElementById("display")
const operatorButtons = document.getElementsByClassName("operators")
const numberButtons = document.getElementsByClassName("numbers")

function operate(operator,a,b) {
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

Array.from(numberButtons).ForEach(button => {
    const buttonValue = button.textContent;
    display.textContent += buttonValue;
    if(display) {
        display.textContent += buttonValue;
    } else {
        console.error("Display element not found.");
    }
    });

Array.from(operatorButtons).ForEach(button => {
    const buttonValue = button.textContent;
    displayElement.textContent += buttonValue;
    if(display) {
        display.textContent += buttonValue;
    } else {
        console.error("Display element not found.");
    }
    })