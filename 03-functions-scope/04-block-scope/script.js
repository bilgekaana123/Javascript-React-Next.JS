const x = 100;
const foo = 1;
var bar = 2;

if (true) {
   const y = 200;
   console.log(x + y);
}
// console.log(x + y); Doesnt work because Y is not global

for (let i = 0; i <= 10; i++) {
   console.log(i);
}
// console.log(i); Doesnt work because i is not global

if (true) {
   const a = 500;
   let b = 600;
   var c = 700;
}
console.log(c); // Var is not block scoped.You can use global

function run() {
   var d = 100;
   console.log(d);
}
run();
// console.log(d); Doesnt work on function
