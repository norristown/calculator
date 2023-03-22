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
function clear(text) {
    const clear = document.querySelector('.clear');
    clear.addEventListener('click', () => {
        display.textContent = text;
        a = '';
        b = '';
        op = '';
        clickedEqual = false;
        clickedNumber = false;
        clickedOperator = false;
        console.log(a, b, op)
        console.log(clickedOperator, clickedNumber, clickedEqual)
});
};
clear(0);

//Number => display functions
const one = document.querySelector('.one');
one.addEventListener('click', () => {
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            display.textContent = '';
            display.textContent += 1;
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 1;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 2;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 3;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 4;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 5;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 6;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 7;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 8;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 9;
            op = '';
            a = '';
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
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            display.textContent = '';
            display.textContent += 0;
            op = '';
            a = '';
        } else {
            display.textContent += 0;
        }
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (display.textContent === '0' || clickedOperator === true) {
        clickedOperator = false;
        display.textContent = '';
        display.textContent += '.';
    } else if (clickedEqual === true) {
        clickedEqual = false;
        clickedNumber = false;
        display.textContent = '';
        display.textContent += '.';
        op = '';
        a = '';
    } else {
        display.textContent += '.';
    }
});

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    const del = display.textContent.length - 1;
    const x = display.textContent.slice(0, del);
    display.textContent = x;
    
})

// Operator functions
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
            console.log('test2',clickedOperator, clickedNumber, clickedEqual)
        } else if (clickedOperator === false && clickedNumber === true && clickedEqual === true) {
            clickedEqual = false;
            clickedOperator = true;
            a = '';
            a = display.textContent;
            op = '';
            op = button.innerHTML;
            console.log(a, b, op)
            console.log('third', clickedOperator, clickedNumber, clickedEqual)
        } else if (clickedOperator === true) {
            op = '';
            op = button.innerHTML;
            console.log(a, b, op);
        }
    })
});

//Equal button function
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