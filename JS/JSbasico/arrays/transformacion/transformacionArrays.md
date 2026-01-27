# JS Arrays

## [Transformar arrays](https://www.aprendejavascript.dev/clase/arrays/transformacion)

## filter

_Filter_ crea un nuevo array con todos los elementos que cumplen la condición indicada.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4, 6]
```

```js
const strings = ["hola", "adiós", "casa", "coche", "perro", "gato"];

// en las cadenas de texto podemos usar el método `includes`
// para saber si una cadena contiene otra:
const stringsWithA = strings.filter((string) => string.includes("a"));

console.log(stringsWithA); // ['hola', 'adiós', 'casa', 'gato']
```

## map

_Map_ crea un nuevo array con la misma longitud que el original, pero con los elementos modificados por una función que se le pasa como parámetro.

```js
const numbers = [1, 2, 3];

const doubleNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubleNumbers); // [2, 4, 6]
```

## map + filter

En JavaScript se pueden encadenar los métodos, con lo que si un método devuelve un array, se puede llamar a otro método sin necesidad de guardarlo en una variable intermedia.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];

const numsGreaterThanFive = numbers
  .map((number) => number * 2) // [2, 4, 6, 8, 10, 12, 14]
  .filter((number) => number > 5); // [6, 8, 10, 12, 14]

console.log(numsGreaterThanFive); // [6, 8, 10, 12, 14]
```

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];

const doubleEvenNumbers = numbers
  .filter((number) => number % 2 === 0) // [2, 4, 6]
  .map((number) => number * 2); // [4, 8, 12]

console.log(doubleEvenNumbers); // [4, 8, 12]
```

## reduce

_Reduce_ permite crear un valor único a partir de un array. Para ello el método necesita dos parámetros, una función y un valor inicial.
La función puede recibir hasta 4 parámetros:

- Acumulador: el valor que se va a ir acumulando en cada iteración
- Elemento actual: el elemento del Array que estamos iterando en ese momento.
- Índice: la posición del elemento actual en el Array (opcional).
- Array original: (opcional)

Devolviendo el valor del acumulador

**Importante**: Si no se pasa un valor inicial, se usará el primer elemento del array.

```js
const numbers = [1, 2, 3];

const sum = numbers.reduce((accumulator, currentNumber) => {
  return accumulator + currentNumber;
}, 0); // <- el 0 es el valor inicial

console.log(sum); // 6
```
