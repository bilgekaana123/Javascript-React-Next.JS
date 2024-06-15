// ||= Assigns the right side value only if the left is a falsy value.

let a = false;
if (!a) {
   a = 10;
}

a = a || 10;
a ||= 10;

// &&= Assigns the right side value only if the left is a truthy value.

let b = 10;
if (b) {
   b = 20;
}

a = a && 20;
a &&= 20;

// ??= Assigns the right side value only if the left is null or undefined.
let c = null;
if (c === null || c === undefined) {
   c = 20;
}

c = c ?? 20;
c ??= 20;
