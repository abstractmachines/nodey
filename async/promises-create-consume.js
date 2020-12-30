/**
 * Create and Consume Promises
 *
 * See: https://nodejs.dev/learn/understanding-javascript-promises
 */

/**
 * Creating a Promise
 *
 * Let's implement promises using done bool. (Promisifying is more common, but we'll keep it simple.
 */
let done = true
// to fail/reject this promise, make this false.

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
        const why = 'fail'
        reject(why)
    }
})

/**
 * Consuming a Promise.
 *
 */
const consumeDoneYet = () => {
    isItDoneYet
        .then(
            (data) => console.log('data: ', data))
        .catch(
            (e) => console.error(e))
}

consumeDoneYet()
