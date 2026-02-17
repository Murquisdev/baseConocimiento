# JS DOM

## [Evento change](https://www.jscamp.dev/javascript/manejar-evento-change-filtrar)

El evento `change` sirve para saber cuando cambia el valor de un _select_

```js
const filterLocation = document.getElementById("filter-location");

filterLocation.addEventListener("change", function () {
  console.log("Ubicación seleccionada:", filterLocation.value);
});
```

El valor del select es el valor del option seleccionado… ¡no el nombre de la opción!

## [Evento input](https://www.jscamp.dev/javascript/mas-eventos-input-blur-submit-prevent-default)

Se ejecuta cuando un usuario escribe en un `input`.

```js
const inputNombre = document.getElementById("input-nombre");
inputNombre.addEventListener("input", function () {
  console.log(inputNombre.value);
});
```

> Se recomienda añadir una etiqueta label a cada input por accesibilidad.

```html
<label>
  Nombre
  <input type="text" id="input-nombre" />
</label>
```

## Evento blur

Se ejecuta al perder el foco.

```js
const inputNombre = document.getElementById("input-nombre");
inputNombre.addEventListener("blur", function () {
  console.log("Perdió el foco");
});
```

> El evento contrario a `blur` es `focus`.

## Evento submit

Se ejecuta cuando el usario envía la información, esta acción se realiza principalmente de dos formas:

- Pulsando un botón tipo `submit``
- Pulsando la tecla `Enter` mientras un `input`dentro del formulario tiene el foco.

Por defecto al hacer un _submit_ la página se recarga y añade a la **URL** el valor de los _inputs_

Hay una forma de prevenir este comportamiento, con el método `preventDefault`

```js
formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Formulario enviado");
});
```

## Evento keydown

Se ejecuta al presionar una tecla

```js
// Al escuchar directamente en el documento, podemos escuchar todas las teclas
// que se pulsen independientemente de dónde esté el foco
document.addEventListener("keydown", function (event) {
  console.log("Tecla presionada:", event.key);
});
```

> El evento contrario a _keydown_ es _keyup_.

Información del evento:

- `event.key`: La tecla presionada.
- `event.code`: El código de la tecla.
- `event.shiftKey`: Si la tecla se está presionando con la tecla Shift.
- `event.ctrlKey`: Si la tecla se está presionando con la tecla Ctrl.
- `event.altKey`: Si la tecla se está presionando con la tecla Alt.
- `event.metaKey`: Si la tecla se está presionando con la tecla Meta.

## [Atributos data-](https://www.jscamp.dev/javascript/como-recuperar-datos-de-los-elementos-html)

Los atributos `data-` son atributos que se utilizan para almacenar datos en los elementos HTML que no se muestran en pantalla, pero pueden ser útiles para el código _JavaScript_

```html
<div data-nombre="Miguel" data-edad="25"></div>
```

```js
const div = document.querySelector("div");
console.log(div.dataset.nombre); // "Miguel"
console.log(div.dataset.edad); // "25"
```

> El objeto `dataset` es un objeto que contiene todos los atributos _data-_ del elemento, pero sin el prefijo _data-_.

```js
// Otra forma de recuperar los atributos data-
const div = document.querySelector("div");

console.log(div.getAttribute("data-nombre")); // "Miguel"
console.log(div.getAttribute("data-edad")); // "25"
```

> El método `getAttribute` devuelve el valor de cualquier atributo del elemento. Por eso, en este caso, debemos pasarle el nombre del atributo con el prefijo _data-_.

### Ejemplo de filtrado con `data-``

```html
<div class="jobs-listings">
  <article
    data-technology="react"
    data-modalidad="remoto"
    class="job-listing-card"
  >
    ...
  </article>

  <article data-modalidad="cdmx" class="job-listing-card">...</article>

  <article data-modalidad="guadalajara" class="job-listing-card">...</article>

  <article data-modalidad="remoto" class="job-listing-card">...</article>
</div>
```

```js
const filter = document.querySelector("#filter-modalidad");
const jobs = document.querySelectorAll(".job-listing-card");

filter.addEventListener("change", function () {
  const selectedValue = filter.value;

  jobs.forEach((job) => {
    // recuperamos el valor de `data-modalidad` del elemento
    const modalidad = job.dataset.modalidad;

    // si el valor seleccionado es vacío o es igual al valor de `data-modalidad` del elemento, mostramos el elemento
    if (selectedValue === "" || selectedValue === modalidad) {
      job.style.display = "flex";
    } else {
      job.style.display = "none";
    }
  });
});
```

## [JSON](https://www.jscamp.dev/javascript/introduccion-json)

_JavaScript Object Notation_ formato de texto ligero para almacenar y transportar datos.

- Es solo texto plano
- Se puede enviar y recibir entre diferentes lenguajes de programación
- Usa pares clave-valor y colecciones como arreglos y objetos

Las diferencias con un _objeto_ son:

- Las claves **siempre** van entre comillas dobles `""`
- Las cadenas usan comillas dobles, nunca simples
- No soporta funciones, métodos ni comentarios
- Los valores válidos son: cadenas, números, booleanos, null, objetos y arrays

