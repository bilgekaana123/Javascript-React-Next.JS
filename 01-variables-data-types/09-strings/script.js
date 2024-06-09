
let x;
const name = 'John';
const age = 30;
x = 'Hello, my name is ' + name + 'and I am ' 
+ age + ' years old';

// Template Literals use back ticks (``)
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);

// String Properties and Methods
const s = 'Hello World'
x = s.length;
x = s[0];
x = s.charAt(0);

x = s.toUpperCase();
x = s.toLowerCase();

x = s.indexOf('e');

x = s.substring(0, 4);
x = s.substring(7);

x = s.slice(2, 5);

x = '             Hello World'
x = s.trim();

x = s.replace('World', 'John');
x = s.includes('World');
x = s.valueOf();

x = s.split(' ');

console.log(x);




