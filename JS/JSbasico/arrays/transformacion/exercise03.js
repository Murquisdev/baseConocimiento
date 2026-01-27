/*
3. El gran total del carrito (Encadenamiento)
Tienes una lista de productos en un carrito: 
const carrito = [
{producto: "Libro", precio: 20}, 
{producto: "Lápiz", precio: 2}, 
{producto: "Agenda", precio: 15}, 
{producto: "Borrador", precio: 1}
];

Tu reto: En una sola línea de código (o encadenando métodos), calcula el precio total pero solo de los productos que cuesten más de 10 euros.

*/

const carrito = [
  { producto: "Libro", precio: 20 },
  { producto: "Lápiz", precio: 2 },
  { producto: "Agenda", precio: 15 },
  { producto: "Borrador", precio: 1 },
];

const sumTotal = carrito
  .filter((producto) => producto.precio > 10)
  .map((producto) => producto.precio)
  .reduce((acumulator, precioProducto) => acumulator + precioProducto, 0);

console.log(sumTotal);
