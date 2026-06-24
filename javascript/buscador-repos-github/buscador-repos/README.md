# Buscador de repositorios de GitHub

Pequeña herramienta en Node.js que consulta la API pública de GitHub y muestra
los repositorios de uno o varios usuarios desde la terminal.

Es mi primer proyecto pensado como una **"tool" para un agente de IA**: una pieza
con una sola responsabilidad clara (buscar datos) que podría conectarse a un
agente más adelante.

## Qué hace

Dada una lista de usuarios de GitHub, imprime cuántos repositorios públicos
tiene cada uno y los nombra:

```
dvargas-ai tiene 4 repositorios:
- dona-isabela-branding
- ds-playground
- dvargas-ai
- pitch-coach-prototype
torvalds tiene 12 repositorios:
- 1590A
- AudioNoise
...
```

## Cómo correrlo

Necesitas [Node.js](https://nodejs.org) versión 18 o superior (trae `fetch` incluido).

```bash
cd buscador-repos
node index.js
```

Para buscar otros usuarios, edita la lista `usuarios` dentro de `index.js`.

## Tecnologías

- **Node.js** (v18+)
- **fetch** + **async/await** para consumir la API
- **módulos de CommonJS** (`module.exports` / `require`)

## Cómo está organizado

El proyecto separa **buscar los datos** de **mostrar los datos**. Esa separación
es la idea central:

| Archivo      | Responsabilidad                                                        |
|--------------|------------------------------------------------------------------------|
| `github.js`  | La *tool*: va a la API de GitHub y **devuelve** los repos. No imprime.  |
| `index.js`   | El *orquestador*: pide los datos y se los pasa a la función que muestra.|

## Qué aprendí

- **`async` / `await`**: una función necesita ser `async` solo si por dentro tiene
  que **esperar** algo de afuera (como internet). Por eso `obtenerRepos` es `async`
  pero `mostrarRepos` no: la primera espera a la API, la segunda solo trabaja con
  datos que ya tiene en la mano.
- **Manejo de errores**: con `try/catch` y `respuesta.ok` el programa no se cae si
  un usuario no existe (404) o si falla la red. En vez de reventar, devuelve una
  lista vacía y sigue.
- **Módulos**: `module.exports` en `github.js` y `require("./github.js")` en
  `index.js` permiten dividir el código en archivos. El `./` es clave: indica que
  es un archivo mío, no un paquete de npm.
- **Separación de responsabilidades**: que cada función haga una sola cosa hace el
  código más fácil de leer, probar y reutilizar.
