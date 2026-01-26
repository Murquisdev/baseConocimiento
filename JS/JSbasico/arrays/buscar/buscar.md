# JS Arrays

## [Búsqueda en arrays](https://www.aprendejavascript.dev/clase/arrays/buscar)

Existen varios métodos en JavaScript que te permiten, específicamente, buscar dentro de un Array. Estos métodos incluyen _indexOf_, _some_, _every_, _find_, _findIndex_ e _includes_.

## indexOf

_IndexOf_ devuelve la posición de un elemento dentro de un Array. Si el elemento no existe, retorna -1.

```js
const emojis = ["✨", "🥑", "😍"];

const posicionCorazon = emojis.indexOf("😍");

console.log(posicionCorazon); // -> 2
```

## includes

_Includes_ determina si un Array incluye un determinado elemento, devolviendo _true_ o _false_.

```js
const emojis = ["✨", "🥑", "😍"];

const tieneCorazon = emojis.includes("😍");

console.log(tieneCorazon); // -> true
```

> El método .includes() también funciona con las cadenas de texto. Puedes utilizarlo para buscar una subcadena dentro de una cadena de texto: 'Hola mundo'.includes('Hola') // -> true

## some

_Some_ permite verificar si al menos uno de los elementos cumple una condición.

Se le pasa una función como argumento, que recibe cada uno de los elementos del Array y debe retornar un valor **booleano**.

Si al menos uno de los elementos es true, entonces devuelve _true_, sino _false_. Si encuentra un elemento _true_, para la iteración

```js
const emojis = ["✨", "🥑", "😍"];

const tieneCorazon = emojis.some((emoji) => emoji === "😍");
console.log(tieneCorazon); // -> true
```

## every

_Every_ permite comprobar si todos los elementos del array cumplen una condición.

Como _some_, necesita una función que recorre todos elementos y devuelva un valor **booleano**.

Si todos los elementos son _true_, devuelve _true_, sino _false_.

```js
// ¿Todos los emojis son felices?
const emojis = ["😀", "😂", "😍", "😭", "🥺", "😎"];
const todosSonFelices = emojis.every((emoji) => emoji === "😀");
console.log(todosSonFelices); // -> false

// ¿Todos los números son pares?
const numbers = [2, 4, 7, 10, 12];
const todosSonPares = numbers.every((number) => number % 2 === 0);
console.log(todosSonPares); // -> false

// ¿Todos los strings son mayores a 3 caracteres?
const names = ["Miguel", "Juan", "Itziar", "Isabel"];
const todosLosNombresSonLargos = names.every((name) => name.length > 3);
console.log(todosLosNombresSonLargos); // -> true
```

## find

_Find_ devuelve el primer elemento que cumple una condición. Funciona igual que _some_ o _every_ pero devolviendo el valor encontrado y deja de iterar, y si no encuentra ningún elemento, devuelve **undefined**

```js
const numbers = [13, 27, 44, -10, 81];
// encuentra el primer número negativo
const firstNegativeNumber = numbers.find((number) => number < 0);

console.log(firstNegativeNumber); // -> -10
```

## findIndex

_FindIndex_ funciona igual que _find_, pero devolviendo el índice de elemento.

```js
const numbers = [13, 27, 44, -10, 81];

// encuentra el índice del primer número negativo
const firstNegativeNumberIndex = numbers.findIndex((number) => number < 0);

console.log(firstNegativeNumberIndex); // -> 3

// ahora puedes usar el índice para acceder al elemento
console.log(numbers[firstNegativeNumberIndex]); // -> -10
```
