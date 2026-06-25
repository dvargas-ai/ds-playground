# Buscador de repositorios de GitHub

Pequeña herramienta en Node.js que consulta la API pública de GitHub y muestra los repositorios de uno o varios usuarios desde la terminal.

Es mi primer proyecto pensado como una **"tool" para un agente de IA**: una pieza con una sola responsabilidad clara (buscar datos) que podría conectarse a un agente más adelante.

## Qué hace

Dada una lista de usuarios de GitHub, imprime sus repositorios públicos con nombre, lenguaje, estrellas, descripción y URL:

```
dvargas-ai tiene 4 repositorios:
  - ds-playground [null] ⭐0
    Data Science & AI learning playground
    https://github.com/dvargas-ai/ds-playground
  - pitch-coach-prototype [HTML] ⭐0
    Design Thinking prototype for pitch coaching
    https://github.com/dvargas-ai/pitch-coach-prototype
```

## Cómo correrlo

Necesitas [Node.js](https://nodejs.org) versión 18 o superior (trae `fetch` incluido).

```bash
cd buscador-repos
node index.js
# o con npm:
npm start
```

Para buscar otros usuarios, edita la lista `usuarios` dentro de `index.js`.

## Tecnologías

- Node.js (v18+)
- - `fetch` + `async/await` para consumir la API
  - - Módulos CommonJS (`module.exports` / `require`)
   
    - ## Cómo está organizado
   
    - El proyecto separa **buscar los datos** de **mostrar los datos**. Esa separación es la idea central:
   
    - | Archivo | Responsabilidad |
    - |---|---|
    - | `github.js` | La tool: va a la API de GitHub y devuelve los repos. No imprime. |
    - | `index.js` | El orquestador: pide los datos y se los pasa a la función que muestra. |
    - | `package.json` | Metadatos del proyecto y versión mínima de Node.js requerida. |
   
    - ## Qué aprendí
   
    - - **`async` / `await`**: una función necesita ser `async` solo si por dentro tiene que esperar algo de afuera (como internet). Por eso `obtenerRepos` es `async` pero `mostrarRepos` no: la primera espera a la API, la segunda solo trabaja con datos que ya tiene en la mano.
      - - **Manejo de errores**: con `try/catch` y `respuesta.ok` el programa no se cae si un usuario no existe (404) o si falla la red. En vez de reventar, devuelve una lista vacía y sigue.
        - - **Módulos**: `module.exports` en `github.js` y `require("./github.js")` en `index.js` permiten dividir el código en archivos. El `./` es clave: indica que es un archivo propio, no un paquete de npm.
          - - **Separación de responsabilidades**: que cada función haga una sola cosa hace el código más fácil de leer, probar y reutilizar.
            - - **Constantes**: extraer la URL base de la API a `BASE_URL` y usar template literals `` `${BASE_URL}/${usuario}/repos` `` en lugar de concatenar strings.
