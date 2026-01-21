/*
Ejercicio 4: Fusión de Menús
Tienes dos arrays que representan el menú de la mañana y el de la tarde: const desayuno = ["Café", "Tostada"]; const almuerzo = ["Ensalada", "Pasta"];

1. Crea un nuevo array llamado menuDelDia que combine ambos usando el método .concat().

2. Crea otro array llamado menuCompleto que combine menuDelDia con un nuevo elemento "Postre" al final, pero esta vez utiliza el spread operator (...).
*/

const desayuno = ["Café", "Tostada"];
const almuerzo = ["Ensalada", "Pasta"];

const menuDelDia = desayuno.concat(almuerzo);
const menuCompleto = [...desayuno, ...almuerzo, "Postre"];

console.log(menuDelDia);
console.log(menuCompleto);
