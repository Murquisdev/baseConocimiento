/* 
1. El detector de intrusos: Dado el array const invitados = ['Angel', 'Beatriz', 'Carlos', 'Diana'];, 
utiliza un método para verificar si 'Eduardo' está en la lista y guarda el resultado (true/false) en una variable.
*/
const invitados = ["Angel", "Beatriz", "Carlos", "Diana"];

const estaEnLaLista = invitados.includes("Eduardo");
console.log(estaEnLaLista);
