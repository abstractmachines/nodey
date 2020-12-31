// Here we consume server-http-basic.js by firing that up first, and then firing up this file.
// In server-http-basic.js we have basically only one route, no persistence, and nothing going on.
// Just 200's returned from these basic calls.

const http = require('http')

const optionsGET = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'GET'
}

const data = JSON.stringify({
    todo: 'Buy the milk'
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

    res.on('data', d => {
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
        process.stdout.write(d)
    })
})

post.on('error', error => {
    console.error(error)
})

post.write(data)
post.end()

// same for PUT and DELETE.
