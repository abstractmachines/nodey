/**
 * Chaining Promises; handling errors; Promise.all.
 * https://nodejs.dev/learn/understanding-javascript-promises#chaining-promises
 *
 */

/**
 * Let's talk about Fetch
 *
 * Fetch response
 * https://fetch.spec.whatwg.org/#concept-response
 *
 * https://fetch.spec.whatwg.org/#responses
 *
 * - A response has an associated type... basic, cors, error, or default...
 * - A response has a status, statusText ... https://fetch.spec.whatwg.org/#concept-status
 */
const fetch = require('node-fetch');

const status = response => {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}

const json = response => response.json()

const baseURL = process.env.BASE_URL
const newURL = `${baseURL}/endpoint`

fetch(newURL)
    // The first promise in the chain is a function that we defined, called status(),
    // that checks the response status and if it's not a success response (between 200 and 299), it rejects the promise.
    // This operation will cause the promise chain to skip all the chained promises listed and will skip directly to the catch()
    // statement at the bottom, logging the Request failed text along with the error message.
    // If that succeeds instead, it calls the json() function we defined. Since the previous promise, when successful,
    // returned the response object, we get it as an input to the second promise.
    // If that succeeds instead, it calls the json() function we defined. Since the previous promise, when successful, returned the response object, we get it as an input to the second promise.
    .then(status)    // note that the `status` function is actually **called** here, and that it **returns a promise***
    .then(json)      // likewise, the only difference here is that the `json` function here returns a promise that resolves with `data`
    .then(data => {  // ... which is why `data` shows up here as the first parameter to the anonymous function
        console.log('Request succeeded with JSON response', data)
    })
    .catch(error => {
        console.log('Request failed', error)
    })
    .catch(error => {
        console.log('THIS catch is to catch any errors that happened in the first catch!')
    })

const all = Promise.all([
    status,
    json
])
    .then(([res1, res2]) => {
        console.log('Results', res1, res2)
    })
    .catch((e) => console.err(e))
    .catch((e) => console.log('whatever erred in first catch is caught here.'))

