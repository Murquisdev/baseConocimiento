/*
Ejercicio 5: Limpieza de Datos
Recibes un array con datos que tienen "ruido" al principio y al final: const datos = ["ERROR_START", 10, 20, 30, 40, "ERROR_END"];

1. Elimina el primer elemento del array.

2. Elimina el último elemento del array.

3. El array debería quedar solo con los números. Muestra el resultado final y su nueva longitud.
*/

const datos = ["ERROR_START", 10, 20, 30, 40, "ERROR_END"];

datos.pop();
datos.shift();

console.log(datos, datos.length);
