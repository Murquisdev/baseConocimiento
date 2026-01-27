/*
3. Números Impares Primero: Dado el array const datos = [10, 3, 8, 5, 1, 6], crea una función de comparación para
que ordene el array de tal manera que los números impares aparezcan antes que los números pares, 
manteniendo el resto del orden lo más simple posible. 
¿Qué valor debería devolver tu función si el primer argumento es impar y el segundo es par?
*/
const datos = [10, 3, 8, 5, 1, 6];

const datosParesPrimero = datos.toSorted((a, b) => {
  if (a % 2 !== 0 && b % 2 === 0) return -1;
  else if (a % 2 === 0 && b % 2 !== 0) return 1;
  return 0;
});

console.log(datosParesPrimero);
