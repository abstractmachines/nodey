# Working in Node

A guide for understanding the NodeJS ecosystem, writing Node modules, and writing APIs that do not rely on Express or other middleware unnecessarily.

## Node resources
- [Node Github repo](https://github.com/nodejs/node)
- [Node Best Practices repo](https://github.com/goldbergyoni/nodebestpractices)

## Node Modules and the ecosystem
- [Writing Node Modules](#writing-node-modules)
- [Working with the npm package manager](#npm-package-manager)

## API Development in vanilla NodeJS: http, events, and Streams
- [Http module: Create and Consume vanilla NodeJS APIs (and Streams)](http-streams-events/README.md)
- [Streams example](http-streams-events/http-streams.js)
- [Streams example: fs module w Buffers, files](./async/promisifying-fs-buffers.js)

## Writing Node Modules

> What is a Node Module?

>> JavaScript:

- A node module is anything that can be `require()`'d;
- Usually the module will have a JS file, or a package.json file.
- ^^ Not all modules are packages. (Only modules with a package.json are packages).

- use CommonJS export styles (`require`, `exports`, `export`, `module.export`)
- use destructuring of named exports in `require`

>> C++:

- [v8](https://github.com/v8/v8) is written in C++ :)
- [Node](https://github.com/nodejs/node) is written in C++, JS ... 
- [Node Addons](https://nodejs.org/api/addons.html) are written in C++


## Async programming in NodeJS

- Recall low-level concepts of, "time sharing", interrupts, multi-level feedback queues and schedulers, semaphores, mutexes and locks, and concurrency problems. Those concerns also exist in JS.

## NodeJS Event Loop

NodeJS is single threaded, but it uses a call stack and multiple FIFO "priority queues" to handle async operations.

There are three basic elements to this:
- Call Stack.
- Callback Queue (the "ES6 Job Queue", the "microtasks queue").
- Task Queue (the "Message Queue").

- See: https://nodejs.dev/learn/the-nodejs-event-loop
- See: https://medium.com/@siddharthac6/javascript-execution-of-synchronous-and-asynchronous-codes-40f3a199e687

- First priority is the LIFO call stack.
- Once call stack is completed, event loop looks in the ES6 Job Queue (FIFO) for any promises or async functions, 
and the Event Loop then calls those functions right when the call stack empties out. Some people call this the "Callback Queue."
- Finally, the Event Loop looks in the Message Queue (FIFO) for any asynchronous operations outside of the Promises/Async await universe, such as setTimeout timers, user-generated events that aren't promises or async await, etc. Some people call this the "Task Queue."

### Event Loop: What's "slow"? -> use async/promises for ...

- File operations
- Network requests
- Image processing

### Event Loop: process.nextTick()

- `process.nextTick()` to execute at beginning of next loop
- You can use to test whether or not code is completed during next event loop
- You can also use `setImmediate()` or `setTimeout, 0` to execute at END of next event loop.

### Why we care about timers: CPU-bound tasks

> [nodejs.dev](https://nodejs.dev/learn/discover-javascript-timers): "This is especially useful to avoid blocking the CPU on intensive tasks and let other functions be executed while performing a heavy calculation, by queuing functions in the scheduler."

## Getting user input

- use `readline` module for basic stuff
- for passwords, and more advanced, use the `inquirer.js` _package_.
- Seeing as how it's a package, you'll need `npm install`

## npm package manager

- see: https://nodejs.dev/learn/an-introduction-to-the-npm-package-manager

### Troubleshooting npm

> Tips:

- You can always use `npm ci` to start a project with a clean slate if you have a lockfile. [see npm ci docs](https://docs.npmjs.com/cli/v6/commands/npm-ci).
- To search for a package in node modules try `npm ls | grep packageName`.
- `npm prune` cleans up your install/removes extraneous packages. [See npm prune docs](https://docs.npmjs.com/cli/v6/commands/npm-prune).
- Clean cache with `npm cache clean`. See [npm cache docs](https://docs.npmjs.com/cli/v6/commands/npm-cache).
- Security audit w `npm audit`.
- "make install generosity" with `npm fund`.

### Versioning w semver (and tagging) w npm

- use [semver](https://semver.org/)
- `npm version patch` // or `major` or `minor` ... bumps version
- `git tag 1.0.1`
- `git push --tags`

### Running / scripts / npm run, npx, w npm

- `npm run packageNameUnderNodeModules`

### npx package runner

- See: https://nodejs.dev/learn/the-npx-nodejs-package-runner
- For binaries: `npx binaryName` (from root; bin is in `./node_modules/.bin`)

### Versions of packages: the caret and the tilde
- `^` caret for minor and patch latest, e.g. **"only upgrade patch and minor versions, but not major"**
- `~` tilde for patch, latest, e.g. **"only upgrade to latest patch"**

### Other fields

- `main`: Entry point
- `engine`: versions/runtime environment
- `bugs`: repo/location to submit bugs to
- `license`: usually ISC or MIT

### List packages

- `npm list` (`npm list -g` for globals)

### Lockfile/shrinkwrap

- package-lock.json
- to "shrink wrap" package versions and use specific versions

### Peer dependencies and transitive dependencies

- See: https://nodejs.org/es/blog/npm/peer-dependencies/
