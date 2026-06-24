


async function obtenerRepos(Usuario) {
    try {
        const respuesta = await fetch("https://api.github.com/users/" + Usuario + "/repos");

        if (!respuesta.ok) {
            console.log("No se puedo obtener repos de " + Usuario + ". Código:", respuesta.status);
            return [];
       }

       return await respuesta.json();
    } catch (error) {
        console.log("Error de conexión:", error.message);
        return [];
    }
}

async function main() {
    const repos = await obtenerRepos("dvargas-ai");

// llamar "obtenerRepos" con un usuario que no existe, para ver el manejo de errores y tambien con el de otro usuario
    const reposInexistente = await obtenerRepos("josue-morita");
    const reposOtro = await obtenerRepos("th3kin-ctrl");


    console.log("dvargas-ai tiene " + repos.length + " repositorios:");
    for (const repo of repos) {
        console.log("- " + repo.name);
    }


// Imprimir los resultados de los otros dos usuarios    
    console.log("josue-morita tiene " + reposInexistente.length + " repositorios:");
    for (const repo of reposInexistente) {
        console.log("- " + repo.name);
    }

    console.log("th3kin-ctrl tiene " + reposOtro.length + " repositorios:");
    for (const repo of reposOtro) {
        console.log("- " + repo.name);
    }
}


main();




// Version más optimizada 



// obtenerRepos: su ÚNICO trabajo es ir a la API y DEVOLVER los datos.
// Es async porque por dentro tiene que ESPERAR (await) algo de afuera que toma tiempo.
async function obtenerRepos(usuario) {
  try {
    // fetch envía la petición a GitHub y devuelve una Promesa (el "buzzer").
    // await espera a que vuelva la respuesta y la guarda en "respuesta".
    const respuesta = await fetch("https://api.github.com/users/" + usuario + "/repos");

    // respuesta.ok es true solo si el código fue 200-299 (todo bien).
    // Si respondió con error (ej. 404 = usuario no existe), avisamos y devolvemos lista vacía.
    if (!respuesta.ok) {
      console.log("No se pudo obtener repos de " + usuario + ". Código:", respuesta.status);
      return []; // [] para que quien use esta función nunca reviente
    }

    // .json() convierte el texto JSON en algo usable (una lista). También toma un instante -> await.
    return await respuesta.json(); // DEVUELVE los datos, NO los imprime
  } catch (error) {
    // catch entra SOLO si no nos pudimos ni comunicar con el servidor (falla de red).
    console.log("Error de conexión:", error.message);
    return [];
  }
}

// mostrarRepos: su ÚNICO trabajo es PRESENTAR datos que ya recibió.
// NO es async porque no espera nada: trabaja con la lista que le pasan, ya "en la mano".
function mostrarRepos(usuario, repos) {
  console.log(usuario + " tiene " + repos.length + " repositorios:");
  for (const repo of repos) {       // recorremos la lista, elemento por elemento
    console.log("- " + repo.name);
  }
}

// main: orquesta. Pide los datos (con await) y se los pasa a quien los muestra.
async function main() {
  const usuarios = ["dvargas-ai", "torvalds", "esteusuarionoexiste123"];

  for (const usuario of usuarios) {
    const repos = await obtenerRepos(usuario); // esperamos los datos antes de seguir
    mostrarRepos(usuario, repos);              // ya con los datos, los mostramos
  }
}

main();

/* APUNTES IMPORTANTES:
- Por qué obtenerRepos es async, pero mostrarRepos no?
una funcion necesita ser async solo si por dentro tiene que esperar algo que toma tiempo (es decir, si usa await)

obtenerRepos va a internet a pedirle datos a Github. Eso toma tiempo, por dentro usa await para esperar y es justo por eso la razon por la que debe ser async.

mostrarRepos solo agarra datos que ya tiene en la mano (la lista de repos que le pasaron) y los imprime. No le pide nada a nadie, no espera nada, es intantáneo y por eso no necesita async.


Truco para saber que tengo que hacer frente a cualquier funcion:
Debo plantearme una pregunta: "Esta función tiene que esperar algo que viene de afuera, o solo trabaja con lo que ya recibó?" 
- Lo de afuera (internet, base de datos) toma tiempo --> async.
- Lo que ya está a la mano --> no toma tiempo --> no async

*/