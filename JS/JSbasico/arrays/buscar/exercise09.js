/*
9. Buscador flexible: Crea una función que reciba un array de nombres y un nombre a buscar.

Si el nombre existe, debe retornar: "Nombre encontrado en la posición X".

Si no existe, debe retornar: "El nombre no está en la lista".
*/

const nombres = ["Ana", "Juan", "Maria"];

function buscarNombre(nombres, nombreBuscar) {
  const indice = nombres.indexOf(nombreBuscar);
  if (indice !== -1) return `Nombre encontrado en la posición ${indice}`;
  return `El nombre no está en la lista`;
}

console.log(buscarNombre(nombres, "Maria"));
console.log(buscarNombre(nombres, "Pedro"));
