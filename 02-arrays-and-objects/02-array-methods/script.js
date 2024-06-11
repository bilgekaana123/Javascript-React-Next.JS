let x;

const arr = [34, 55, 95, 20, 15];

// arr.push(100); 
// arr.pop();

// arr.unshift(99);
// arr.shift();

// arr.reverse();

// x = arr.includes(55);
// x = arr.indexOf(55);
// x = arr.slice(2,4);    // This doesn't change arr
// x = arr.splice(1, 3);  // This changes arr

x = arr.splice(1, 4).reverse().toLocaleString().charAt(0);


console.log(x);
