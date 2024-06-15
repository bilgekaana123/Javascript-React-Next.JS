let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];

// Array Constructor
const fruits = new Array('Apple', 'Orange', 'Grape');

x = `My favourite fruit is ${fruits[2]}`;
fruits[2] = 'pear';

fruits[fruits.length] = 'blueberry'; // Add blueberry to latest.

x = numbers.length;

console.log(x);