# Practice — my first steps in JavaScript

This folder holds the loose scripts I learned with, step by step, until I reached
the final project ([`../repo-finder`](../repo-finder)). They are not a deliverable:
they are my "exercise notebook". I keep them here to show the path.

The order in which I made them tells a story: from printing a greeting, to reading
real data from the internet, to handling errors and splitting the code into pieces.

## The files, in order

### 1. `hello.js` — the most basic
A function that receives a name and returns a greeting.
**Learned:** what a function is, how it receives a parameter, and how `return` /
`console.log` are different things (one returns, the other prints).

### 2. `user.js` — my first call to the internet
Queries the GitHub API for **one** user and shows their name, number of
repos, company and location.
**Learned:** `fetch` to request data, `await` to wait for the response, and
`.json()` to turn it into something usable. The response was **an object**, so
I accessed its fields with a dot (`data.name`).

### 3. `repos.js` — from an object to a list
I request a user's repositories. Here the response is no longer an object: it's an
**array** of objects.
**Learned:** how to iterate over a list with `for...of`, how to use `.length` to count, and
I started adding `try/catch` + `response.ok` so that a non-existent user
returned a clean `404` instead of breaking the program.

### 4. `repos2.js` — functions that collaborate
The most advanced version before the deliverable. I split the code into `fetchRepos`
(fetches) and `displayRepos` (displays), and a `main` that coordinates them over a list
of several users.
**Learned:** the key rule of `async` — a function is `async` only if it has to
**wait for something from outside**. `fetchRepos` waits for the internet → `async`;
`displayRepos` only uses data it already has → it doesn't need `async`. That idea is the
foundation of the final project.

## Note
These scripts have experiments, long comments and even test users
invented on purpose (to see how errors are handled). That's normal in
practice. The clean, presentable version of all this lives in
[`../repo-finder`](../repo-finder).
