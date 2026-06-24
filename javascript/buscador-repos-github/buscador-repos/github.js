// github.js -> La "tool": su único trabajo es ir a la API y DEVOLVER los datos.

// URL base de la API. Definirla aquí hace el código más limpio y fácil de actualizar.
const BASE_URL = "https://api.github.com/users";

// obtenerRepos es async porque por dentro tiene que ESPERAR (await) algo de
// afuera (internet), y eso toma tiempo.
async function obtenerRepos(usuario) {
    try {
          // fetch envía la petición a GitHub; await espera a que vuelva la respuesta.
      const respuesta = await fetch(`${BASE_URL}/${usuario}/repos`);

      // respuesta.ok es true solo si el código fue 200-299. Si hubo error
      // (ej. 404 = usuario no existe), avisamos y devolvemos una lista vacía
      // para que quien use esta función nunca reviente.
      if (!respuesta.ok) {
              console.log("No se pudo obtener repos de " + usuario + ". Código:", respuesta.status);
              return [];
      }

      // .json() convierte el texto JSON en una lista usable. DEVUELVE los datos, no los imprime.
      return await respuesta.json();
    } catch (error) {
          // El catch entra solo si no nos pudimos ni comunicar con el servidor (falla de red).
      console.log("Error de conexión:", error.message);
          return [];
    }
}

module.exports = obtenerRepos; // La exportamos para poder usarla en otros archivos.
