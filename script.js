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
        clickedEqual = false;
        clickedNumber = false;
        clickedOperator = false;
});
};
clear();

//Number => display functions
const one = document.querySelector('.one');
one.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 1;
        } else {
            display.textContent += 1;
        }
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 2;
        } else {
            display.textContent += 2;
        }
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 3;
        } else {
            display.textContent += 3;
        }
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 4;
        } else {
            display.textContent += 4;
        }
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 5;
        } else {
            display.textContent += 5;
        }
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 6;
        } else {
            display.textContent += 6;
        }
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 7;
        } else {
            display.textContent += 7;
        }
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 8;
        } else {
            display.textContent += 8;
        }
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 9;
        } else {
            display.textContent += 9;
        }
});

const zero = document.querySelector('.zero');
zero.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 0;
        } else {
            display.textContent += 0;
        }
});

// GET A & OPERATOR
let a = '';
let b = '';
let op = '';
let clickedOperator = false;
let clickedNumber = false;
let clickedEqual = false;
const operatorButtons = document.querySelectorAll('.right > button:not(.clear)');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (clickedOperator === false && clickedNumber === false) {
            clickedOperator = true;
            clickedNumber = true;
            op += button.innerHTML;
            a += display.textContent;
        } else if (clickedOperator === false && clickedEqual === false) {
            clickedOperator = true;
            b = ''
            b += display.textContent
            let answer = operate(Number(a), Number(b), op);
            display.textContent = answer;
            a = '';
            a = display.textContent;
            op = '';
            op = button.innerHTML
            console.log(a, b, op)
            console.log(clickedOperator, clickedNumber, clickedEqual)
        } else if (clickedOperator === false && clickedNumber === true && clickedEqual === true) {
            clickedEqual = false;
            clickedOperator = true;
            a = '';
            a = display.textContent;
            op = '';
            op = button.innerHTML;
            console.log(a, b, op)
            console.log(clickedOperator, clickedNumber, clickedEqual)
            
        }
    })
});

//GET B & DISPLAY ANSWER
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    clickedEqual = true;
    b = '';
    b += display.textContent
    const answer = operate(Number(a), Number(b), op);
    display.textContent = answer;
    console.log(a, b, op)
    console.log(clickedOperator, clickedNumber, clickedEqual)
});