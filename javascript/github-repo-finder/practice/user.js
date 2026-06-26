async function viewUser() {
    const response = await fetch("https://api.github.com/users/dvargas-ai");
    const data = await response.json();

    console.log(data.name);
    console.log("Public repositories:", data.public_repos)

    // I was interested in having node print the user's Company and location
    console.log("Company", data.company);
    console.log("Location", data.location);
}

viewUser();
