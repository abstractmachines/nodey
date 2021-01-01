/** Lil' NodeJS "client" : Consumes http-streams.js
 *
 * Consuming our vanilla NodeJS API with EventEmitter, Readable Streams and more.
 */

const http = require('http')

const data = JSON.stringify({
    toDo: 'Buy the milk',
    toDont: 'Comment code well',
    toDoToo: 'Be a goose'
})

const opts = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
}

const optsGet = {
    ...opts,
    headers: {
        'Content-Type': 'application/json'
    }
}

const optsPost = {
    ...opts,
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    },
    method: 'POST',
}

const get = http.request(optsGet, res => {
    const { headers } = res
    if (res.statusCode === 200) {

        /** Readable Stream, res:
         * Readable streams are a "source from which data is consumed.*
         * Readable Streams can be a response on the client, or a request on the server.
         * This one would of course be considered the client, so, its res object is the Readable Stream.
         *
         * We change this readable stream (called req) from "paused" to "flowing" by adding a data event handler per the docs:
         * https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_two_modes
         */
        res.on('data', chunk => {
            process.stdout.write(JSON.stringify(headers))
            process.stdout.write(chunk)
        })
    } else {
        get.emit('SIGTERM')
    }
})

get.on('SIGTERM', () => {
    get.close() // 120 second sleep!
})

get.on('SIGKILL', () => {
    process.exit(1) // shut down immediately. See also setImmediate()
})

get.end()

const post = http.request(optsPost, res => {
    const { headers } = res

    if (res.statusCode === 200) {
        res.on('data', chunk => {
            process.stdout.write(JSON.stringify(headers))
            process.stdout.write(chunk)
        })
    }
    else {
        post.emit('SIGTERM')
    }
})

post.write(data)

post.on('SIGTERM', () => {
    post.close() // 120 second sleep!
})

post.on('SIGKILL', () => {
    process.exit(1) // shut down immediately. See also setImmediate()
})

post.end()

// same for PUT and DELETE.
