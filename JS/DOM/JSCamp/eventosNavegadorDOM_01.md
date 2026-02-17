# JS DOM

## [Eventos y JS en el navegador](https://www.jscamp.dev/javascript/eventos-navegador)

Aunque se puede cargar el JS en directamente en el archivo _HTML_, lo más recomendable es crear un archivo externo y cargarlo en el _head_ del _html_

```html
<head>
  <meta charset="UTF-8" />
  <title>Mi página</title>

  <!-- Cargar archivo externo con type="module" -->
  <script type="module" src="script.js"></script>
</head>
```

## Seleccionar un elemento HTML y añadir un evento

```js
const boton = document.querySelector("#boton-importante");

boton.addEventListener("click", function () {
  alert("¡Hiciste clic!");
});
```

Desglosando el códgio:

```js
boton.addEventListener("click", function () {
  //     │                │        │
  //     │                │        └── Función que se ejecuta
  //     │                └─────────── Tipo de evento
  //     └──────────────────────────── Método para escuchar eventos
  alert("¡Hiciste clic!");
});
```

## [Propiedades y métodos de los elementos](https://www.jscamp.dev/javascript/manipulacion-dom)

Al recuperar un elemento se tiene acceso a muchas propiedades y métodos:

```js
const boton = document.querySelector("#boton-importante");

// ¿Qué es boton?
console.log(boton); // <button id="boton-importante">Haz clic</button>

// Leer el contenido de texto
console.log(boton.textContent); // "Haz clic"

// Cambiar el contenido de texto
boton.textContent = "Nuevo texto";

// Posición y tamaño
const rect = boton.getBoundingClientRect();

console.log(rect);

/* Salida: {
  width: 120,
  height: 40,
  x: 100,
  y: 200,
  top: 200,
  left: 100,
  right: 220,
  bottom: 240
} */

// innerHTML - Contenido HTML interno
console.log(boton.innerHTML);

// id - El identificador
console.log(boton.id); // "boton-importante"

// className - Las clases CSS
console.log(boton.className);

// classList - Manipular clases
console.log(boton.classList);

// disabled - Si está deshabilitado
console.log(boton.disabled); // false

// value - Valor (para inputs)
const input = document.querySelector("#mi-input");
console.log(input.value);
```

## Cambiando estilos con _style_

Es importante recordar que las propiedades _CSS_ en _javascript_ se escriben en formato _camelCase_, sin el _-_, _background-color_ vs **backgroundColor**

```js
const boton = document.querySelector("#boton-importante");

boton.addEventListener("click", function () {
  boton.textContent = "¡Aplicado!";
  boton.style.backgroundColor = "#22c55e";
  boton.style.color = "white";
  boton.style.border = "none";
  boton.style.cursor = "not-allowed";
});
```

## querySelectorAll

`querySelectorAll()` devuelve un _NodeList_ con los elementos, que es muy similar a un _array_, pero no es igual.

```js
const botones = document.querySelectorAll(".button-apply-job");

// Tiene .length como los arrays
console.log(botones.length); // 3

// Podemos acceder por índice
console.log(botones[0]); // Primer botón
console.log(botones[1]); // Segundo botón
console.log(botones[2]); // Tercer botón

// Tiene forEach (pero no map, filter, reduce, etc.)
botones.forEach(function (boton) {
  console.log(boton);
});
```

## querySelector vs querySelectorAll

```js
// querySelector - Solo el primero
const primerBoton = document.querySelector(".button-apply-job");
primerBoton.addEventListener("click", function () {
  console.log("Solo funciona en el primer botón");
});

// querySelectorAll - Todos
const todosLosBotones = document.querySelectorAll(".button-apply-job");
todosLosBotones.forEach(function (boton) {
  boton.addEventListener("click", function () {
    console.log("Funciona en todos los botones");
  });
});
```

## [Event Bubbling](https://www.jscamp.dev/javascript/delegacion-eventos)

El Event Bubbling (burbujeo de eventos) es un mecanismo del navegador donde los eventos se propagan desde el elemento más específico hacia los elementos padre.

## Delegación de Eventos

La delegación de eventos aprovecha el event bubbling para añadir un solo evento al elemento padre, en lugar de muchos eventos en los hijos.

```js
// ✅ Un solo evento en el padre
const container = document.querySelector("#jobs-list");

container.addEventListener("click", function (event) {
  // Detectamos si el click fue en un botón
  if (event.target.classList.contains("button-apply-job")) {
    // Código aquí
  }
});
```

No confundir `event.target` con `event.currentTarget`

- **event.target**: El elemento exacto donde hiciste click
- **event.currentTarget**: El elemento donde añadiste el addEventListener

```js
const jobsList = document.querySelector(".jobs-list");

jobsList.addEventListener("click", function (event) {
  //                                         │
  //                                         └── El evento contiene información

  if (event.target.classList.contains("button-apply-job")) {
    //     │        │          │
    //     │        │          └── ¿Tiene esta clase?
    //     │        └───────────── Lista de clases del elemento
    //     └────────────────────── Elemento donde se hizo click

    const boton = event.target; // El botón específico

    boton.textContent = "¡Aplicado!";
    boton.disabled = true;
  }
});
```

## Detener la propagación

Es posible detener la propagación con `event.stopPropagation()`.

## [Optional Chaining](https://www.jscamp.dev/javascript/optional-chaining)

Se utiliza para controlar que un elemento no sea `null` o `undefined` sin tener que utilizar _if_.

```js
objeto?.propiedad;
objeto?.metodo();
```

Comprueba si existe _objeto_ antes de utilizarlo

```js
const button = document.querySelector("#boton-importante");

// Con optional chaining
button?.addEventListener("click", function () {
  console.log("Click");
});
```

Se puede encadenar:

```js
const container = document.querySelector("#container");

// Acceder a propiedades anidadas de forma segura
const width = container?.firstChild?.getBoundingClientRect()?.width;

console.log(width); // undefined si cualquier parte es null
```
