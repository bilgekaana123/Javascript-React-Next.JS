console.log(10 > 20 && 30 > 15); // False
console.log(10 > 20 || 30 > 15); // True

// && - Will return first falsy value or the last value
let a;
a = 10 && 20;
console.log(a); // Will return 20

let b;
b = 0 && 30;
console.log(b); // Will return 0

const posts = [];
posts.length > 0 && console.log(posts[0]);

// || - Will return first truthy value or the last value
let c;
c = 10 || 20;
console.log(c);

let d;
d = 0 || '';
console.log(d);

// ?? - Returns the right side operand when the left is null or undefined
let f;
f = null ?? 10;
console.log(f);
