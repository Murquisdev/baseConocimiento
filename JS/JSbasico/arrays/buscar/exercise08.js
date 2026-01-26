/*
8. Validador de contraseñas: Dado un array de contraseñas const passwds = ['123456', 'qwertyuiop', 'admin12345'];, 
verifica si todas las contraseñas tienen una longitud mayor a 8 caracteres.
*/
const passwds = ["123456", "qwertyuiop", "admin12345"];

const passwdsLengthMoreEight = passwds.every((passwd) => passwd.length > 8);
console.log(passwdsLengthMoreEight);
