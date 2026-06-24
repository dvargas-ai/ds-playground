async function verUsuario() {
    const respuesta = await fetch("https://api.github.com/users/dvargas-ai");
    const datos = await respuesta.json();

    console.log(datos.name);
    console.log("Repositorios públicos:", datos.public_repos)

    // Me interesó que el node imprima sobre Company del usuario y location
    console.log("Company", datos.company);
    console.log("Location", datos.location);
}

verUsuario();



