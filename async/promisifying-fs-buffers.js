/*
Promisifying: wrapping a classic JS function (that takes a callback), with a Promise.

*/

const fs = require('fs')

const retrieveFile = (file) => {
    return new Promise((resolve, reject) => {
        // fs.readFile takes two args: the file path, and a callback function which takes in data and error.
        // we wrap it in a Promise, and reject that promise (and return) if err; otherwise we resolve Promise with the data.
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

retrieveFile('./files/hey.txt')
    .then(data => console.log(data))
    .catch(err => console.error(err))
