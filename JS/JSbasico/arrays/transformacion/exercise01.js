/* 
1. El filtro de usuarios VIP
Imagina que tienes una lista de usuarios con su nombre y los puntos que han acumulado. 
const usuarios = [{nombre: "Ana", puntos: 120}, {nombre: "Luis", puntos: 50}, {nombre: "Marta", puntos: 200}, {nombre: "Pepe", puntos: 80}];

Tu reto: Crea un nuevo array llamado usuariosVIP que contenga solo a los usuarios que tengan más de 100 puntos.
*/
const usuarios = [
  { nombre: "Ana", puntos: 120 },
  { nombre: "Luis", puntos: 50 },
  { nombre: "Marta", puntos: 200 },
  { nombre: "Pepe", puntos: 80 },
];

const usuariosVIP = usuarios.filter((usuario) => usuario.puntos > 100);
console.log(usuariosVIP);
