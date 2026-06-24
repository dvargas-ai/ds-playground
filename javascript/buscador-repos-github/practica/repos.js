// Repositorios de GitHub de dvargas-ai
// Para obtener los repositorios de un usuario, se puede usar la siguiente URL:
// https://api.github.com/users/{username}/repos
// Hasta ahora cada respuesta solo ha sido un objeto, pero en este caso la respuesta es un arreglo de objetos, cada uno representando un repositorio.




// Repos ya no es un objeto, es un array (lista), por eso repost.length da el número de repositorios, y luego se puede recorrer con un for...of para imprimir el nombre y lenguaje de cada repo.



async function verRepos(){


    const respueesta = await fetch("https://api.github.com/users/dvargas-ai/repos")
    const repos = await respueesta.json();

    console.log("tienes " + repos.length + " repositorios:");
    
    for (const repo of repos) {
        console.log("- " + repo.name + " (lenguaje: " + repo.language + ")")

    // Me interesó que el node imprima sobre description y html_url 
        console.log("- " + repo.description + " (html_url: " + repo.html_url + ")")

    }
}

verRepos();




// Siguiente nivel del codigo

async function verRepos() {
  try {
    const respuesta = await fetch("https://api.github.com/users/dvargas-ia/repos");

    if (!respuesta.ok) {
      console.log("Algo salió mal. Código:", respuesta.status);
      return;
    }

    const repos = await respuesta.json();
    console.log("Tienes " + repos.length + " repositorios:");
    for (const repo of repos) {
      console.log("- " + repo.name + " (lenguaje: " + repo.language + ")");
    }
  } catch (error) {
    console.log("No se pudo conectar con la API:", error.message);
  }
}

verRepos();

/* Ejercicio practico 

Debo correr la primera versión y confirmar que veo la lista de repos.

Dentro del for, imprime otro campo de cada repo además del nombre. Abre https://api.github.com/users/dvargas-ai/repos en el navegador para ver qué campos hay disponibles (por ejemplo description, html_url o stargazers_count).
Pasa a la segunda versión con try/catch y respuesta.ok. Luego rompe el código a propósito: escribe mal tu usuario (algo como dvargas-ai-noexiste) y córrelo. Confirma que en vez de reventar, ves limpiamente Código: 404.

*/

