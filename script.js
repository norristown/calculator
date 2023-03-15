const add = function(a, b) {
	const sum = a + b;
  return sum;
};

const subtract = function(a, b) {
	const sum = a - b;
  return sum;
};

const multiply = function(a, b) {
    const sum = a * b;
    return sum;
};

const divide = function(a, b) {
    const sum = a / b;
    return sum;
};

const operate = function(a, b, op) {
    if (op === '+') {
        return add(a, b);
    } else if (op === '-') {
        return subtract(a, b);
    } else if (op === '*') {
        return multiply(a, b);
    } else if (op === '/') {
        return divide(a, b);
    }
}
operate();

//CALCULATOR
const display = document.querySelector('.display');

//CLEAR
function clear() {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        display.textContent = "0";
});
};
clear();

//Number => display functions
const one = document.querySelector('.one');
one.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.innerHTML = "";
        display.textContent += '1';
    } else {
        display.textContent += "1";
    }
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.innerHTML = "";
        display.textContent += '2';
    } else {
        display.textContent += "2";
    }
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    if (display.textContent === '0') {
        display.innerHTML = "";
        display.textContent += '3';
    } else {
        display.textContent += "3";
    }
});

const plus = document.querySelector('.plus');
plus.addEventListener('click', () => { 
    add(display.textContent, )
});