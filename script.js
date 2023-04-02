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
    } else if (op === '×' || op === '*') {
        return multiply(a, b);
    } else if (op === '÷' || op === '/') {
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
        clickedDecimal = false;
});
};
clear(0);

let a = '';
let b = '';
let op = '';
let clickedOperator = false;
let clickedNumber = false;
let clickedEqual = false;

function numFunction(num) {
    if (display.textContent === '0' || clickedOperator === true) {
        clickedOperator = false;
        display.textContent = '';
        display.textContent += num;
    } else if (clickedEqual === true) {
        clickedEqual = false;
        clickedNumber = false;
        display.textContent = '';
        display.textContent += num;
        op = '';
        a = '';
    } else {
        display.textContent += num;
    }
}

//Number => display functions
const one = document.querySelector('.one');
one.addEventListener('click', () => {
    numFunction(1);
});

const two = document.querySelector('.two');
two.addEventListener('click', () => {
    numFunction(2);
});

const three = document.querySelector('.three');
three.addEventListener('click', () => {
    numFunction(3);
});

const four = document.querySelector('.four');
four.addEventListener('click', () => {
    numFunction(4);
});

const five = document.querySelector('.five');
five.addEventListener('click', () => {
    numFunction(5);
});

const six = document.querySelector('.six');
six.addEventListener('click', () => {
    numFunction(6);
});

const seven = document.querySelector('.seven');
seven.addEventListener('click', () => {
    numFunction(7);
});

const eight = document.querySelector('.eight');
eight.addEventListener('click', () => {
    numFunction(8);
});

const nine = document.querySelector('.nine');
nine.addEventListener('click', () => {
    numFunction(9);
});

const zero_48 = document.querySelector('.zero');
zero_48.addEventListener('click', () => {
    numFunction(0);
});

let clickedDecimal = false;
const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', () => {
    if (clickedDecimal === false){
        if (display.textContent === '0' || clickedOperator === true) {
            clickedOperator = false;
            clickedDecimal = true;
            display.textContent = '';
            display.textContent += '.';
        } else if (clickedEqual === true) {
            clickedEqual = false;
            clickedNumber = false;
            clickedDecimal = true;
            display.textContent = '';
            display.textContent += '.';
            op = '';
            a = '';
        } else {
            clickedDecimal = true;
            display.textContent += '.';
        }
    } else {
        backspaceFunction();
    }
});

const backspaceFunction = () => {
const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    const del = display.textContent.length - 1;
    const x = display.textContent.slice(0, del);
    display.textContent = x;
    clickedDecimal = false;
})
}
backspaceFunction();

// Operator functions
function operatorFunction(operator) {
    if (clickedOperator === false && clickedNumber === false) {
        clickedOperator = true;
        clickedNumber = true;
        clickedDecimal = false;
        op += operator;
        a += display.textContent;
    } else if (clickedOperator === false && clickedEqual === false) {
        clickedOperator = true;
        clickedDecimal = false;
        b = ''
        b += display.textContent
        let answer = Math.round(operate(Number(a), Number(b), op) * 1000) / 1000;
        display.textContent = answer;
        a = '';
        a = display.textContent;
        op = '';
        op = operator
        console.log(a, b, op)
        console.log('test2',clickedOperator, clickedNumber, clickedEqual)
    } else if (clickedOperator === false && clickedNumber === true && clickedEqual === true) {
        clickedEqual = false;
        clickedOperator = true;
        clickedDecimal = false;
        a = '';
        a = display.textContent;
        op = '';
        op = operator;
        console.log(a, b, op)
        console.log('third', clickedOperator, clickedNumber, clickedEqual)
    } else if (clickedOperator === true) {
        clickedDecimal = false;
        op = '';
        op = operator;
        console.log(a, b, op);
    }
}
const operatorButtons = document.querySelectorAll('.right > button:not(.clear)');
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (clickedOperator === false && clickedNumber === false) {
            clickedOperator = true;
            clickedNumber = true;
            clickedDecimal = false;
            op += button.innerHTML;
            a += display.textContent;
        } else if (clickedOperator === false && clickedEqual === false) {
            clickedOperator = true;
            clickedDecimal = false;
            b = ''
            b += display.textContent
            let answer = Math.round(operate(Number(a), Number(b), op) * 1000) / 1000;
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
            clickedDecimal = false;
            a = '';
            a = display.textContent;
            op = '';
            op = button.innerHTML;
            console.log(a, b, op)
            console.log('third', clickedOperator, clickedNumber, clickedEqual)
        } else if (clickedOperator === true) {
            clickedDecimal = false;
            op = '';
            op = button.innerHTML;
            console.log(a, b, op);
        }
    })
});

//Equal button function
function equalFunction() {
    clickedEqual = true;
    clickedDecimal = false;
    b = '';
    b += display.textContent
    const answer = Math.round(operate(Number(a), Number(b), op) * 1000) / 1000 ;
    display.textContent = answer;
}
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    equalFunction();
});

//Keypress Function
window.addEventListener('keypress', function(e) {
    console.log(e.key)
    if (
        e.key === '-' ||
        e.key === '+' || 
        e.key === '*' || 
        e.key === '/'
    ) {
        operatorFunction(e.key);
    } else if (e.key === 'Enter') { //This doesn't work even though pressing the Equal button does and it's the same code
        console.log(e)
        equalFunction();
    } else if (
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '0' 
    ) {
        numFunction(e.key)
    // } else if (e.key === 'Backspace') {
    //     backspaceFunction();
    } else {
        false;
    }
})