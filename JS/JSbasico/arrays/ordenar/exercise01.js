/* 
1. El Problema de los Nombres: Tienes un array de nombres de ciudades: 
const ciudades = ["Madrid", "Barcelona", "Sevilla", "Valencia"]. 
Utiliza el método adecuado para obtener un nuevo array con las ciudades ordenadas 
alfabéticamente de la Z a la A, asegurándote de que el array original ciudades no se vea modificado.
*/
const ciudades = ["Madrid", "Barcelona", "Sevilla", "Valencia"];

// Para orden descendente (Z a A), comparamos 'b' contra 'a'
const ciudadesOrdenadasDescendente = ciudades.toSorted((a, b) =>
  b.localeCompare(a),
);
console.log(ciudadesOrdenadasDescendente);
