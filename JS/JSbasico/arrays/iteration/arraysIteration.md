# JS Arrays

## [Iteración](https://www.aprendejavascript.dev/clase/arrays/iteracion)

Los arrays se pueden iterar (recorrer) utlizando los bucles _for_ o _while_ teniendo en cuenta su longitud.

> Es necesrio recordar que los **STRING** también son iterables, se pueden recorrer para acceder a cada carácter de la cadena.

```js
let frutas = ["🍎", "🍌", "🍓"];
let i = 0; // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i]); // imprime el elemento en la posición i
  i++; // incrementamos el índice en 1 para la siguiente iteración
}
```

```js
let frutas = ["🍎", "🍌", "🍓"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]); // imprime el elemento en la posición i
}
```

También se pueden recorrer en orden inverso y aunque esto son formas válidas para recorrer _arrays_, existen otras estructuras y métodos.

## Bucle for ... of

Este bucle se utiliza cuando solo es necesario recorrer el _array_ y no requiere crear una variable para guardar el índice, pero no se tiene acceso a él.

```js
let frutas = ["🍎", "🍌", "🍓"];

// Se podría leer como, por cada fruta de frutas, haz el código.
for (let fruta of frutas) {
  console.log(fruta);
}
```

## array.forEach()

Con este método se puede recorrer los elementos de un array y saber el índice.

La función que creamos puede recibir 3 argumentos.

1. Elemento
2. Índice
3. El array original.

```js
let frutas = ["🍎", "🍌", "🍓"];

frutas.forEach(function (fruta, index, originalArray) {
  console.log(fruta);
});
```
