
const myString = 'developer';

let myNewString;
myNewString = myString[0].toUpperCase() + myString.substring(1);


// Solution 2:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;



console.log(myNewString);
