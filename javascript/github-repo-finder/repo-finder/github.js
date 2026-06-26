// github.js -> The "tool": its only job is to hit the API and RETURN the data.

// API base URL. Defining it here keeps the code cleaner and easier to update.
const BASE_URL = "https://api.github.com/users";

// fetchRepos is async because internally it has to WAIT (await) for something
// from outside (the internet), and that takes time.
async function fetchRepos(user) {
    try {
          // fetch sends the request to GitHub; await waits for the response to come back.
      const response = await fetch(`${BASE_URL}/${user}/repos`);

      // response.ok is true only if the status code was 200-299. If there was an
      // error (e.g. 404 = user does not exist), we warn and return an empty list
      // so that whoever uses this function never blows up.
      if (!response.ok) {
              console.log("Could not fetch repos for " + user + ". Status:", response.status);
              return [];
      }

      // .json() turns the JSON text into a usable list. It RETURNS the data, it does not print it.
      return await response.json();
    } catch (error) {
          // The catch only runs if we couldn't even reach the server (network failure).
      console.log("Connection error:", error.message);
          return [];
    }
}

module.exports = fetchRepos; // We export it so it can be used in other files.
