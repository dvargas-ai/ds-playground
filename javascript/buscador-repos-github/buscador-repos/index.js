// index.js  ->  El "orquestador": pide los datos y se los pasa a quien los muestra.

// El "./" indica que github.js es un archivo local nuestro (no un paquete de npm).
const { obtenerRepos } = require("./github.js");

// mostrarRepos solo PRESENTA datos que ya recibió. No es async porque no espera
// nada: trabaja con la lista que le pasan, ya "en la mano".
function mostrarRepos(usuario, repos) {
  console.log(usuario + " tiene " + repos.length + " repositorios:");
  for (const repo of repos) {
    console.log("- " + repo.name);
  }
}

// main orquesta: por cada usuario pide los datos (con await) y luego los muestra.
async function main() {
  const usuarios = ["dvargas-ai", "torvalds"];
  for (const usuario of usuarios) {
    const repos = await obtenerRepos(usuario);
    mostrarRepos(usuario, repos);
  }
}

main();
