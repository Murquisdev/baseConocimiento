/*
Ejercicio 2: El Limitador de Lista
Tienes una lista de tareas muy larga: const tareas = ["Limpiar", "Cocinar", "Comprar", "Estudiar", "Gimnasio", "Dormir"];

1. Tu jefe te dice que solo tienes tiempo para las 3 primeras tareas. Utiliza la propiedad adecuada para recortar el array y que solo queden esas 3 tareas.

2. Imprime el array resultante para comprobar que las demás han desaparecido.
*/
const tareas = [
  "Limpiar",
  "Cocinar",
  "Comprar",
  "Estudiar",
  "Gimnasio",
  "Dormir",
];

tareas.length = 3;
console.log(tareas);
