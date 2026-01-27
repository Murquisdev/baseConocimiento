/*
2. Ordenación de Inventario: Imagina que tienes un array de objetos que representan productos: 
const productos = [{nombre: "Teclado", precio: 25}, {nombre: "Ratón", precio: 10}, {nombre: "Monitor", precio: 150}]. 
Escribe el código necesario para ordenar este array de productos de menor a mayor precio (orden ascendente) basándote en la propiedad precio.
*/
const productos = [
  { nombre: "Teclado", precio: 25 },
  { nombre: "Ratón", precio: 10 },
  { nombre: "Monitor", precio: 150 },
];
productos.sort((a, b) => a.precio - b.precio);
console.log(productos);
