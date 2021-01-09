/*
   example one 
*/

//Before
function newFunction(name, age, country) {
    var name = name || 'felipe';
    var age = age || 32;
    var country = country || 'CO';
    console.log(name, age, country);
};

// After -> es6
function newFunction2(name = 'felipe', age = 32, country = 'CO') {
    console.log(name, age, country);
};

newFunction2();
newFunction2('marco', 25, 'MX');

/*
   example two
*/
var hello = "hello";
var world = "world";
//Before
console.log(hello + " " + world);
// Template literal
//After -> es6
console.log(`${hello} ${world}`);

/*
   example tree
*/
//Before
let messages = "query \n" +
    "SQL";
//After -> es6
let messages2 = `query
SQL
`;
console.log(messages);
console.log(messages2);

/*
 example four Destructuring_assignment
*/

//Before
let person = {
    name: 'felipe',
    age: 32,
    country: 'CO'
};
console.log(person.name, person.age);
//After -> es6
let { name, age } = person;
console.log(name, age);

/*
 example five
*/
let team1 = ['messi', 'pique'];
let team2 = ['neymar', 'ronaldo'];
//Before
// hacer un array añadiendo team1 + team2
//After -> es6
let education = ['felipiño', ...team1, ...team2];
console.log(education);

/*
 example six
*/
{
    var globalVar = "Global VAR";
}

{
    let globalLet = "Global LET"
    console.log(globalLet);
}
//console.log(globalLet);  ->> ERROR is scope
console.log(globalVar);

/*
 example seven
*/

let name = "felipe";
let age = 43;
//Before
obj = {
    name: name,
    age: age
}
// After -> es6
obj2 = {
    name,
    age
}

console.log(obj);
console.log(obj2);

/*
 example eight
*/
const names = [{
        name: 'felipe',
        age: 34
    },
    {
        name: 'luis',
        age: 45
    }
]
//Before
let listOfNames = names.map(function (item) {
    console.log(item.name);
});
// After -> es6
let listOfNamesTwo = names.map((item) => {
    console.log(item.name);
});
// or
const listOfNamesTree = (name, age, country) => {
    //.....
};
// or
const listOfNamesFour = name => {
    //.....
}
// or example simple
const square = num => num * num;

/*
 example nine
*/
// After -> es6
const helloPromise = (param) => {
    return new Promise((resolve, reject) => {
        if (param) {
            resolve('OKEY')
        } else {
            reject('Ups!')
        }
    });
}

helloPromise(false)
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.log(error);
    })

/*
 example ten
*/

class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));


/*
 example eleven
*/

import hello from './module.js';
console.log(hello());

/*
 example twelve
 Generator
*/

function* helloworld() {
    if (true) {
        yield 'Hello, '
    }
    if (true) {
        yield 'World'
    }
}
const generatorHello = helloworld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

let b ='a'
let b ='b'
console.log(b);
