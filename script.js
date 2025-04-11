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

numberButtons.ForEach(button => {
    const buttonValue = button.textContent;
    displayElement.textContent += buttonValue;
})

operatorButtons.ForEach(button => {
    const buttonValue = button.textContent;
    displayElement.textContent += buttonValue;
})

let populateDisplay = function() {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        display.textContent += buttonValue;
    })
};

