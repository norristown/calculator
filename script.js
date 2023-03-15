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
