
let x;

x = 5 + '5';
x = 5 + Number('5');

x = 5 * '5';

x = 5 + null;

x = Number(null);

x = Number(true);
x = Number(false);

x = 5 + true;
x = 5 + false;

x = 5 + undefined; // NaN (Not as a Number)

console.log(x, typeof x);


