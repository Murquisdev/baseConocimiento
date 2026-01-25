/* 
1. El sumatorio con while
Crea un array llamado numeros que contenga cinco valores numéricos (por ejemplo: [10, 20, 30, 40, 50]). 
Utiliza un bucle while para recorrer el array y calcular la suma total de todos sus elementos. 
Al final, imprime el resultado en la consola.
*/
const numeros = [10, 20, 30, 40, 50];

let i = 0,
  sumTotal = 0;

while (i < numeros.length) {
  sumTotal += numeros[i];
  i++;
}

console.log("La suma total es : " + sumTotal);
