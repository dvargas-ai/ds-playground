# GitHub repository finder

A small Node.js tool that queries the public GitHub API and lists the repositories of one or more users from the terminal.

It's my first project conceived as a **"tool" for an AI agent**: a piece with a single clear responsibility (fetch data) that could be connected to an agent later on.

## What it does

Given a list of GitHub users, it prints their public repositories with name, language, stars, description and URL:

```
dvargas-ai has 4 repositories:
  - ds-playground [null] ⭐0
    Data Science & AI learning playground
    https://github.com/dvargas-ai/ds-playground
  - pitch-coach-prototype [HTML] ⭐0
    Design Thinking prototype for pitch coaching
    https://github.com/dvargas-ai/pitch-coach-prototype
```

## How to run it

You need [Node.js](https://nodejs.org) version 18 or higher (it ships with `fetch` included).

```bash
cd repo-finder
node index.js
# or with npm:
npm start
```

To search for other users, edit the `users` list inside `index.js`.

## Technologies

- Node.js (v18+)
- `fetch` + `async/await` to consume the API
- CommonJS modules (`module.exports` / `require`)

## How it is organized

The project separates **fetching the data** from **displaying the data**. That separation is the core idea:

| File | Responsibility |
|---|---|
| `github.js` | The tool: hits the GitHub API and returns the repos. It does not print. |
| `index.js` | The orchestrator: requests the data and passes it to the function that displays it. |
| `package.json` | Project metadata and minimum required Node.js version. |

## What I learned

- **`async` / `await`**: a function only needs to be `async` if internally it has to wait for something from outside (like the internet). That's why `fetchRepos` is `async` but `displayRepos` is not: the former waits for the API, the latter only works with data it already has in hand.
- **Error handling**: with `try/catch` and `response.ok` the program doesn't crash if a user doesn't exist (404) or if the network fails. Instead of blowing up, it returns an empty list and keeps going.
- **Modules**: `module.exports` in `github.js` and `require("./github.js")` in `index.js` let you split the code across files. The `./` is key: it indicates it's our own file, not an npm package.
- **Separation of concerns**: having each function do a single thing makes the code easier to read, test and reuse.
- **Constants**: extracting the API base URL into `BASE_URL` and using template literals `` `${BASE_URL}/${user}/repos` `` instead of concatenating strings.
