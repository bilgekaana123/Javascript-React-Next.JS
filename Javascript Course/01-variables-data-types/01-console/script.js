
console.log(100);

console.log("Hi");

console.log("Hi", 20, true);

const x = 100;
console.log(x);

console.error('Alert');

console.warn("Warning");

console.table({name: 'Brad', email: 'brad@gmail.com'});

console.group('simple');
console.error('Alert');
console.warn("Warning");
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';
console.log('%cHello World', styles);