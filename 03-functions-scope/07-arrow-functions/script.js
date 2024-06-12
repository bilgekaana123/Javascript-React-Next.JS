// function add(a, b) {
//    return a + b;
// }

// Arrow function syntax
const add = (a, b) => {
   return a + b;
};

// Implicit Return
const substract = (a, b) => a - b;

// Can leave off () with a single parameter
const double = (a) => a * 2;

// Returning an object
const createObject = () => ({
   name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
   console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(substract(2, 1));
console.log(double(10));
console.log(createObject());
