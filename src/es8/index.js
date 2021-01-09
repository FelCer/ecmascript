const data = {
    frontend: 'luis',
    backend: 'felipe',
    design: 'andres'
}
/*
    Example one, devuelve el objeto en array
*/
const entries = Object.entries(data);
console.log(entries);

/*
    Example two, tener length de un objeto mas rapidamente
*/
console.log(entries.length);

/*
    Example tree, tener los valores del objeto
*/
const values = Object.values(data);
console.log(values);
console.log(values.length);

/*
    Example four
    Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
    Podría servir del lado del front , para mostrar una estructura de elementos.
*/

const string = 'hello';
console.log(string.padStart(7, 'hi')) // se añade al inicio la palabra 'hi'
console.log(string.padEnd(12, ' hi')) // Se añade al final la palabra 'hi'

/*
    Example five 
*/
const helloPromise = (param) => {
    return new Promise((resolve, reject) => {
        (param) ?
        setTimeout(() => resolve('Hello world'), 3000): reject(new Error('Test error...'));
    });
}

const helloAsync = async () => {
    const hello = await helloPromise(true);
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
    try {
        const hello = await helloPromise(true)
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();