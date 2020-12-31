/**
 * Let's learn about Streams so we can access the request bodies of an incoming request.
 * In Express this is handled with body-parser, but this is vanilla NodeJS where we rely on http-module and streams (and event module).
 *
 * Once this server is started, it'll print out whatever was sent over in the POST body.
 */

const http = require('http')

const port = process.env.port || 3000

const server = http.createServer((req, res) => {
    /**
     * Readable Streams can be a response on the client, or a request on the server.
     * This one would of course be considered the server, so, its req object is the Readable Stream.
     *
     * We change this readable stream (called req) from "paused" to "flowing" by adding a data event handler per the docs:
     * https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_two_modes
     */
    req.on('data', chunk => {
        console.log(`Data chunk available: ${chunk}`)
    })
    req.on('end', () => {
        //end of data
    })
})

server.listen(`${port}`, () => {
    console.log(`server listening at port ${port}`)
})
