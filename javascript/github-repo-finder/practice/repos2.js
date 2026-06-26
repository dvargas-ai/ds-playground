


async function fetchRepos(user) {
    try {
        const response = await fetch("https://api.github.com/users/" + user + "/repos");

        if (!response.ok) {
            console.log("Could not fetch repos for " + user + ". Status:", response.status);
            return [];
       }

       return await response.json();
    } catch (error) {
        console.log("Connection error:", error.message);
        return [];
    }
}

async function main() {
    const repos = await fetchRepos("dvargas-ai");

// call "fetchRepos" with a user that doesn't exist, to see the error handling, and also with another user
    const missingUserRepos = await fetchRepos("josue-morita");
    const otherUserRepos = await fetchRepos("th3kin-ctrl");


    console.log("dvargas-ai has " + repos.length + " repositories:");
    for (const repo of repos) {
        console.log("- " + repo.name);
    }


// Print the results of the other two users
    console.log("josue-morita has " + missingUserRepos.length + " repositories:");
    for (const repo of missingUserRepos) {
        console.log("- " + repo.name);
    }

    console.log("th3kin-ctrl has " + otherUserRepos.length + " repositories:");
    for (const repo of otherUserRepos) {
        console.log("- " + repo.name);
    }
}


main();




// More optimized version



// fetchRepos: its ONLY job is to hit the API and RETURN the data.
// It is async because internally it has to WAIT (await) for something from outside that takes time.
async function fetchRepos(user) {
  try {
    // fetch sends the request to GitHub and returns a Promise (the "buzzer").
    // await waits for the response to come back and stores it in "response".
    const response = await fetch("https://api.github.com/users/" + user + "/repos");

    // response.ok is true only if the status code was 200-299 (all good).
    // If it responded with an error (e.g. 404 = user does not exist), we warn and return an empty list.
    if (!response.ok) {
      console.log("Could not fetch repos for " + user + ". Status:", response.status);
      return []; // [] so that whoever uses this function never blows up
    }

    // .json() turns the JSON text into something usable (a list). It also takes a moment -> await.
    return await response.json(); // RETURNS the data, does NOT print it
  } catch (error) {
    // catch only runs if we couldn't even reach the server (network failure).
    console.log("Connection error:", error.message);
    return [];
  }
}

// displayRepos: its ONLY job is to PRESENT data it already received.
// It is NOT async because it waits for nothing: it works with the list it is given, already "in hand".
function displayRepos(user, repos) {
  console.log(user + " has " + repos.length + " repositories:");
  for (const repo of repos) {       // we iterate over the list, element by element
    console.log("- " + repo.name);
  }
}

// main: orchestrates. It requests the data (with await) and hands it to whoever displays it.
async function main() {
  const users = ["dvargas-ai", "torvalds", "thisuserdoesnotexist123"];

  for (const user of users) {
    const repos = await fetchRepos(user); // we wait for the data before continuing
    displayRepos(user, repos);            // with the data in hand, we display it
  }
}

main();

/* IMPORTANT NOTES:
- Why is fetchRepos async, but displayRepos is not?
a function only needs to be async if internally it has to wait for something that takes time (that is, if it uses await)

fetchRepos goes to the internet to request data from GitHub. That takes time; internally it uses await to wait, and that's exactly why it must be async.

displayRepos only grabs data it already has in hand (the list of repos it was given) and prints it. It asks no one for anything, waits for nothing, it is instantaneous, and that's why it doesn't need async.


Trick to know what to do with any function:
I should ask myself one question: "Does this function have to wait for something coming from outside, or does it only work with what it already received?"
- Things from outside (internet, database) take time --> async.
- Things already in hand --> take no time --> not async

*/
