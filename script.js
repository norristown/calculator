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
        a = '';
        b = '';
        op = '';
});
};
clear();

//Number => display functions
const one = document.querySelector('.one');
one.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 1;
        } else {
            display.textContent += 1;
        }
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 2;
        } else {
            display.textContent += 2;
        }
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 3;
        } else {
            display.textContent += 3;
        }
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 4;
        } else {
            display.textContent += 4;
        }
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 5;
        } else {
            display.textContent += 5;
        }
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 6;
        } else {
            display.textContent += 6;
        }
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 7;
        } else {
            display.textContent += 7;
        }
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 8;
        } else {
            display.textContent += 8;
        }
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 9;
        } else {
            display.textContent += 9;
        }
});

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
        if (display.textContent === '0' || clicked === true) {
            clicked = false;
            display.textContent = '';
            display.textContent += 0;
        } else {
            display.textContent += 0;
        }
});

// GET A & OPERATOR
let a = '';
let op = '';
const operatorButtons = document.querySelectorAll('.right > button:not(.clear)');
let clicked = false;
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        clicked = true;
        op += button.innerHTML;
        a += display.textContent;
    })
});

//GET B & DISPLAY ANSWER
let b = '';
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    b += display.textContent
    const answer = operate(Number(a), Number(b), op);
    display.textContent = answer;
});