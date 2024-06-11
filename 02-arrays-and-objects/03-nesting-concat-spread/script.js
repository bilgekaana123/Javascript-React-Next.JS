let output;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

const allFruits = [fruits, berries];

// fruits.push(berries);

// output = fruits[3][1];
// output = allFruits[1][0];

output = fruits.concat(berries);

// Spread Operator (...)
output = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3,4], 5, [6,7], 8];
output = arr.flat();

// Static Methods on Array Objects
output = Array.isArray(fruits);
output = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;
output = Array.of(a, b, c);

console.log(output);