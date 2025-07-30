# 01 BASES del Webcomponent

## [01 ¿Qué son los WebComponents?](https://lenguajejs.com/webcomponents/componentes/que-son-webcomponents/)

Un **componente** es un elemento que une marcado (_HTML_), estilo (_CSS_) y funcionalidad (_JavaScript_) con una finalidad.

Se pueden reutilizar, modificar sin cambiar otros (encapsulación) y ayuda a la mantenibilidad.

Es una tecnología nativa del navegador, con lo que el rendimiento siempre será mejor.

## [02 Características de webcomponents](https://lenguajejs.com/webcomponents/componentes/caracteristicas-webcomponents/)

Tiene 5 características que se pueden usar de forma independiente, pero al unirlas se forma lo que se conoce de forma habitual como WebComponents.

### - Custom Elements (elementos HTML personalizados)

Nos permite crear **nuestras propias** etiquetas _HTML_

```html
<user-card name="ManzDev"></user-card>

<!-- La etiqueta user-card se transforma en: -->

<div class="card">
  <img src="manzdev.png" alt="ManzDev" />
  <h1>ManzDev</h1>
  <p>ManzDev es un streamer de código.</p>
</div>
```

Las etiquetas personalizadas tienen que tener **SIEMPRE** un guión en su nombre.

### - Templates (plantillas)

Las plantillas permiten crear contenido _HTML_ que no proceserá el navegador hasta que se _clone_ con _JavaScript_.

```html
<template id="user-template">
  <div class="user">
    <h1>Username</h1>
    <img src="user-image.png" alt="Username" />
    <a href="https://website.com/">URL</a>
  </div>
</template>
```

### - Shadow DOM

El _Shadow DOM_ permite crear un _DOM_ particular dentro del elemento HTML, puediendo separarlo del _DOM_ global (_DOM_ = Document Object Model / Modelo de objetos del documento)

```html
<div class="element">
  #shadow-root
  <div class="inner-element">...</div>
</div>
```

El elemento `.element` forma parte del _DOM_ global del documento. Es un elemento vacío, sólo que en este ejemplo contiene un `#shadow-root`, que es el _DOM_ **particular** (_Shadow DOM_). En el interior de ese _DOM_ particular existe una etiqueta `.inner-element`. Dicha etiqueta _HTML_ forma parte del _Shadow DOM_ de `.element`.

### - Modules (Módules ES)

Los [módulos _ECMASCript_](https://lenguajejs.com/javascript/modulos/que-es-esm/) (_ESModules o ESM_) es un estándar de _JavaScript_ que permite exportar y/o importar partes de código de otros archivos.

Estos import/export se pueden hacer directamente desde Javascript o desde HTML, utilizando el atributo type establecido al valor module:

```html
<script type="module" src="fichero.js"></script>
```

Este tipo de importación de módulos es equivalente al `import "./fichero.js";` que podemos realizar desde Javascript y nos puede servir para cargar WebComponents directamente desde HTML.

```js
import songs from "./songs.json" with {type:"json"};
```

Los navegadores soportan importar módulos tipo _json_, _css_ y en un futuro podrán hacerlo con otros formatos como _html_, _wasm_ indicando el tipo.

### - CSS Scopres / Shadow Parts

Son mecánicas para poder dar CSS a los componentes.

- **CSS Scopes**: Permite dar estilo a componentes con _Shadow DOM_
  - Pseudoclase `:host`
  - Pseudoclase funcional `:host()`
  - Pseudoclase funcional `:host-context()`
  - Pseudoelemento funcional `::slotted()`
- **CSS Shadow Parts**: Es una especificación que permite exponer zonas de un componente para darle estilos mediante el pseudoelemento `::part()`.

## [03 Custom Elements (HTML)](https://lenguajejs.com/webcomponents/componentes/custom-elements/)

Etiquetas _HTML_ personalizadas.

El estandar **HTML5** establece que las etiquetas oficiales estarán formadas por una sola palabra y las personalizadas por al menos dos separadas por un guión y en minúsculas.

```html
<app-element> Contenido de nuestro elemento personalizado </app-element>
```

```css
app-element {
  background: indigo;
  color: white;
  padding: 5px 15px;
}
```

Por defecto, los _custom elements_ tienen un `display: inline`, los navegadores los tratan como un elemento en línea.

## [04 Custom Elements (Mejora progresiva)](https://lenguajejs.com/webcomponents/componentes/mejora-progresiva/)

Los WebComponents se programan mediante [**clases de JavaScript**](https://lenguajejs.com/javascript/oop/clases/).

```js
class AppElement extends HTMLElement {
  constructor() {
    super(); // Llamamos al constructor "padre" HTMLElement, es obligatorio.
    console.log("Custom Element inicializado: ", this);
  }
}

customElements.define("app-element", AppElement); // Asociar etiqueta con la clase.
```

1. Definir la clase `AppElement` (**PascalCase** para nombrar clases)
2. Extiende (hereda) de **HTMLElement**, que es la clase base cualquier elemento HTML.
3. Definir un **constructor()**, que son las instrucciones que se ejecutarán cada vez que se cree una nueva instancia de la clase. (Si no se define constructor, por defecto JS crea el constructor vacío con super())
4. Asociar la etiqueta `<app-element>` con la clase `AppElement`

## [05 Estructura de archivos](https://lenguajejs.com/webcomponents/componentes/estructura-componente/)

La estructura de carpetas depende mucho de cada programador o empresa, pero vamos a ver una posible forma de organización.

```bash
- src
   +-- components/              # Carpeta para los componentes
   |     +-- AppElement.js      # Componente de Aplicación
   +-- index.html               # Página principal
   +-- index.css                # Estilos globales
```

Cada componente debe estar separado en archivos diferentes, y la clase y el nombre del fichero se deben de llamar igual y en **PascalCase**

El componente se puede cargar de forma directa en el _HTML_

```HTML
<!DOCTYPE html>
<head>
  <meta charset="utf-8">
  <title>Página principal</title>
  <link rel="stylesheet" href="./index.css">
  <script src="./components/AppElement.js"></script>
</head>
<body>
  <app-element></app-element>
</body>
</html>
```

O con la importación de _JavaScript_, mediante un archivo `index.js` o directamente el archivo.

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <title>Página principal</title>
    <link rel="stylesheet" href="./index.css" />
    <script type="module">
      import "./components/AppElement.js";
    </script>
  </head>
  <body>
    <app-element></app-element>
  </body>
</html>
```

Es muy importante indicar el `type="module`, ya que sino mostrará un error.

Se puede usar el componente de 3 formas diferentes:

1. Directamente en el HTML `<app-element></app-element>`
2. Desde el _DOM_
3. Desde _JavaScript_

```js
// Desde el DOM con JS
const appElement = document.createElement("app-element"); // Crear el elemento
document.body.append(appElement); // Agregar al final del body
```

```js
// Desde JS
import { AppElement } from "./components/AppElement.js";

const appElement = new AppElement();
document.body.append(appElement);

// Hay que recordar añadir EXPORT a la clase del componente si se utiliza esta opción:
export class AppElement extends HTMLElement {
  /* ... */
}
```
