/*
2. Saltando letras en un String
Aprovechando que los strings son iterables, crea una variable let palabra = "Programación". 
Escribe un bucle for clásico que recorra la cadena e imprima 
únicamente las letras que se encuentran en los índices pares (0, 2, 4...).
*/
let palabra = "Programación";

for (let i = 0; i < palabra.length; i++) {
  if (i % 2 === 0) {
    console.log(palabra[i]);
  }
}
