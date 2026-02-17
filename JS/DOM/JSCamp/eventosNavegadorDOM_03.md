# JS DOM

## [Separando el código en módulos](https://www.jscamp.dev/javascript/modulos-javascript)

Los módulos son archivos independientes de JavaScript que pueden exportar funcionalidades (funciones, objetos, variables) para que otros archivos las importen y utilicen.

```html
<!-- Forma tradicional (NO módulo) -->
<script src="main.js"></script>

<!-- Como módulo -->
<script type="module" src="main.js"></script>
```

Al usar `type="module"`, el navegador:

- Permite usar _import_ y _export_ en ese archivo
- Ejecuta el código en modo estricto automáticamente
- Trata cada archivo como un ámbito independiente (no contamina el global)
- Aplica _CORS_, por lo que necesitas un servidor local para desarrollo

Ejemplo de exportación:

```js
// filtros.js
export function filtrarPorTecnologia(jobs, tech) {
  return jobs.filter((job) => job.data.technology.includes(tech));
}

export function filtrarPorModalidad(jobs, modalidad) {
  return jobs.filter((job) => job.data.modalidad === modalidad);
}
```

Ejemplo importación:

```js
// main.js
import { filtrarPorTecnologia, filtrarPorModalidad } from "./filtros.js";

fetch("/repo/content/00-initialize-repo/jobs.json")
  .then((response) => response.json())
  .then((jobs) => {
    const jobsReact = filtrarPorTecnologia(jobs, "react");
    console.log("Ofertas de React:", jobsReact);
  });
```

## [Web Components](https://www.jscamp.dev/javascript/web-components)

Los _Web Components_ son una tecnología nativa del navegador que nos permite crear elementos HTML personalizados y reutilizables.

```html
<!-- En lugar de escribir esto cada vez -->
<img src="https://avatars.githubusercontent.com/u/1561955" alt="Avatar" />

<!-- Creamos nuestro propio elemento -->
<devjobs-avatar></devjobs-avatar>
```

Los Web Components se basan en tecnologías estándar del navegador:

- `Custom Elements`: API para definir nuevas etiquetas HTML
- `Shadow DOM`: Encapsulación de estilos y estructura.
- `HTML Templates`: Plantillas reutilizables (opcional)

### 1. Definir la clase del componente

Todo _Web Component_ es una clase que extiende de **HTMLElement**, para que herede todas las características de un elmento _HTML_

```js
class DevJobsAvatar extends HTMLElement {
  // aquí irá la lógica del componente
}
```

### 2. El constructor y super

```js
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super(); // llamar al constructor de HTMLElement
  }
}
```

`super()`es obligatorio, porque es quien llama al constructor de **HTMLElement**, para que tenga todas las caracaterísiticas _HTML_.

### 3. El método _render_

```js
render() {
  this.innerHTML = `
    <img
      src="https://avatars.githubusercontent.com/u/1561955?v=4"
      alt="Avatar de midudev"
      class="avatar"
    />
  `
}
```

Al inspeccionar el avatar en el navegador se vería tal que:

```html
<devjobs-avatar>
  <img
    src="https://avatars.githubusercontent.com/u/1561955?v=4"
    alt="Avatar de midudev"
    class="avatar"
  />
</devjobs-avatar>
```

### 4. Ciclo de vida

Los Web Components tienen métodos de ciclo de vida que se ejecutan en momentos específicos:

```js
connectedCallback() {
  this.render()
}
```

`connectedCallback()` se ejecuta automáticamente cuando el elemento se añade al DOM. Otros métodos de ciclo de vida son:

- `disconnectedCallback()`: Se ejecuta cuando el elemento se elimina del _DOM_
- `attributeChangedCallback()`: Se ejecuta cuando cambia un atributo observado
- `adoptedCallback()`: Se ejecuta cuando el elemento se mueve a un nuevo documento

### 5. Registrar el componente

```js
customElements.define("devjobs-avatar", DevJobsAvatar);
```

> Los nombres de los componentes _html_ tienen que tener al menos un guión "-", para diferenciarlos de las etiquetas estandar

- Primer argumento: El nombre de la etiqueta HTML (debe tener al menos un guion)
- Segundo argumento: La clase del componente

### Código completo del componente

```js
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super(); // llamar al constructor de HTMLElement
  }

  render() {
    this.innerHTML = `
      <img
        src="https://avatars.githubusercontent.com/u/60507236?v=4"
        alt="Avatar de midudev"
        class="avatar"
      />
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
```

Usando el componente en _HTML_:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Mi Web Component</title>
  </head>
  <body>
    <h1>Hola mundo</h1>
    <devjobs-avatar></devjobs-avatar>

    <script src="avatar.js"></script>
  </body>
</html>
```

o desde JS:

```js
const avatar = document.createElement("devjobs-avatar");
document.body.appendChild(avatar);
```

### Shadow DOM

Con Shadow DOM se puede encapsular el componente para que no le afecten estilos de fuera, ni los suyos al resto.

```js
class DevJobsAvatar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Creamos Shadow DOM
  }

  render() {
    // Ahora usamos shadowRoot en lugar de innerHTML
    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: 40px;
          height: 40px;
          border-radius: 9999px;
        }
      </style>

      <img
        src="https://avatars.githubusercontent.com/u/60507236?v=4"
        alt="Avatar de midudev"
        class="avatar"
      />
    `;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("devjobs-avatar", DevJobsAvatar);
```
