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
    return a % b;
};

const equations = [add, subtract, divide, multiply]

let operate = function(equations) {
   Math.random(equations)
}