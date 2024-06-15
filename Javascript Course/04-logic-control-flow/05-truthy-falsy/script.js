// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

const x = '';

if (x) {
   console.log('This is truthy');
} else {
   console.log('This is falsy');
}

console.log(Boolean(x));

// Others are Truthy

// Truthy and falsy caveats
const children = 2;

if (children !== undefined) {
   console.log(`You have ${children} children`);
} else {
   console.log('Please enter number of children');
}

// Checking for empthy arrays
const posts = [];

if (posts.length > 0) {
   console.log('List Posts');
} else {
   console.log('No Posts');
}

// Checking for empthy objects
const user = {};

if (Object.keys(user).length > 0) {
   console.log('List user');
} else {
   console.log('No User');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);
