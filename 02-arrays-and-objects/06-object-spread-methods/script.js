let x;

const todo = new Object()
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;

x = todo;

const person = {
    adress: {
        coords: {
            lat: 42.93,
            lng: -71.3232
        }
    }
}

x = person.adress.coords.lat;

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};

const obj3 = {...obj1, ...obj2};
const obj4 = Object.assign({}, obj1, obj2); 

const todos = [
    { id: 1, name: 'Buy Milk'},
    { id: 2, name: 'Buy Orange'},
    { id: 3, name: 'Play Piano'},
]

x = todos[0].name;

x = Object.values(todo);
x = Object.entries(todo);

x = Object.keys(todo);
x = Object.keys(todo).length;

x = todo.hasOwnProperty('name');

console.log(x);