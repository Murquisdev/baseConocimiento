/*
3. Presentación con for...of
Dado el siguiente array de nombres: let invitados = ['Ana', 'Juan', 'Luis', 'Marta'] 
Utiliza un bucle for...of para imprimir un mensaje de bienvenida personalizado para cada uno. 
*/

let invitados = ["Ana", "Juan", "Luis", "Marta"];

for (let invitado of invitados) {
  console.log(`Bienvenido/a ${invitado}`);
}
