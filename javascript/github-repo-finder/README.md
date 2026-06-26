# JavaScript fundamentals — building a GitHub tool

A learning journal where I document my JavaScript journey from scratch, with the goal of understanding how **"tools" work in AI agents**: small, single-responsibility functions that an agent can call when it needs data.

> A *tool* is, at its core, a function with one clear responsibility (e.g., "fetch data from the internet") that an agent can invoke on demand. This project builds exactly that.
>
> ## Structure
>
> ```
> github-repo-finder/
> ├── repo-finder/      → THE DELIVERABLE: polished, ready-to-show tool
> │   ├── github.js         the tool that queries the GitHub API
> │   ├── index.js          the orchestrator that calls the tool
> │   ├── package.json      project metadata + Node.js version requirement
> │   └── README.md
> │
> └── practice/         → THE PATH: loose learning scripts, in order
>     ├── hello.js          basic functions
>     ├── user.js           first API call
>     ├── repos.js          lists and error handling
>     ├── repos2.js         functions that collaborate
>     └── README.md
> ```
>
> ## Where to start
>
> - **Want to see the final result?** Go to [`repo-finder/`](./repo-finder) and follow its README.
> - - **Want to see how I learned step by step?** Go to [`practice/`](./practice).
>  
>   - ## Concepts covered
>  
>   - 1. **Functions**: parameters, `return` vs `console.log`.
>     2. 2. **Async**: `fetch`, `await` and `.json()` to work with data from the internet.
>        3. 3. **Data**: difference between an object and an array, iterating with `for...of`.
>           4. 4. **Robustness**: `try/catch` and `response.ok` so the program doesn't crash on missing users or network failures.
>              5. 5. **Modules**: splitting code into files with `module.exports` / `require` — data fetching in one place, displaying in another.
>                
>                 6. ## Requirements
>                
>                 7. - [Node.js](https://nodejs.org) v18 or higher.
