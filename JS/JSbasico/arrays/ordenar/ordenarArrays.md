# JS Arrays

## [Ordenar arrays](https://www.aprendejavascript.dev/clase/arrays/ordenar)

## sort()

Por defecto, _.sort()_ ordena por el valor de cadenas de texto, pero se le puede pasar una función de comparación para modificar este comportamiento.

```js
let numeros = [5, 10, 2, 25, 7];
numeros.sort();
console.log(numeros); // [10, 2, 25, 5, 7]
```

Para conseguir el orden deseado, hay que tener en cuenta que la función que creemos tiene que devolver:

- Un valor negativo si el primer argumento debe aparecer antes que el segundo.
- Un valor positivo si el segundo argumento debe aparecer antes que el primero.
- Cero si ambos argumentos son iguales.

```js
let numeros = [5, 10, 2, 25, 7];

numeros.sort((a, b) => a - b); // ascendente

console.log(numeros); // [2, 5, 7, 10, 25]

numeros.sort((a, b) => b - a); // descendente

console.log(numeros); // [25, 10, 7, 5, 2]
```

## toSorted()

Funciona como _sort()_ pero no modifica el array original, sino que devuelve un array ordenado. Comprobar el soporte en navegadores.

```js
let numeros = [5, 10, 2, 25, 7]

let numerosOrdenados = numeros.toSorted((a, b) => return a - b)

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]
```
