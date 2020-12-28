const { add, aModuleObject, echoEnvVars } = require('./custom_modules/cli-intro')

const envVars = echoEnvVars()

const adder = add(1, 2)
console.log('\n*** Adder function, node module:\n', adder)

console.log('\n*** JS object, node module:\n', aModuleObject)
