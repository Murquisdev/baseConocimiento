/*
6. El array inverso
Utilizando un bucle for clásico, recorre el array let colores = ['rojo', 'verde', 'azul'] 
empezando desde el último elemento hasta el primero, e imprímelos uno a uno.
*/

let colores = ["rojo", "verde", "azul"];

for (let i = colores.length - 1; i >= 0; i--) {
  console.log(colores[i]);
}