```js
// Objeto de JavaScript válido
const job = {
  id: crypto.randomUUID(),
  isActive: true,
  titulo: "Desarrollador/a",
  mostrar: () => console.log("Hola"),
};

// JSON equivalente (como texto)
const jobJSON = `{
  "id": "b30f...",
  "isActive": true,
  "titulo": "Desarrollador/a"
}`;
```

## [Fetch](https://www.jscamp.dev/javascript/fetch-desde-cero)

_Fetch_ es una función disponible que nos permite hacer solicitudes HTTP. Aunque solemos usarla para hablar con APIs, en realidad sirve para cualquier recurso disponible en la web: archivos estáticos, imágenes, JSON, HTML, etc.

```js
// Forma más básica
fetch("https://jsonplaceholder.typicode.com/todos").then((response) => {
  console.log(response.ok); // true si la petición salió bien
  console.log(response.status); // código HTTP, por ejemplo 200
});
```

fecth crea una _promesa_, es decir, se puede seguir ejecutando el resto del código.

Tiene diferentes métodos para intrepretar la respuesta:

- `response.json()` → interpreta el cuerpo como JSON y devuelve otro objeto (es la opción más popular cuando consumimos APIs)
- `response.text()` → devuelve el contenido como una cadena de texto, útil para HTML, Markdown, etc.
- `response.blob()` → entrega un Blob, perfecto para trabajar con imágenes o archivos binarios
- `response.arrayBuffer()` o `response.formData()` → opciones más avanzadas para casos concretos

Ejemplos:

```js
fetch("/repo/content/00-initialize-repo/jobs.json")
  .then((response) => response.json())
  .then((jobs) => {
    console.log("Tenemos", jobs.length, "ofertas disponibles");
  })
  .catch((error) => {
    console.error("No pudimos obtener los datos", error);
  });

fetch("/legal/terminos.html")
  .then((response) => response.text())
  .then((html) => {
    document.querySelector("#legal").innerHTML = html;
  });
```

## [Renderizando datos con fetch](https://www.jscamp.dev/javascript/fetch-mostrar-datos)

`fetch` puede recuperar archivos.

```js
fetch("./data.json")
  .then((response) => response.json())
  .then((jobs) => {
    console.log("Empleos obtenidos:", jobs.length);
  });
```

Con lo que podemos crear un `article`:

```js
const container = document.querySelector(".jobs-listings");

fetch("./data.json") // obtenemos el archivo data.json
  .then((response) => {
    // convertimos la respuesta a JSON
    return response.json();
  })
  .then((jobs) => {
    // recorremos los datos y los mostramos en el DOM
    jobs.forEach((job) => {
      // creamos un elemento HTML <article> para cada trabajo
      const article = document.createElement("article");
      // añadimos la clase job-listing-card al elemento
      article.className = "job-listing-card";
      // añadimos los datos al elemento
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      // añadimos el contenido HTML al elemento
      article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`;

      // añadimos el elemento al contenedor
      container.appendChild(article);
    });
  });
```

Aquí se podría añadir un estado de carga mientras esperamos la respuesta y luego quitarlo en uno de los _.then_.

## Evitar inyectar HTML

Pueden tratar de introducir HTML malicioso (por ejemplo un script), este tipo de ataque se denomina `Cross-Site Scripting (XSS)`

```js
// Ejemplo de JSON malicioso:
const job = {
  titulo: "Oferta increíble",
  empresa: "???",
  descripcion: "<img src=x onerror=\"alert('Robé tus cookies')\">",
};

article.innerHTML = `
  <h3>${job.titulo}</h3>
  <small>${job.empresa}</small>
  <p>${job.descripcion}</p>
`;
```

Posibles estrategias:

- Asignar texto con `textContent`: evita que el navegador interprete el contenido como HTML.

```js
const title = document.createElement("h3");
title.textContent = job.titulo;

const description = document.createElement("p");
description.textContent = job.descripcion;
```

- Crear los nodos necesarios y añadir atributos con `setAttribute` o `dataset` en lugar de concatenar cadenas.

```js
const article = document.createElement("article");
article.className = "job-listing-card";
article.dataset.modalidad = job.data.modalidad;

const company = document.createElement("small");
company.textContent = `${job.empresa} | ${job.ubicacion}`;
```

- Sanear el contenido si por alguna razón necesitas mostrar HTML enriquecido. Puedes apoyarte en librerías como **DOMPurify** o en un backend que filtre etiquetas peligrosas antes de enviarlas.

Patrón de ejemplo recomendado:

```js
const article = document.createElement("article");
article.className = "job-listing-card";

const wrapper = document.createElement("div");

const title = document.createElement("h3");
title.textContent = job.titulo;

const meta = document.createElement("small");
meta.textContent = `${job.empresa} | ${job.ubicacion}`;

const description = document.createElement("p");
description.textContent = job.descripcion;

const button = document.createElement("button");
button.className = "button-apply-job";
button.textContent = "Aplicar";

wrapper.append(title, meta, description);
article.append(wrapper, button);
container.appendChild(article);
```
