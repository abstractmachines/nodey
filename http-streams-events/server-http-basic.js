/**
 * HTTP module
 * https://nodejs.org/api/http.html
 */

const http = require('http')

const port = process.env.PORT || 3000

/**
 * This serverHttpBasic responds to all requests at all routes. We aren't currently using `router module`.
 *
 * The callback function we pass is the one that's going to be executed upon every request that comes in.
 * Whenever a new request is received, the request event is called, providing two objects:
 * a request (an http-streams-events.IncomingMessage object) and a response (an http-streams-events.ServerResponse object).
 *
 * request: https://nodejs.org/api/http.html#http_event_request
 */

// just curl host to GET
const server = http.createServer((req, res) => {
    const { statusCode } = res
    const okStatus = (statusCode === 200 || statusCode === 201) && true

    if (okStatus) {
        res.setHeader('Content-Type', 'text/html')
        res.end('henlo\n')
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
