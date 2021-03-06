/**
 * Let's learn about Streams so we can access the request bodies of an incoming request without Express' body-parser.
 * In NodeJS, we will rely on http-module and Streams.
 *
 */

const http = require('http')

const port = process.env.port || 3000

/**
 * http module: createServer
 * @param {req} A Readable Stream.
 * @param {res} A Writeable Stream.
 *  res.write()
 *  res.end()
 */
const server = http.createServer((req, res) => {
    const { statusCode } = res
    const { headers, method, url } = req
    const userAgent = headers['user-agent'];
    const okStatus = (statusCode === 200 || statusCode === 201) && true

    res.setHeader('Content-Type', 'application/json')

    if (okStatus && method === 'POST' || method === 'PUT') {
        let buffer = []
        /**
         * Readable Streams can be a response on the client, or a request on the server.
         * This one would of course be considered the server, so, its req object is the Readable Stream.
         *
         * We change this readable stream (called req) from "paused" to "flowing" by adding a data event handler per the docs:
         * https://nodejs.org/dist/latest-v8.x/docs/api/stream.html#stream_two_modes
         */
        req.on('error', err => {
            // https://nodejs.org/api/errors.html#errors_errors https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
            res.statusCode = 500
            console.error(err.stack) // print stack trace
            res.end()
        }).on('data', chunk => {
            buffer.push(chunk) // append the stream's chunk into working memory ...
        }).on('end', () => {
            buffer = Buffer.concat(buffer).toString()
            console.log('buffer: ', buffer) // tell the client something happened ... send info/headers back ... etc
            res.setHeader('X-Powered-By', 'bacon')
            res.write(buffer)
        })
    } else {
        res.statusCode = 500
        server.emit('SIGTERM')
    }
}).listen(`${port}`, () => {
    console.log(`server listening at port ${port}`)
})

server.on('SIGTERM', () => {
    server.close() // 120 second sleep!
})

server.on('SIGKILL', () => {
    process.exit(1) // shut down immediately. See also setImmediate()
})
