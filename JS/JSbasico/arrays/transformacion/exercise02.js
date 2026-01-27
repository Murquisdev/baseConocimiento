/*
2. Formateo de precios (Efecto IVA)
Tienes un array de precios sin impuestos: const preciosBase = [10, 25, 50, 100];

Tu reto: Crea un nuevo array llamado preciosConIVA donde cada precio incluya un 21% de IVA. 
Pista: Debes multiplicar cada número por 1.21
*/

const preciosBase = [10, 25, 50, 100];
//toFixed convierte a string, para corregir esto se puede usar Number o +, el operador +
//hace la conversión a número
const preciosConIVA = preciosBase.map((precio) => +(precio * 1.21).toFixed(2));
console.log(preciosConIVA);
