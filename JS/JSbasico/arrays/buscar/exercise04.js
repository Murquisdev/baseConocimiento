/*
4. Primer número grande: Dado el array const numeros = [10, 20, 35, 50, 15];, 
usa un método para obtener el primer número que sea mayor a 30.
*/

const numeros = [10, 20, 35, 50, 15];

const numeroGrande = numeros.find((numero) => numero > 30);
console.log(numeroGrande);
