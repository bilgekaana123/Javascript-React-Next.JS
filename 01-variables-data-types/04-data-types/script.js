// String
const firstName = 'Sara';
console.log(firstName, typeof firstName);

// Number
const age = 30;
const temp = 98.9;
console.log(temp, typeof temp);

// Boolean
const hasKids = true;
console.log(hasKids, typeof hasKids);

// Null
const aptNumber = null;
console.log(aptNumber, typeof aptNumber);

// Undefined
let score;
console.log(score, typeof score);

// Symbol
const id = Symbol('id');
console.log(id, typeof id);

// BigInt
const n = 166826692951515515156016n;
console.log(n, typeof n);

// Reference Types
const numbers = [1, 2, 3, 4];
const person = {
    name: 'Brad'
};
function sayHello() {
    console.log('Hello');
}

const output = sayHello();
console.log(numbers,person, typeof numbers, typeof person)

