/**
 * Consuming our vanilla NodeJS API with EventEmitter, Readable Streams and more.
 *
 * First ensure you're running the server (file with http.createServer in it), then run this to consume it.
 */

const http = require('http')

const optionsGET = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
}


const data = JSON.stringify({
    toDo: 'Buy the milk',
    toDont: 'Comment code well',
    toDoToo: 'Be a goose'
})

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const get = http.request(optionsGET, res => {
    console.log('port: ', optionsGET.port)
    console.log('ya request boi here')
    console.log(`statusCode: ${res.statusCode}`)

    /** Readable Stream, res:
     * Readable streams are a "source from which data is consumed.*
     * Readable Streams can be a response on the client, or a request on the server.
     * This one would of course be considered the client, so, its res object is the Readable Stream.
     *
     * We change this readable stream (called req) from "paused" to "flowing" by adding a data event handler per the docs:
     * https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_two_modes
     */
    res.on('data', d => {
        process.stdout.write(optionsGET.method)
        process.stdout.write(d)
    })
})

get.on('error', error => {
    console.error(error)
})

get.end()


const post = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)

    res.on('data', d => {
        process.stdout.write(options.method)
        process.stdout.write(d)
    })
})

post.on('error', error => {
    console.error(error)
})

post.write(data)
post.end()

// same for PUT and DELETE.
