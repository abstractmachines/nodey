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
     * IncomingMessage implements the Readable Stream Interface. https://nodejs.org/dist/latest-v8.x/docs/api/http.html#http_class_http_incomingmessage
     *
     * The request sent to the backend is a Readable Stream. https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_readable_streams
     * We read data off this stream using the EventEmitter API: https://nodejs.org/api/events.html#events_class_eventemitter
     *
     * Readable Streams can be a response on the client, or a request on the server.
     * This one would of course be considered the server, so, its req object is the Readable Stream.
     *
     * All Readable streams begin in paused mode but can be switched to flowing mode in one of the following ways:
     * - Adding a 'data' event handler.
     * - Other stuff.
     *
     * - Note that we add a data event handler, here, with res.on('data', chunk => { ... }
     * - Similar to readable.on('data', chunk => { ... } described in docs: https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_event_data
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
