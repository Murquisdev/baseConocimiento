/*
6. Buscando al usuario: Dado el array de objetos:

JavaScript
const usuarios = [
  { id: 1, nombre: 'Juan' },
  { id: 2, nombre: 'Maria' },
  { id: 3, nombre: 'Pedro' }
];

Encuentra el índice del usuario que tiene el id: 2.
*/
const usuarios = [
  { id: 1, nombre: "Juan" },
  { id: 2, nombre: "Maria" },
  { id: 3, nombre: "Pedro" },
];

const indiceUsuario = usuarios.findIndex((usuario) => usuario.id === 2);
console.log(indiceUsuario);
