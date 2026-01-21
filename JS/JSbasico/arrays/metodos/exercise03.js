/*
Ejercicio 3: La Fila del Supermercado
Simula una fila de clientes: const fila = ["Ana", "Juan", "Pedro"];

1. Llega un cliente nuevo, "Lucía", y se pone al final de la fila.

2. El primer cliente de la fila ("Ana") es atendido. Elimínala de la lista y guarda su nombre en una variable atendido.

3. Llega un cliente VIP, "Roberto", que tiene prioridad y se pone al principio de la fila.

4. ¿Cuántas personas quedan en la fila ahora?
*/
const fila = ["Ana", "Juan", "Pedro"];

fila.push("Lucia");
const atendido = fila.shift();
fila.unshift("Roberto");

console.log(fila.length);
console.log(fila);
console.log(atendido);
