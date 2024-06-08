
// Ways to declare a variable
// var, let, const
// use Const unless you reassign use Let.

let firstName = 'John';
let lastName = 'Doe';
console.log(firstName, lastName);

let age = 30;
console.log(age);

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number


// Re-assigning Variables
age = 40;
console.log(age);

if(true) {
    age = age + 1;
}
console.log(age);

/* Can't reassign to const
   Can't declare and initialize

const x = 100;
x = 200;
*/

const arr = [1,2,3,4];
arr.push(5);
console.log(arr);


const person = {
    name: 'Brad'
};
person.name = 'John';
console.log(person);

person.email = 'brad@gmail.com';
console.log(person);
