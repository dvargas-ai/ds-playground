# Práctica — mis primeros pasos en JavaScript

Esta carpeta guarda los scripts sueltos con los que fui aprendiendo, paso a paso,
hasta llegar al proyecto final ([`../buscador-repos`](../buscador-repos)). No son
un entregable: son mi "cuaderno de ejercicios". Los dejo aquí para ver el camino.

El orden en que los hice cuenta una historia: de imprimir un saludo, a leer datos
reales de internet, a manejar errores y a separar el código en piezas.

## Los archivos, en orden

### 1. `hola.js` — lo más básico
Una función que recibe un nombre y devuelve un saludo.
**Aprendí:** qué es una función, cómo recibe un parámetro y cómo `return` /
`console.log` son cosas distintas (una devuelve, la otra imprime).

### 2. `usuario.js` — mi primera llamada a internet
Consulta la API de GitHub para **un** usuario y muestra su nombre, número de
repos, empresa y ubicación.
**Aprendí:** `fetch` para pedir datos, `await` para esperar la respuesta, y
`.json()` para convertirla en algo usable. La respuesta era **un objeto**, así
que accedía a sus campos con punto (`datos.name`).

### 3. `repos.js` — de un objeto a una lista
Pido los repositorios de un usuario. Aquí la respuesta ya no es un objeto: es un
**arreglo** de objetos.
**Aprendí:** a recorrer una lista con `for...of`, a usar `.length` para contar, y
empecé a meterle `try/catch` + `respuesta.ok` para que un usuario inexistente
diera un `404` limpio en vez de romper el programa.

### 4. `repos2.js` — funciones que colaboran
La versión más avanzada antes del entregable. Separé el código en `obtenerRepos`
(busca) y `mostrarRepos` (muestra), y un `main` que los coordina sobre una lista
de varios usuarios.
**Aprendí:** la regla clave de `async` — una función es `async` solo si tiene que
**esperar algo de afuera**. `obtenerRepos` espera a internet → `async`;
`mostrarRepos` solo usa datos que ya tiene → no necesita `async`. Esa idea es la
base del proyecto final.

## Nota
Estos scripts tienen experimentos, comentarios largos y hasta usuarios de prueba
inventados a propósito (para ver cómo se manejan los errores). Eso es normal en la
práctica. La versión limpia y presentable de todo esto vive en
[`../buscador-repos`](../buscador-repos).
