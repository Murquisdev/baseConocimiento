/*
Ejercicio 6: Clonación y Modificación
Tienes una lista de amigos: const amigos = ["Luis", "Sara"];

1. Crea una copia de ese array llamada nuevosAmigos usando el spread operator.

2. Añade "Elena" a la copia (nuevosAmigos).

3. Comprueba que el array original (amigos) no ha cambiado y sigue teniendo solo dos nombres.
*/

const amigos = ["Luis", "Sara"];

const nuevosAmigos = [...amigos];
nuevosAmigos.push("Elena");

console.log(amigos);
console.log(nuevosAmigos);
