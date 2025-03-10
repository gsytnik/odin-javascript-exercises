const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, num) => total * num, 1)
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(end) {
  
  let total = 1;
	for (i = 2; i <= end; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
