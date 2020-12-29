/**
 * Let's implement promises using done bool.
 *
 * Done is, a global constant "done" for Promise "states and fates."
 * @type {boolean}
 */
let done = true

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        // we can resolve Promise with an object, null, a string ...
        const apiResponse = {
            name: 'happy customer',
            age: 0.3,
            segments: [
                'smol',
                'special',
                'loud'
            ]
        }
        resolve(apiResponse)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})
// .catch((e) => console.error(e))
// Adding catch at the end makes it always pending, never fulfilled OR rejected. Why?

console.log(isItDoneYet) // succeeds.


/**
 * Done False
 */
let doneAgain = false

const isItDoneYetAgain = new Promise((resolve, reject) => {
    if (doneAgain) {
        const workDone = 'Here is the thing I built'
        resolve(workDone)
    } else {
        const why = 'Still working on something else'
        reject(why)
    }
})

console.log(isItDoneYetAgain) // fails, and is unhandled.

