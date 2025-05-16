const add = function(a, b) {
  return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(arr) {
	return arr 
          .reduce((sum, num) => sum + num, 0)
};

const multiply = function(arr) {
  return arr
          .reduce((sum, num) => sum * num)
};

const power = function(a, b) {
  return a ** b
};

const factorial = function(fact) {
  let product = 1;
    for (let i = 2; i <= fact; i++) {
        product *= i
    }
    return product;
}


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
