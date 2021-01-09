/*
    Example one, spread operator
*/

let person = {
    name: 'felipe',
    age: 32,
    country: 'CO'
};

let {
    name,
    ...all
} = person;

console.log(name, all);


/*
    Example two, Porpagation Properties
*/

const obj = {
    name: 'Felipe',
    age: 25
}
const obj2 = {
    ...obj,
    country: 'CO'
}
console.log(obj2);

/*
    Example tree, Promise Finally
*/

const helloPromise = (param) => {
    return new Promise((resolve, reject) => {
        (param) ?
        resolve('Hello world'): reject(new Error('Test error...'));
    });
}

helloPromise(true)
    .then(result => console.log('result -> ', result))
    .catch(err => console.log('err -> ', err))
    .finally(() => console.log('finalizó'));

/**
 * Example Four, Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);
