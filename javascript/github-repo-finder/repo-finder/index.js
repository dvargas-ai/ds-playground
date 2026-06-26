// index.js -> The "orchestrator": it requests the data and hands it to whoever displays it.

// The "./" indicates that github.js is a local file of ours (not an npm package).
const fetchRepos = require("./github.js");

// displayRepos only PRESENTS data it already received. It is not async because it
// waits for nothing: it works with the list it is given, already "in hand".
function displayRepos(user, repos) {
    console.log(`\n${user} has ${repos.length} repositories:`);
    for (const repo of repos) {
          // The API returns many fields; we show the most useful ones.
      const lang = repo.language || "—";
          const stars = repo.stargazers_count;
          const desc = repo.description || "(no description)";
          console.log(`  - ${repo.name} [${lang}] ⭐${stars}`);
          console.log(`    ${desc}`);
          console.log(`    ${repo.html_url}`);
    }
}

// main orchestrates: for each user it requests the data (with await) and then displays it.
async function main() {
    const users = ["dvargas-ai", "torvalds"];
    for (const user of users) {
          const repos = await fetchRepos(user);
          displayRepos(user, repos);
    }
}

main();
