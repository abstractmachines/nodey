# Node Modules

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