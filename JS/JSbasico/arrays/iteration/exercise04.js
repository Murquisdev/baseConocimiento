/*
4. Inventario con forEach
Crea un array llamado productos con al menos cuatro nombres de objetos (ej: 'Camisa', 'Pantalón'). 
Usa el método .forEach() para mostrar en consola el listado con el siguiente formato, 
utilizando el índice que proporciona el método:

Producto 0: Camisa

Producto 1: Pantalón
*/

const products = ["Camisa", "Pantalón", "Jersey", "Bufanda"];

products.forEach((product, index) => {
  console.log(`Producto ${index}: ${product}`);
  console.log("\n");
});
