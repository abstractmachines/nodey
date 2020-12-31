/**
 * HTTP module
 * https://nodejs.org/api/http.html
 */

const http = require('http')

const port = process.env.PORT || 3000

/**
 * This serverHttpBasic responds to all requests at all routes.
 *
 * The callback function we pass is the one that's going to be executed upon every request that comes in.
 * Whenever a new request is received, the request event is called, providing two objects:
 * a request (an http-and-streams.IncomingMessage object) and a response (an http-and-streams.ServerResponse object).
 *
 * request: https://nodejs.org/api/http.html#http_event_request
 */
const serverHttpBasic = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end('henlo\n')
})

serverHttpBasic.listen(`${port}`, () => {
    console.log(`server listening at port ${port}`)
})