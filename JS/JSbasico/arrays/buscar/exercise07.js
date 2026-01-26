/*
7. Control de calidad: Tienes una caja de productos: const productos = ['🍎', '🍎', '🍐', '🍎'];. 
Comprueba si todos los productos son manzanas ('🍎').
*/
const productos = ["🍎", "🍎", "🍐", "🍎"];

const todosManzanas = productos.every((producto) => producto === "🍎");
console.log(todosManzanas);
