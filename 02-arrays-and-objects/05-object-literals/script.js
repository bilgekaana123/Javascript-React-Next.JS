let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sports']
};

person.name = 'Jane Doe';
person['isAdmin'] = false;
person.hasChildren = true;
delete person.age;

x = person.name;
x = person['age'];
x = person.age;
x = person.address.state;
x = person.hobbies[0];



person.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

person.greet();
