/*
5. ¿Hay algún negativo?: Tienes una lista de transacciones: const transacciones = [100, 450, -20, 300, -15];. 
Escribe un código que diga simplemente true si existe al menos una transacción negativa (gasto).
*/
const transacciones = [100, 450, -20, 300, -15];

const transaccionNegativa = transacciones.some(
  (transaccion) => transaccion < 0,
);
console.log(transaccionNegativa);
