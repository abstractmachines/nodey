/* The following simple example illustrates the basic use of the readline module.
* See: nodejs.org/api/readline.html#readline_readline
* */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readlineQuery = rl.question(
    'Is NodeJS the best ever?',
    (answer) => {
        console.log(`Thanks for your answer of ${answer}`),
        rl.close()
    }
);

// the Node app will not terminate until the readline.Interface is closed; the interface waits for data on the input stream.

module.exports = {
    readlineQuery
}

