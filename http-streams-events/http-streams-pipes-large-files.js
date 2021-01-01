const http = require('http')
const fs = require('fs')

// https://nodejs.dev/learn/nodejs-streams
// Instead of waiting until the file is fully read, we start streaming it to the HTTP client as soon as we have a chunk of data ready to be sent.

const server = http.createServer((req, res) => {
    const stream = fs.createReadStream(__dirname + '/../files/hey.txt')
    stream.pipe(res)
})

server.listen(3000)

server.on('SIGTERM', () => {
    server.close() // 120 second sleep!
})

server.on('SIGKILL', () => {
    process.exit(1) // shut down immediately. See also setImmediate()
})
