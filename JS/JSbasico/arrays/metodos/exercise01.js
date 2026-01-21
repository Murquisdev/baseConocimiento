/* 
Ejercicio 1: Gestión de un Inventario
Imagina que tienes una tienda y empiezas con este array de productos: const inventario = ["Monitor", "Teclado", "Ratón"];

1. Añade "Altavoces" al final del array usando el método adecuado.

2. Añade "Alfombrilla" al principio del array.

3. Elimina el último producto que añadiste y guárdalo en una variable llamada productoVendido.

4 .Muestra por consola el estado final del inventario y el nombre del producto vendido.
*/
const inventario = ["Monitor", "Teclado", "Ratón"];

inventario.push("Altavoces");
inventario.unshift("Alfombrilla");
const productoVendido = inventario.pop();

console.log(inventario);
console.log(productoVendido);
