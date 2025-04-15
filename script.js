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

const operators = [add,subtract,multiply,divide]
const clearButton = document.querySelector(".operators button:nth-child(1)");
const equalButton = document.querySelector(".operators button:nth-child(7)")
const numberButtons = (document.querySelectorAll(".numbers button"))
const operatorButtons = (document.querySelectorAll(".operators button"))
const display = document.getElementById("display")

document.addEventListener("click: +", add)
document.addEventListener("click: -", subtract)
document.addEventListener("click: x", multiply)
document.addEventListener("click /", divide)

function operate(operators,a,b) {
    a = Number(a);
    b = Number(b);
    switch (operators) {
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

function handleButtonClick(event) {
    const buttonValue = event.target.textContent;
    if (display) {
        display.textContent += buttonValue
    } else {
        console.error("Cannot display.")
    }
};

const numberSelection = numberButtons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

const operatorSelection = operatorButtons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

function clearDisplay() {
    if (display) {
        display.textContent = "";
    } else {
        console.error("Cannot clear display.")
    }
};

function calculate() {
    if (display) {
        
    } else {
        console.error("Cannot Calculate.")
    }
};

if(clearButton) {
    clearButton.addEventListener("click", clearDisplay);
}

if(equalButton) {
    equalButton.addEventListener("click", calculate);
};
