
const add = (x, y) => x + y

const echoEnvVars = () => {
    console.log('\n*** Your process.env vars and argv program args are:\n',
        '\nprocess.env :\n',' process.env',
        '\n process.argv:', process.argv
    );
};

const aModuleObject = {
    name: 'doge',
    description: 'Node modules don\'t have to be a function.'
}

module.exports = {
    aModuleObject,
    echoEnvVars,
    add
}

// Note: This works too.
// exports.aProperty = aProperty
