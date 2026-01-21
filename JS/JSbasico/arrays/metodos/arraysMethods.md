# JS Arrays

## [Métodos](https://www.aprendejavascript.dev/clase/arrays/metodos)

**.length** (devuelve la longitud del array)

```js
const frutas = ["manzana", "pera", "plátano", "fresa"];
console.log(frutas.length); // 4

frutas.length = 2;

console.log(frutas); // ["manzana", "pera"]
console.log(frutas.length); // 2
```

**.push** (añade un elemento al final del array)

```js
const frutas = ["plátano", "fresa"];
console.log(frutas.length); // 2

const newLength = frutas.push("naranja");
console.log(newLength); // 3
console.log(frutas); // ["plátano", "fresa", "naranja"]

// Se puede añadir más de un elemento
frutas.push("naranja", "melocotón", "sandía");
```

**.pop** (eliminar y devuelve el último elemento de un array)

```js
const frutas = ["plátano", "fresa", "naranja"];
const ultimaFruta = frutas.pop();

console.log(frutas); // ["plátano", "fresa"]
console.log(ultimaFruta); // "naranja"
```

**.shift()** (elimina y devuelve el primer elemento de un array)

```js
const frutas = ["plátano", "fresa", "naranja"];
const primeraFruta = frutas.shift();

console.log(frutas); // ["fresa", "naranja"]
console.log(primeraFruta); // "plátano"
```

**.unshift()** (añade un elemento al principio de un array)

```js
const frutas = ["plátano", "fresa", "naranja"];
frutas.unshift("manzana");

console.log(frutas); // ["manzana", "plátano", "fresa", "naranja"]
```

**concat()** (permite concatenar dos arrays)

```js
const numbers = [1, 2, 3];
const numbers2 = [4, 5];

const allNumbers = numbers.concat(numbers2);

console.log(allNumbers); // [1, 2, 3, 4, 5]
```

Spread operator (**…**)
También es posible concatenar utilizando `…` (spread operator), que propaga los elementos de un array.

```js
const numbers = [1, 2, 3];
const numbers2 = [4, 5];

//                    1, 2, 3        4, 5
const allNumbers = [...numbers, ...numbers2];

console.log(allNumbers); // [1, 2, 3, 4, 5]
```
