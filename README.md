# Node Modules

- [Writing Node Modules](#writing-node-modules)
- [Working with the npm package manager](#npm-package-manager)

- A node module is anything that can be `require()`'d;
- Usually the module will have a JS file, or a package.json file.
- ^^ Not all modules are packages. (Only modules with a package.json are packages).

## Writing Node Modules

- use CommonJS export styles (`require`, `exports`, `export`, `module.export`)
- use destructuring of named exports in `require`

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
