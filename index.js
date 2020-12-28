const { add, aModuleObject, echoEnvVars } = require('./custom_modules/cli-intro')
const { rl } = require('./custom_modules/readline-usage')

const envVars = echoEnvVars()

const adder = add(1, 2)
console.log('\n*** Adder function, node module:\n', adder)

console.log('\n*** JS object, node module:\n', aModuleObject)

const readlineQuery = rl.question(
    'Is NodeJS the best ever?',
    (answer) => {
        console.log(`Thanks for your answer of ${answer}`),
            rl.close()
    }
);
