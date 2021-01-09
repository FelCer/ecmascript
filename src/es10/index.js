/*
    Example one, array method flat.
    Devolver una matriz con una submatriz aplanada, 
    Recibe como argunmento la profundidad
*/

let array = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2))

/*
    Example two, method flatMap
    mapear cada elemento, luego pasarle una funcion y aplanar
*/

let array2 = [1,2,3,4,5];

console.log(array2.flatMap(value => [value, value * 2]));

/*
    Example tree, trim
*/
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello2 = 'hello world                  ';
console.log(hello2);
console.log(hello2.trimEnd()); // final

/*
    Example four, optional catch biding
*/
try {
    
} catch /*(error) ya no es necesario colocarlo*/ {
    error
}

/*
    Example five, fromEntries
*/
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

/*
    Example six, symbol object
*/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);