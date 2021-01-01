/**
 * Let's learn about Streams so we can access the request bodies of an incoming request.
 * In Express this is handled with body-parser, but this is vanilla NodeJS where we rely on http-module and streams (and event module).
 *
 * Once this server is started, it'll print out whatever was sent over in the POST body.
 */

const http = require('http')

const port = process.env.port || 3000

const server = http.createServer((req, res) => {
    const { statusCode } = res
    const okStatus = (statusCode === 200 || statusCode === 201) && true

    if (okStatus) {
        console.log('Returned ', statusCode)
        let dataIntake = '' // assuming data is a string...
        /**
         * Readable Streams can be a response on the client, or a request on the server.
         * This one would of course be considered the server, so, its req object is the Readable Stream.
         *
         * We change this readable stream (called req) from "paused" to "flowing" by adding a data event handler per the docs:
         * https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_two_modes
         */
        req.on('data', chunk => {
            dataIntake += chunk // append the stream's chunk into working memory ...
        })
        req.on('end', () => {
            console.log('dataIntake: ', dataIntake) // tell the client something happened ... send info/headers back ... etc
        })
    } else {
        server.emit('SIGTERM')
    }
})

server.listen(`${port}`, () => {
    console.log(`server listening at port ${port}`)
})

server.on('SIGTERM', () => {
    server.close() // 120 second sleep!
})

server.on('SIGKILL', () => {
    process.exit(1) // shut down immediately. See also setImmediate()
})
