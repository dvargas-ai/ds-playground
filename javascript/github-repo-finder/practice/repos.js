// GitHub repositories of dvargas-ai
// To get a user's repositories, you can use the following URL:
// https://api.github.com/users/{username}/repos
// So far every response has just been an object, but in this case the response is an array of objects, each one representing a repository.




// repos is no longer an object, it's an array (list), that's why repos.length gives the number of repositories, and then you can iterate over it with a for...of to print the name and language of each repo.



async function viewRepos(){


    const response = await fetch("https://api.github.com/users/dvargas-ai/repos")
    const repos = await response.json();

    console.log("you have " + repos.length + " repositories:");

    for (const repo of repos) {
        console.log("- " + repo.name + " (language: " + repo.language + ")")

    // I was interested in having node print description and html_url
        console.log("- " + repo.description + " (html_url: " + repo.html_url + ")")

    }
}

viewRepos();




// Next level of the code

async function viewRepos() {
  try {
    const response = await fetch("https://api.github.com/users/dvargas-ia/repos");

    if (!response.ok) {
      console.log("Something went wrong. Status:", response.status);
      return;
    }

    const repos = await response.json();
    console.log("You have " + repos.length + " repositories:");
    for (const repo of repos) {
      console.log("- " + repo.name + " (language: " + repo.language + ")");
    }
  } catch (error) {
    console.log("Could not connect to the API:", error.message);
  }
}

viewRepos();

/* Practical exercise

I should run the first version and confirm that I see the list of repos.

Inside the for, print another field of each repo besides the name. Open https://api.github.com/users/dvargas-ai/repos in the browser to see which fields are available (for example description, html_url or stargazers_count).
Move on to the second version with try/catch and response.ok. Then break the code on purpose: misspell your username (something like dvargas-ai-noexiste) and run it. Confirm that instead of blowing up, you cleanly see Status: 404.

*/
